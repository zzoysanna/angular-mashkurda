import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { IntersectionRoutingModule } from './intersection-routing.module';
import { ObserveVisibilityDirective } from './directives/observe-visibility/observe-visibility.directive';



@NgModule({
  declarations: [
    PageComponent,
    ObserveVisibilityDirective
  ],
  imports: [
    CommonModule,
    IntersectionRoutingModule
  ]
})
export class IntersectionModule { }
