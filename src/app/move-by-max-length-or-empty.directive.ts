import { Directive, HostListener } from '@angular/core';
import { NgModel } from "@angular/forms";

@Directive({
  selector: 'input[moveNextByMaxLength], textarea[moveNextByMaxLength]',
})
export class MoveByMaxLengthOrEmptyDirective {

  constructor(
    private ngModel: NgModel) {}

  private static getNextOrPreviousElement(element: HTMLInputElement | null, goToNext: boolean): HTMLInputElement | null {
    if (!element) {
      return null;
    }

    const previousInput = element.previousElementSibling as HTMLInputElement;
    if (!goToNext && !previousInput?.readOnly) {
      return previousInput;
    }

    if (goToNext) {
      return element.nextElementSibling as HTMLInputElement;
    }

    return null;
  }

  @HostListener('keydown', ['$event']) onKeyDown(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | null;

    const isBackspace = keyboardEvent.code === 'Backspace';
    const isCharacterKey = keyboardEvent.key.length === 1;
    if (!target || keyboardEvent.code === 'Tab' || (!isBackspace && !isCharacterKey)) {
      return;
    }

    keyboardEvent.preventDefault();

    // It's a character key.
    if (isCharacterKey) {
      target.value = keyboardEvent.key;
      this.ngModel.update.emit(target.value);
    }

    let selectedSibling = MoveByMaxLengthOrEmptyDirective.getNextOrPreviousElement(target, !isBackspace)

    while (selectedSibling) {
      const firstInputChild = selectedSibling as HTMLInputElement;
      if (firstInputChild.type === target.type) {
        firstInputChild.value = '';
        firstInputChild.focus();
        return;
      }

      selectedSibling = MoveByMaxLengthOrEmptyDirective.getNextOrPreviousElement(selectedSibling, !isBackspace);
    }
  }
}
