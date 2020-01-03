import { HeroService } from './../../hero.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  // @Output() addbtn = new EventEmitter();
  name : string ;
  constructor(private heroService : HeroService ) { }

  ngOnInit() {
  }

  showtxt = ""
  add():void{
    // let hero : Hero = ;
    console.log(this.name)
    this.heroService.addHero({ name : this.name});
    //this.showtxt = this.id + " "+ this.name
    // this.addbtn.emit(this.name);
    // this.addbtn.emit({id:3 , name : this.name})
  }

}
 