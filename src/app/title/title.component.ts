import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title = 'Woordle';

  @Input() won = false;
}
