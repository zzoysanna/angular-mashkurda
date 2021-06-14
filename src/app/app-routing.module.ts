import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'intersection',
    loadChildren: () => import('./+intersection/intersection.module').then(m => m.IntersectionModule),
  },
  {
    path: 'chuck',
    loadChildren: () => import('./+chuck/chuck.module').then(m => m.ChuckModule),
  },
  {
    path: 'face',
    loadChildren: () => import('./+face-recognition/face-recognition.module').then(m => m.FaceRecognitionModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
