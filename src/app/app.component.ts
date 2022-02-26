import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { WordService } from "./word.service";
import { Letter } from "./letter";
import { State } from "./state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren('input') inputs?: QueryList<ElementRef>;
  words: Array<Array<Letter>> = new Array<Array<Letter>>();
  state = State;
  won = false;

  private readonly wordGuessAmount = 6;
  private readonly wordLength = 5;

  private currentWord?: string;

  constructor(private wordService: WordService) { }

  ngAfterViewInit(): void {
    this.inputs?.first.nativeElement.focus();
  }

  async ngOnInit(): Promise<void> {
    for (let wordIndex = 0; wordIndex < this.wordGuessAmount; wordIndex++) {
      const letters = new Array<Letter>();
      for (let letterIndex = 0; letterIndex < this.wordLength; letterIndex++) {
        letters.push(new Letter());
      }
      this.words.push(letters);
    }

    this.currentWord = await this.wordService.getRandomWord();
    console.log(this.currentWord);
  }

  async checkLetterInWord(wordIndex: number, letterIndex: number): Promise<void> {
    if (!this.currentWord) {
      return;
    }

    // If we're at the last letter of the current guess ...
    if (letterIndex === this.wordLength - 1) {
      const wordToCheck = this.words[wordIndex];

      const assembledWordGuess = wordToCheck
        .map(letter => letter.value)
        .join('')
        .toLowerCase();

      if (!await this.wordService.isRealWord(assembledWordGuess)) {
        setTimeout(() => this.resetGuess(wordToCheck, wordIndex));
        return;
      }

      for (let i = 0; i < wordToCheck.length; i++) {
        const letter = wordToCheck[i];
        letter.setLetterStateBasedOnWord(this.currentWord, i);
      }

      // Check whether each letter is marked correct.
      if (wordToCheck.find(letter => letter.state !== State.Correct)) {
        return;
      }

      // And check if we've won.
      if (assembledWordGuess === this.currentWord) {
        this.won = true;
      }
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

    // Focus the first of the current guess row.
    this.inputs?.get(this.wordLength * wordIndex)?.nativeElement.focus()
  }
}

