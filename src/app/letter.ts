import { State } from "./state";

export class Letter {
  value?: string;
  state = State.None;

  public setLetterStateBasedOnWord(currentWord: string, letterIndex: number): void {
    if (!currentWord || !this.value) {
      return;
    }

    if (currentWord[letterIndex] === this.value?.toLowerCase()) {
      this.state = State.Correct;
      return;
    }

    if (currentWord.includes(this.value)) {
      this.state = State.Hint;
      return;
    }

    this.state = State.Incorrect;
  }
}
