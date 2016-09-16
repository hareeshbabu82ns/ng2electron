import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private router: Router,
    private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string) {
    name = name.trim();
    if (!name) return;
    let hero = new Hero();
    hero.name = name;
    this.heroService.create(hero)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = hero;
      });
  }

  delete(hero: Hero) {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h != hero);
      if (this.selectedHero === hero) this.selectedHero = null;
    });
  }
}