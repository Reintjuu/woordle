import { State } from "./state";

export class Letter {
  value?: string;
  state = State.None;

  public setLetterStateBasedOnWord(currentWord: string | undefined, letterIndex: number): void {
    if (!currentWord || !this.value) {
      return;
    }

    const lowerCaseValue = this.value?.toLowerCase();

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
