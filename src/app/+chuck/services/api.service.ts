import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../types/joke.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public currentJoke = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
  ) { }

  public getJoke(): void {
    this.http.get<Joke>('https://api.chucknorris.io/jokes/random').subscribe(
      (joke: Joke) => this.currentJoke.next(joke)
    );
  }

  public getCurrentJoke(): Observable<Joke> {
    if (!this.currentJoke.getValue()) {
      this.getJoke();
    }
    return this.currentJoke.asObservable();
  }


}
