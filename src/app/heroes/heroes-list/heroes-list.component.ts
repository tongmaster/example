import { HeroService } from './../../hero.service';
import { Hero } from './../../hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  // @Input() heroesList :Hero[]
  constructor(private heroService:HeroService) { }

  heroesList :Hero[]
  ngOnInit() {
    this.getHeroes()
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(res => {
      this.heroesList =  res; 
    })
  }

}
