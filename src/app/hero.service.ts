import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes : Hero[] = [];
  constructor() { }
  addHero (hero : Hero): void {
    this.heroes.push({id : this.heroes.length +1 , name : hero.name});
  }
  getHeroes() : Hero[]{
  console.log(this.heroes)
    return this.heroes;
  }
}
