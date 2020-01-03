import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFormComponent } from './heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
