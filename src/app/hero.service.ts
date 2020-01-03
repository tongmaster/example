import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes : Hero[] = [];
  constructor(private http : HttpClient) { }
  addHero (hero : Hero): void {
    // this.heroes.push({id : this.heroes.length +1 , name : hero.name});
    this.http.post<Hero>('http://localhost:3000/post',hero)
      .subscribe(res =>{
      console.log(JSON.stringify(res))
    })
  }
  
  getHeroes() : Observable<Hero[]>{
  console.log(this.heroes)
    // return this.heroes;
    return this.http.get<Hero[]>('http://localhost:3000/get')
  }
}
