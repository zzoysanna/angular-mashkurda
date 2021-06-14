import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Box } from 'face-api.js';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { FaceRecognitionService } from '../../services/face-recognition.service';

@Component({
  selector: 'ma-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public url = '';
  public boxesArray: any[];
  public box: any;
  public inProgress = false;
  public boxes: Observable<any>;

  @ViewChild('image') img: ElementRef;

  constructor(
    private service: FaceRecognitionService
  ) {
    this.boxes = this.service.getBoxes().pipe(
      filter(res => !!res),
      tap(() => this.inProgress = false)
    );
  }

  public ngOnInit(): void {
  }

  public onDetect(url: string): void {
    this.inProgress = true;
    console.log(this.inProgress);
    const image = this.img.nativeElement as HTMLImageElement;
    const imageScale = image.width / image.naturalWidth;
    this.service.getPrediction(image, imageScale);
  }

  public onShow(url: any): void {
    this.url = url;
  }

  log(e: any) {
    console.log(e);
  }

}
