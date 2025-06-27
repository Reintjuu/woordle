import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output() keyPressed = new EventEmitter<string>();
  @Output() backspacePressed = new EventEmitter();
  @Output() enterPressed = new EventEmitter();

  readonly enterKey = 'ENTER';
  readonly backspaceKey = '<';
  keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    [this.enterKey, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', this.backspaceKey]
  ];

  onPress(key: string): void {
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

  // TODO: Add keyboard letter color functionality, based on letter state.
}
