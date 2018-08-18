import { Component } from "@angular/core";


@Component(
  {
    selector: 'app-movie-home',
    template: `
      <h1>Movies Web</h1>
      <hr>
      <movie-list></movie-list>
      <app-movie-details></app-movie-details>
      <hr/>
      <footer>
      &copy;vivek@conceptarchitect.in
      </footer>
    `,
    styles: [
      `h1{
        font-style:italic
      }
      `
    ]

   }
)
export class HomeComponent{

}
