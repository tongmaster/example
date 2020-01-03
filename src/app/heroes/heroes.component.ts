import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Array<Hero> = new Array<Hero>();

  add( name : string ):void{
    // this.heroes = [...this.heroes,{ id : this.heroes.length +1, name :name}]
    this.heroes.push({ id : this.heroes.length +1 , name : name});
  }
  constructor() { }

  ngOnInit() {
   
  }

}
