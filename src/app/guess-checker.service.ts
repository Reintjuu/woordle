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
    const guessWithIndexes = guess
      // TODO: Consider passing split guess directly, because the Letters are already separated.
      .split('')
      .map((c, i) => ({
        character: c,
        index: i
      } as CharacterWithIndex));

    const wordToGuessWithIndexes = wordToGuess
      .split('')
      .map((correctCharacter, i) => ({
        character: correctCharacter,
        index: i
      } as CharacterWithIndex))


    const corrects = guessWithIndexes
      .filter(gc => gc.character === wordToGuessWithIndexes[gc.index].character);


    const hintsOrIncorrects = guessWithIndexes
      .filter(gc => gc.character !== wordToGuessWithIndexes[gc.index].character);
    var restOfWordToGuessForHints = wordToGuessWithIndexes
      .filter(w => !corrects.some(c => c.index === w.index));


    const hints = Object.entries(groupBy(hintsOrIncorrects, 'character'))
      .flatMap(group => {
        const countOfPotentialHintsForCharacter = restOfWordToGuessForHints.filter(w => w.character == group[0]).length;
        return group[1].slice(0, countOfPotentialHintsForCharacter);
      });

    const incorrectGuesses = hintsOrIncorrects
      .filter(ih => !hints.some(h => ih.index === h.index));

    const correctStates = corrects.map(cg => ({state: State.Correct, index: cg.index} as StateWithIndex));
    const hintStates = hints.map(h => ({state: State.Hint, index: h.index} as StateWithIndex));
    const incorrectStates = incorrectGuesses.map(i => ({state: State.Incorrect, index: i.index} as StateWithIndex));

    return correctStates
      .concat(hintStates)
      .concat(incorrectStates)
      .sort((a, b) => a.index - b.index)
      .map(s => s.state);
  }
}

type MapValuesToKeysIfAllowed<T> = {
  [K in keyof T]: T[K] extends PropertyKey ? K : never;
};
type Filter<T> = MapValuesToKeysIfAllowed<T>[keyof T];

function groupBy<T extends Record<PropertyKey, any>, Key extends Filter<T>>(
  arr: T[],
  key: Key
): Record<T[Key], T[]> {
  return arr.reduce((accumulator, val) => {
    const groupedKey = val[key];
    if (!accumulator[groupedKey]) {
      accumulator[groupedKey] = [];
    }
    accumulator[groupedKey].push(val);
    return accumulator;
  }, {} as Record<T[Key], T[]>);
}
