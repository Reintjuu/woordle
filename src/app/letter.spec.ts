import { Letter } from './letter';
import { State } from './state';

describe('Letter', () => {
  it('should not contain hint for word \'raasa\' and guess \'aaaaa\'', () => {
    const wordToGuess = 'raasa';
    const guess = 'aaaaa';
    const expectedStates = [State.Incorrect, State.Correct, State.Correct, State.Incorrect, State.Correct];

    checkGetStates(guess, wordToGuess, expectedStates);
  });

  it('should contain proper hints for word \'raasa\' and guess \'arasa\'', () => {
    const wordToGuess = 'raasa';
    const guess = 'arasa';
    const expectedStates = [State.Hint, State.Hint, State.Correct, State.Correct, State.Correct];

    checkGetStates(guess, wordToGuess, expectedStates);
  });

  function checkGetStates(guess: string, wordToGuess: string, expectedStates: State[]) {
    const states = new Letter().getStates(guess, wordToGuess);
    console.log(`${wordToGuess}/${guess} (${expectedStates.map(s => State[s])}) / (${states.map(s => State[s])})`);
    expect(
      equal(
        states,
        expectedStates))
      .withContext('Hints are not correctly set')
      .toBeTrue();
  }

  function checkSetLetterStateBasedOnWord(guess: string, wordToGuess: string, expectedStates: State[]) {
    const guessedCharacters = guess
      .split('');

    const guessedLetters = guessedCharacters
      .map(character => new Letter(character));

    for (let i = 0; i < guessedLetters.length; i++) {
      const letterGuess = guessedLetters[i];
      letterGuess.setLetterStateBasedOnWord(wordToGuess, i, guessedCharacters);
    }

    const states = guessedLetters.map(letter => letter.state);
    console.log(`${wordToGuess}/${guess} (${expectedStates.map(s => State[s])}) / (${states.map(s => State[s])})`);
    expect(
      equal(
        states,
        expectedStates))
      .withContext('Hints are not correctly set')
      .toBeTrue();
  }

  function equal(first: State[], second: State[]) {
    if (first.length !== second.length) {
      return false
    }
    return first.every((e, i) => e === second[i]);
  }
});
