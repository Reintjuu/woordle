import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { WordService } from "./word.service";
import { Letter } from "./letter";
import { State } from "./state";
import { NzNotificationDataOptions, NzNotificationService } from "ng-zorro-antd/notification";
import { Keyboard } from "./keyboard/keyboard";
import { Title } from "./title/title";
import { NgClass } from "@angular/common";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { GuessCheckerService } from './guess-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Title,
    NgClass,
    NzButtonComponent,
    NzIconDirective,
    Keyboard
  ],
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  // TODO: Probably split the letters in a separate component, and communicate using the #keyboard reference in the view.
  @ViewChild('keyboard') private keyboard?: Keyboard;
  public readonly state = State;

  private readonly allowedGuesses = 6;
  private wordLength = 5;

  public words: Array<Array<Letter>> = new Array<Array<Letter>>();
  public won = false;
  public gameOver = false;

  private wordToGuess?: string;
  private currentWordIndex = 0;
  private currentLetterIndex = 0;

  constructor(
    private wordService: WordService,
    private guessCheckerService: GuessCheckerService,
    private notification: NzNotificationService,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  public async ngOnInit(): Promise<void> {
    await this.resetGame();
  }

  public async resetGame() {
    this.won = false;
    this.gameOver = false;

    this.wordToGuess = undefined;
    this.currentWordIndex = 0;
    this.currentLetterIndex = 0;

    this.keyboard?.resetKeyboardLetterState();

    this.words = new Array<Array<Letter>>();
    this.wordToGuess = await this.wordService.getRandomWord();
    this.wordLength = this.wordToGuess.length;

    for (let wordIndex = 0; wordIndex < this.allowedGuesses; wordIndex++) {
      const word = new Array<Letter>();
      for (let letterIndex = 0; letterIndex < this.wordLength; letterIndex++) {
        word.push(new Letter());
      }
      this.words.push(word);
    }

    console.log(this.wordToGuess);

    this.notification.remove();

    // Force change detection, because Angular suddenly doesn't show the input boxes.
    this.changeDetectorRef.markForCheck();
  }

  @HostListener('window:keydown', ['$event'])
  public async onKeyDown($event: KeyboardEvent): Promise<void> {
    $event.preventDefault();

    switch ($event.key) {
      case 'Enter':
        await this.submitGuess();
        break;
      case 'Backspace':
        this.removeLastLetter();
        break;
      default:
        this.addLetterToCurrentGuess($event.key);
        break;
    }
  }

  public addLetterToCurrentGuess(letter: string): void {
    if (this.currentLetterIndex === this.wordLength
      || !this.isOneLetter(letter)) {
      return;
    }

    this.words[this.currentWordIndex][this.currentLetterIndex].character = letter;
    this.currentLetterIndex++;
  }

  public async submitGuess(): Promise<void> {
    // If we're not at the last letter of the current guess yet ...
    if (this.currentLetterIndex !== this.wordLength) {
      this.notification.create('warning', 'Onvolledig woord', 'Niet genoeg letters ingevuld!');
      return;
    }

    await this.checkFullWordGuess(this.currentWordIndex);
  }

  public removeLastLetter(): void {
    if (this.currentLetterIndex === 0) {
      return;
    }

    this.currentLetterIndex--;
    this.words[this.currentWordIndex][this.currentLetterIndex].character = undefined;
  }

  private async checkFullWordGuess(wordIndex: number): Promise<void> {
    if (!this.wordToGuess) {
      return;
    }

    const guessedWordLetters = this.words[wordIndex];

    let guessedCharacters = guessedWordLetters
      .map(letter => letter.character?.toLowerCase())
      .filter(letter => letter !== undefined);

    const assembledWordGuess = guessedCharacters
      .join('');

    if (!await this.wordService.isRealWord(assembledWordGuess)) {
      this.resetGuess(guessedWordLetters);
      this.notification.create('warning', 'Onbekend woord', `Het woord "${assembledWordGuess}" staat niet in de woordenlijst.`);
      return;
    }

    const states = this.guessCheckerService.determineStatesForGuess(assembledWordGuess, this.wordToGuess);

    // Update letter colors.
    for (let i = 0; i < guessedWordLetters.length; i++) {
      const letterGuess = guessedWordLetters[i];
      letterGuess.state = states[i];
      this.keyboard?.setLettersStateBasedOnInputLetter(letterGuess);
    }

    // Check if we have won or lost.
    if (assembledWordGuess === this.wordToGuess) {
      this.won = true;
      this.gameOver = true;
      this.notification.create('success', 'Gefeliciteerd', `Je hebt het juiste woord (${this.wordToGuess}) geraden!`);
      return;
    }

    if (wordIndex + 1 === this.allowedGuesses) {
      this.gameOver = true;
      this.notification.create('error', 'Helaas', `Het woord was "${this.wordToGuess}".`, {nzDuration: undefined} as NzNotificationDataOptions);
      return;
    }

    this.currentWordIndex++;
    this.currentLetterIndex = 0;
  }

  private resetGuess(guess: Array<Letter>): void {
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      letter.character = undefined;
      letter.state = State.None;
    }

    // Focus on the first letter of the current guess row.
    this.currentLetterIndex = 0;
  }

  private isOneLetter(char: string): boolean {
    return /^\p{L}$/u.test(char);
  }
}
