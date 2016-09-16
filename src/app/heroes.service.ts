import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { HEROES } from './heroes-mockdata';

@Injectable()
export class HeroService {

  // Get Heroes Data using InMemory DB
  private heroesUrl = 'app/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Hero).catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero).catch(this.handleError);
  }

  create(hero: Hero): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify(hero), { headers: this.headers })
      .toPromise().then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url).toPromise()
      .then(() => null).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error occurred', error);
    return Promise.reject(error.message || error);
  }
  // Get Heroes Data using Constant

  // getHeroes(): Promise<Hero[]> {
  //     return Promise.resolve(HEROES);
  // }
  // 
  // getHeroesSlowly(): Promise<Hero[]> {
  //     return new Promise<Hero[]>(resolve =>
  //         setTimeout(resolve, 2000)) // delay 2 seconds
  //         .then(() => this.getHeroes());
  // }
  // 
  // getHero(id: number): Promise<Hero> {
  //     return this.getHeroes()
  //         .then(heroes => heroes.find(hero => hero.id === id));
  // }
}