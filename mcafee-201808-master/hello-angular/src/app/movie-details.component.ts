import {Component} from '@angular/core';

@Component({

  selector: 'app-movie-details',
  templateUrl: 'movie-details.component.html',
  styleUrls: [ 'movie-details.component.css' ]


})
export class MovieDetailsComponent {
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
