import { State } from "./state";

export interface CharacterWithIndex {
  character: string;
  index: number;
}

export interface StateWithIndex {
  state: State;
  index: number;
}

export class Letter {
  state = State.None;

  constructor(
    public character: string | undefined = undefined) {
  }

  public getStates(guess: string, wordToGuess: string): State[] {
    // raasa
    const correctCharacters = wordToGuess
      .split('')
      .map((correctCharacter, i) => ({
        character: correctCharacter,
        index: i
      } as CharacterWithIndex))

    // arasa
    const guessCharacters = guess
      .split('')
      .map((c, i) => ({
        character: c,
        index: i
      } as CharacterWithIndex));

    // __asa
    const correctGuesses = guessCharacters
      .filter(gc => gc.character === correctCharacters[gc.index].character);

    // ar___
    const incorrectOrHints = guessCharacters
      .filter(gc => gc.character !== correctCharacters[gc.index].character);

    // TODO: These index === index for hints and incorrects probably need to be actual comparisons for the current index instead of "some".
    // ar
    const hints = incorrectOrHints
      .filter(ih =>
        correctCharacters.some(cc => ih.character === cc.character)
        && !correctGuesses.some(cg => ih.index === cg.index));

    const incorrects = incorrectOrHints
      .filter(ih => !hints.some(h => ih.index === h.index));

    const correctStates = correctGuesses.map(cg => ({
      state: State.Correct,
      index: cg.index
    } as StateWithIndex));

    const hintStates = hints.map(h => ({
      state: State.Hint,
      index: h.index
    } as StateWithIndex));

    const incorrectStates = incorrects.map(h => ({
      state: State.Incorrect,
      index: h.index
    } as StateWithIndex));

    return correctStates
      .concat(hintStates)
      .concat(incorrectStates)
      .sort((a, b) => a.index - b.index)
      .map(s => s.state);
  }

  public setLetterStateBasedOnWord(wordToGuess: string, characterIndex: number, guessedCharacters: string[]): void {
    if (this.character === undefined) {
      return;
    }

    const currentLowerCaseCharacter = this.character.toLowerCase();

    if (wordToGuess[characterIndex] === currentLowerCaseCharacter) {
      this.state = State.Correct;
      return;
    }

    // raasa
    // arasa
    // --^^^

    // 3x a
    // 2x correct
    // 1 hint voor a

    // raasa
    // aaaaa
    // _^^_^

    // 3x a
    // 3x correct
    // 0 hints voor a

    // TODO: This doesn't work yet, consider using wordToGuess instead of guessedCharacters to filter on?

    const amountOfCorrectlyPlacedCharacters = guessedCharacters
      .filter((characterToCheck, index) => wordToGuess[index] === characterToCheck)
      .length;

    // 1. Beginnen met guessedCharacters
    const isHint = guessedCharacters
      // 2. Letters met indexes mappen
      .map((character, index) => ({character, index} as CharacterWithIndex))
      .filter(characterToCheck =>
        // 5. Alleen characters die dit character zijn overwegen als hint.
        characterToCheck.character === currentLowerCaseCharacter
        // 3. Correcte posities wegfilteren, want dat zijn geen hints
        && characterToCheck.character !== wordToGuess[characterToCheck.index])
      // TODO: Kijk of zoiets nodig is: characters over zijn hints (aantal hints - aantal correct)
      .slice(0, -amountOfCorrectlyPlacedCharacters)
      .some(characterToCheck => characterToCheck.index >= characterIndex);


    if (isHint) {
      this.state = State.Hint;
      return;
    }

    this.state = State.Incorrect;
  }
}
