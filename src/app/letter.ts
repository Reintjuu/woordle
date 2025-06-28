import {State} from "./state";

export class Letter {
  state = State.None;

  constructor(
    public value: string | undefined = undefined) {
  }

  public setLetterStateBasedOnWord(currentWord: string, letterIndex: number): void {
    if (this.value === undefined || this.state !== State.None) {
      return;
    }

    const lowerCaseValue = this.value.toLowerCase();
    if (currentWord[letterIndex] === lowerCaseValue) {
      this.state = State.Correct;
      return;
    }

    if (currentWord.includes(lowerCaseValue)) {
      this.state = State.Hint;
      return;
    }

    this.state = State.Incorrect;
  }
}
