import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as faceapi from 'face-api.js';
import { FaceDetection, TNetInput } from 'face-api.js';
import { BehaviorSubject, defer, Observable } from 'rxjs';

const MODEL_URL = '../../assets/models';

@Injectable({
    providedIn: 'root'
})

export class FaceRecognitionService {

    private boxes = new BehaviorSubject<any>(null);

    constructor() {
        this.loadModels();
    }

    async loadModels() {
        await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
        await faceapi.loadFaceRecognitionModel(MODEL_URL);
    }

    public getPrediction(img: TNetInput, scale: number): void {
        defer(async () => await faceapi.detectAllFaces(img)).subscribe(
            (result: FaceDetection[]) => {
                const res = result.map(({box: {width, height, top, left}}) => {
                    return {
                        width: width * scale,
                        height: height * scale,
                        top: top * scale,
                        left: left * scale
                    };
                });
                this.boxes.next(res);
            }
        );
    }

    public getBoxes(): Observable<any> {
        return this.boxes.asObservable();
    }
}
