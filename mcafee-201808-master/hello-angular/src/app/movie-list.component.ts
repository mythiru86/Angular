import {Component } from '@angular/core';


@Component({
  selector: 'movie-list',
  template: `
            <h1>Movies</h1>
            <div>List Of Movies</div>
            `,
  styles: [
    `
    h1{
      color:blue;
      font-size:2em;
      text-decoration:none;
    }
    `
  ]

})
export class MovieListComponent {

}
