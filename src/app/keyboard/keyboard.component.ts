import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from "../letter";
import { State } from "../state";
import { NgClass } from "@angular/common";
import { NzButtonComponent } from "ng-zorro-antd/button";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  imports: [
    NgClass,
    NzButtonComponent
  ],
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output() keyPressed = new EventEmitter<string>();
  @Output() backspacePressed = new EventEmitter();
  @Output() enterPressed = new EventEmitter();
  public readonly state = State;

  private readonly enterKey = '⤶';
  private readonly backspaceKey = 'ᐊ';
  keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    [this.enterKey, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', this.backspaceKey]
  ].map(row => row.map(key => new Letter(key)));

  public setLettersStateBasedOnInputLetter(input: Letter): void {
    for (const row of this.keyboard) {
      for (const key of row) {
        if (key.value?.toLowerCase() !== input.value?.toLowerCase()
          // Only upgrade keyboard key hints.
          || key.state >= input.state) {
          continue;
        }

        key.state = input.state;
      }
    }
  }

  public resetKeyboardLetterState(): void {
    for (const row of this.keyboard) {
      for (const key of row) {
        key.state = State.None;
      }
    }
  }

  public onPress(key: string | undefined): void {
    if (key === undefined) {
      return;
    }

    switch (key) {
      case this.enterKey:
        this.enterPressed.emit();
        break;
      case this.backspaceKey:
        this.backspacePressed.emit();
        break;
      default:
        this.keyPressed.emit(key);
        break;
    }
  }
}
