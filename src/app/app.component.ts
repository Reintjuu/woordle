import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { WordService } from "./word.service";
import { Letter } from "./letter";
import { State } from "./state";
import { NzNotificationDataOptions, NzNotificationService } from "ng-zorro-antd/notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChildren('input') inputs?: QueryList<ElementRef>;
  words: Array<Array<Letter>> = new Array<Array<Letter>>();
  state = State;
  won = false;

  private readonly allowedGuesses = 6;
  private readonly wordLength = 5;

  private wordToGuess?: string;
  private currentWordIndex = 0;
  private currentLetterIndex = 0;

  constructor(
    private wordService: WordService,
    private notification: NzNotificationService) { }

  ngAfterViewInit(): void {
    this.inputs?.first.nativeElement.focus();
  }

  async ngOnInit(): Promise<void> {
    for (let wordIndex = 0; wordIndex < this.allowedGuesses; wordIndex++) {
      const word = new Array<Letter>();
      for (let letterIndex = 0; letterIndex < this.wordLength; letterIndex++) {
        word.push(new Letter());
      }
      this.words.push(word);
    }

    this.wordToGuess = await this.wordService.getRandomWord();
    console.log(this.wordToGuess);
  }

  async checkLetterInWord(wordIndex: number, letterIndex: number): Promise<void> {
    if (!this.wordToGuess) {
      return;
    }

    this.currentLetterIndex++;
    // If we're at the last letter of the current guess ...
    if (letterIndex === this.wordLength - 1) {
      const wordToCheck = this.words[wordIndex];

      const assembledWordGuess = wordToCheck
        .map(letter => letter.value)
        .join('')
        .toLowerCase();

      if (!await this.wordService.isRealWord(assembledWordGuess)) {
        setTimeout(() => this.resetGuess(wordToCheck, wordIndex));
        this.notification.create(
          'warning',
          'Onbekend woord',
          `Het woord ${assembledWordGuess} staat niet in de woordenlijst.`
        );
        return;
      }

      // Check if we have won or lost already.
      if (assembledWordGuess === this.wordToGuess) {
        this.won = true;
        this.notification.create(
          'success',
          'Gefeliciteerd',
          `Je hebt het juiste woord (${this.wordToGuess}) geraden!`
        );
      } else if (wordIndex + 1 === this.allowedGuesses) {
        this.notification.create(
          'error',
          'Helaas',
          `Het woord was "${this.wordToGuess}".`,
          {
            nzDuration: undefined
          } as NzNotificationDataOptions
        );
      }

      this.currentWordIndex++;
      this.currentLetterIndex = 0;

      // We need some duct tape to prevent the keyboard from disappearing on mobile.
      setTimeout(() => {
        for (let i = 0; i < wordToCheck.length; i++) {
          const letter = wordToCheck[i];
          letter.setLetterStateBasedOnWord(this.wordToGuess, i);
        }
      });
    }
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


    // TODO: Remove this hacky stuff, and use proper current index tracking.
    // Focus the first of the current guess row.
    setTimeout(() => this.inputs?.get(this.wordLength * wordIndex)?.nativeElement.focus());
  }

  updateCurrentFocus(wordIndex: number, letterIndex: number): void {
    this.currentWordIndex = wordIndex;
    this.currentLetterIndex = letterIndex;
  }

  async onPressKeyboardKey($event: string): Promise<void> {
    this.words[this.currentWordIndex][this.currentLetterIndex].value = $event;
    await this.checkLetterInWord(this.currentWordIndex, this.currentLetterIndex);
  }

  onPressKeyboardBackspace() {
    if (this.currentLetterIndex === 0) {
      return;
    }

    this.currentLetterIndex--;
    this.words[this.currentWordIndex][this.currentLetterIndex].value = undefined;
  }
}
