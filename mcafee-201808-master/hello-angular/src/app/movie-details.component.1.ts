import {Component} from '@angular/core';

@Component({

  selector: 'app-movie-details',
  template: `
    <h1>{{movie.name}}</h1>
    <ul>
      <li>Year : {{movie.year}}</li>
      <li>Budget: $ {{movie.budget}}</li>
      <li>imdb rating: {{movie.imdbRating}}</li>
    </ul>
    <div>
      {{movie.description}}
    </div>
  `,
  styles: [
    `
    h1{
      text-shadow: -2px -2px 2px red;
    }
    `
  ]


})
export class MovieDetailsOldComponent {
    private movie: any;
    constructor() {
      this.movie = {
        name: 'Harry Potter and the Deathly Hollows',
        budget: '125000',
        imdbRating: 8.1,
        description: 'The last part of the harry potter series',
        year: 2011
      };
    }
}
