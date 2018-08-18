import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Route} from '@angular/router';


import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/components/movie-details/movie-details.component';
import { MovieListComponent } from './movies/components/movie-list/movie-list.component';
import { MovieHeaderComponent } from './movies/components/movie-header/movie-header.component';
import { RangeComponent } from './ca-utils/components/range-component/range.component';
import { MyJsonPipe } from './ca-utils/pipes/my-json.pipe';
import { MovieVerdictPipe } from './movies/pipes/movie-verdict.pipe';
import { SearchListPipe } from './ca-utils/pipes/search-list.pipe';
import { MovieAddComponent } from './movies/components/movie-add/movie-add.component';
import { MovieHomeComponent } from './movies/components/movie-home/movie-home.component';
import { UserLoginComponent } from './users/components/user-login/user-login.component';
import { UserRegistrationComponent } from './users/components/user-registration/user-registration.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';
import { HighlightDirective } from './ca-utils/directives/highlight.directive';

const routeMap: Route[] = [

  {path: '', redirectTo: '/movies' , pathMatch: 'full' },

  { path: 'movies', component: MovieListComponent },

  { path: 'movies/add', component: MovieAddComponent },

  { path: 'movies/:imdbId', component: MovieDetailsComponent},


  { path: 'user/sign-in', component: UserLoginComponent },
  { path: 'user/sign-up', component: UserRegistrationComponent },
  { path: 'not-found', component: NotFoundComponent},


  { path: "**" , component: NotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieHeaderComponent,
    RangeComponent,
    MyJsonPipe,
    MovieVerdictPipe,
    SearchListPipe,
    MovieAddComponent,
    MovieHomeComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    NotFoundComponent,
    HighlightDirective


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
