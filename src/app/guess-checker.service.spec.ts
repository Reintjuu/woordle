import { State } from './state';
import { GuessCheckerService } from './guess-checker.service';

describe('GuessCheckerService', () => {
  it('should not contain hint for word \'raasa\' and guess \'aaaaa\'', () => {
    const wordToGuess = 'raasa';
    const guess = 'aaaaa';
    const expected = [State.Incorrect, State.Correct, State.Correct, State.Incorrect, State.Correct];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain corrects and hints for word \'raasa\' and guess \'arasa\'', () => {
    const wordToGuess = 'raasa';
    const guess = 'arasa';
    const expected = [State.Hint, State.Hint, State.Correct, State.Correct, State.Correct];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain corrects, hints, and incorrects for word \'garages\' and guess \'ahgasxe\'', () => {
    const wordToGuess = 'garages';
    const guess = 'ahgasxe';
    const expected = [State.Hint, State.Incorrect, State.Hint, State.Correct, State.Hint, State.Incorrect, State.Hint];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain hints and incorrects for word \'kazen\' and guess \'brave\'', () => {
    const wordToGuess = 'kazen';
    const guess = 'brave';
    const expected = [State.Incorrect, State.Incorrect, State.Hint, State.Incorrect, State.Hint];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain hints and incorrects for word \'kazen\' and guess \'water\'', () => {
    const wordToGuess = 'kazen';
    const guess = 'water';
    const expected = [State.Incorrect, State.Correct, State.Incorrect, State.Correct, State.Incorrect];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain corrects, hints, and incorrects for word \'kazen\' and guess \'baken\'', () => {
    const wordToGuess = 'kazen';
    const guess = 'baken';
    const expected = [State.Incorrect, State.Correct, State.Hint, State.Correct, State.Correct];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain no duplicate hints when letter is already correctly set before for word \'klets\' and guess \'kleed\'', () => {
    const wordToGuess = 'klets';
    const guess = 'kleed';
    const expected = [State.Correct, State.Correct, State.Correct, State.Incorrect, State.Incorrect];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain hints when letter is set later for word \'klets\' and guess \'schep\'', () => {
    const wordToGuess = 'klets';
    const guess = 'schep';
    const expected = [State.Hint, State.Incorrect, State.Incorrect, State.Hint, State.Incorrect];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain no duplicate hints when letter is already correctly set later for word \'klets\' and guess \'schee\'', () => {
    const wordToGuess = 'klets';
    const guess = 'schee';
    // TODO: This was what I was trying to prevent, but not working yet. The last state should be Incorrect, instead of Hint.
    const expected = [State.Hint, State.Incorrect, State.Incorrect, State.Hint, State.Incorrect];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });

  it('should contain only corrects when word is guessed', () => {
    const wordToGuess = 'kazen';
    const guess = wordToGuess;
    const expected = [State.Correct, State.Correct, State.Correct, State.Correct, State.Correct];

    const states = new GuessCheckerService().determineStatesForGuess(guess, wordToGuess);
    expect(states).toEqual(expected);
  });


});
