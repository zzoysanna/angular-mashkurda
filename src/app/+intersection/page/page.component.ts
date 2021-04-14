import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  contentArr = Array(10);
  activeId: any;

  constructor() { }

  public scrollTo(id: number): void {
    const element = document.getElementById(String(id));
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
