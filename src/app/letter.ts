import { State } from "./state";

export class Letter {
  state = State.None;

  constructor(
    public character: string | undefined = undefined) {
  }
}
