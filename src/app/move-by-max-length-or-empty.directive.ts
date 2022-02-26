import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[moveNextByMaxLength], textarea[moveNextByMaxLength]',
})
export class MoveByMaxLengthOrEmptyDirective {
  @HostListener('keyup', ['$event']) onKeyDown(keyboardEvent: KeyboardEvent) {
    const target = keyboardEvent.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;

    const goToNext = keyboardEvent.code !== 'Backspace';
    if (!target
      || keyboardEvent.code === 'Tab'
      || (goToNext && target.maxLength !== target.value.length)) {
      return;
    }

    keyboardEvent.preventDefault();

    let selectedSibling = MoveByMaxLengthOrEmptyDirective.getNextOrPreviousElement(target, goToNext)

    while (selectedSibling) {
      const firstInputChild = selectedSibling as HTMLInputElement | HTMLTextAreaElement;
      if (firstInputChild.type === target.type) {
        firstInputChild.focus();
        firstInputChild.select();
        return;
      }

      selectedSibling = MoveByMaxLengthOrEmptyDirective.getNextOrPreviousElement(selectedSibling, goToNext);
    }
  }

  private static getNextOrPreviousElement(element: Element | null, goToNext: boolean): Element | null {
    if (!element) {
      return null;
    }

    return goToNext ? element.nextElementSibling : element.previousElementSibling;
  }
}
