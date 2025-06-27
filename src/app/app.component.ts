import { Component, OnInit } from '@angular/core';
import { WordService } from "./word.service";
import { Letter } from "./letter";
import { State } from "./state";
import { NzNotificationDataOptions, NzNotificationService } from "ng-zorro-antd/notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  words: Array<Array<Letter>> = new Array<Array<Letter>>();
  state = State;
  won = false;

  private readonly allowedGuesses = 6;

  private wordToGuess?: string;
  private wordLength = 5;
  private currentWordIndex = 0;
  private currentLetterIndex = 0;

  constructor(
    private wordService: WordService,
    private notification: NzNotificationService) {
  }

  async ngOnInit(): Promise<void> {
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
  }

  async checkFullWordGuess(wordIndex: number): Promise<void> {
    if (!this.wordToGuess) {
      return;
    }

    const wordToCheck = this.words[wordIndex];

    const assembledWordGuess = wordToCheck
      .map(letter => letter.value)
      .join('')
      .toLowerCase();

    if (!await this.wordService.isRealWord(assembledWordGuess)) {
      this.resetGuess(wordToCheck, wordIndex);
      this.notification.create('warning', 'Onbekend woord', `Het woord ${assembledWordGuess} staat niet in de woordenlijst.`);
      return;
    }

    // Update letter colors.
    for (let i = 0; i < wordToCheck.length; i++) {
      const letter = wordToCheck[i];
      letter.setLetterStateBasedOnWord(this.wordToGuess, i);
    }

    // Check if we have won or lost.
    if (assembledWordGuess === this.wordToGuess) {
      this.won = true;
      this.notification.create('success', 'Gefeliciteerd', `Je hebt het juiste woord (${this.wordToGuess}) geraden!`);
      return;
    }

    if (wordIndex + 1 === this.allowedGuesses) {
      this.notification.create('error', 'Helaas', `Het woord was "${this.wordToGuess}".`, {nzDuration: undefined} as NzNotificationDataOptions);
      return;
    }

    this.currentWordIndex++;
    this.currentLetterIndex = 0;
  }

  reloadPage() {
    window.location.reload();
  }

  private resetGuess(guess: Array<Letter>, wordIndex: number): void {
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      letter.value = undefined;
      letter.state = State.None;
    }

    // Focus the first of the current guess row.
    this.currentLetterIndex = 0;
  }

  onKeyboardKeyPress($event: string): void {
    if (this.currentLetterIndex === this.wordLength) {
      return;
    }

    this.words[this.currentWordIndex][this.currentLetterIndex].value = $event;
    this.currentLetterIndex++;
  }

  async onKeyboardEnterPress(): Promise<void> {
    // If we're not at the last letter of the current guess yet ...
    if (this.currentLetterIndex !== this.wordLength) {
      this.notification.create('warning', 'Onvolledig woord', 'Niet genoeg letters ingevuld!');
      return;
    }

    await this.checkFullWordGuess(this.currentWordIndex);
  }

  onKeyboardBackspacePress(): void {
    if (this.currentLetterIndex === 0) {
      return;
    }

    this.currentLetterIndex--;
    this.words[this.currentWordIndex][this.currentLetterIndex].value = undefined;
  }
}
