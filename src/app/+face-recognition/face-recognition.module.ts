import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FaceRecognitionRoutingModule } from './face-recognition-routing.module';
import { MainComponent } from './components/main/main.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { FaceRecognitionService } from './services/face-recognition.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MainComponent, ImageInputComponent],
  imports: [
    CommonModule,
    FaceRecognitionRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FaceRecognitionService
  ]
})
export class FaceRecognitionModule { }
