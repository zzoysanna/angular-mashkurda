import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { Joke } from '../types/joke.type';

@Component({
  selector: 'ma-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  public joke$: Observable<Joke>;

  constructor(
    private service: ApiService
  ) {
    this.joke$ = this.service.getCurrentJoke();
  }

  public getJoke(): void {
    this.service.getJoke();
  }

}
