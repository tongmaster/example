import { HeroFormComponent } from './heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'heroes' , component:HeroesComponent
  },
  {
    path: ''  , redirectTo : 'heroes' , pathMatch : 'full'
  },
  {
    path : 'heroes/list' , component:HeroesListComponent
  },
  {
    path : 'heroes/form' , component:HeroFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
