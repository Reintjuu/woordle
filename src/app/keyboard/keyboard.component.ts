import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output() keyPressed = new EventEmitter<string>();
  @Output() backspacePressed = new EventEmitter();

  readonly backspaceKey = '<';
  keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', this.backspaceKey]
  ];

  onPress(key: string): void {
    if (key === this.backspaceKey) {
      this.backspacePressed.emit();
      return;
    }

    this.keyPressed.emit(key);
  }

  // TODO: Add letter color functionality, based on letter state.
}
