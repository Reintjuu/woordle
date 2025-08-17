import { Injectable } from '@angular/core';
import { State } from './state';

interface CharacterWithIndex {
  character: string;
  index: number;
}

interface StateWithIndex {
  state: State;
  index: number;
}

@Injectable({
  providedIn: 'root'
})
export class GuessCheckerService {
  public determineStatesForGuess(guess: string, wordToGuess: string): State[] {
    // For example: raasa
    const correctCharacters = wordToGuess
      .split('')
      .map((correctCharacter, i) => ({
        character: correctCharacter,
        index: i
      } as CharacterWithIndex))

    // With guess: arasa
    const guessCharacters = guess
      // TODO: Consider passing split guess directly, because the Letters are already separated.
      .split('')
      .map((c, i) => ({
        character: c,
        index: i
      } as CharacterWithIndex));

    // __asa
    const correctGuesses = guessCharacters
      .filter(gc => gc.character === correctCharacters[gc.index].character);

    // ar___
    const incorrectGuessesOrHints = guessCharacters
      .filter(gc => gc.character !== correctCharacters[gc.index].character);

    // ar
    const hintsWithPotentialDuplicates = incorrectGuessesOrHints
      .filter(ih =>
        correctCharacters.some(cc => ih.character === cc.character
          && !correctGuesses.some(cg => cg.index === cc.index)));

    // TODO: I need some additional filtering.
    const hints: CharacterWithIndex[] = hintsWithPotentialDuplicates;

    const incorrectGuesses = incorrectGuessesOrHints
      .filter(ih => !hints.some(h => ih.index === h.index));

    const correctStates = correctGuesses.map(cg => ({
      state: State.Correct,
      index: cg.index
    } as StateWithIndex));

    const hintStates = hints.map(h => ({
      state: State.Hint,
      index: h.index
    } as StateWithIndex));

    const incorrectStates = incorrectGuesses.map(i => ({
      state: State.Incorrect,
      index: i.index
    } as StateWithIndex));

    // hhccc
    return correctStates
      .concat(hintStates)
      .concat(incorrectStates)
      .sort((a, b) => a.index - b.index)
      .map(s => s.state);
  }
}
