import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-title',
  templateUrl: './title.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./title.scss']
})
export class Title {
  title = 'Woordle';

  @Input() won = false;
}
