import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'ma-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {

  @ViewChild('img', {static: true}) image: ElementRef;
  @Output() detect = new EventEmitter<string>();

  public query = '';

  constructor() { }

  public ngOnInit(): void {
    fromEvent(this.image.nativeElement, 'input').subscribe(
      e => console.log(this.query)
    );
  }

}
