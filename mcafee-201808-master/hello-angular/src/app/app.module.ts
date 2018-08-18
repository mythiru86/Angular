import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { MovieListComponent } from './movie-list.component';
import { HomeComponent } from './home.component';
import { MovieDetailsComponent } from './movie-details.component';


@NgModule({

  declarations: [
    MovieListComponent,
    HomeComponent,
    MovieDetailsComponent
  ],

  imports: [
    BrowserModule
  ],

  bootstrap: [
    HomeComponent
  ]
})
export class AppModule {

}
