import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChuckRoutingModule } from './chuck-routing.module';
import { PageComponent } from './page/page.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    ChuckRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class ChuckModule { }
