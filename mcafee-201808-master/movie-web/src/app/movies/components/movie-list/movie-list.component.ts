import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../model/movie-service";
import { SimpleMovieService } from "../../model/simple-movie-service";
import { Movie } from "../../model/movie";
import { filterList } from "../../../ca-utils/pipes/search-list.pipe";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  allMovies: Movie[];
  hideImages = false;
  imageSize = 30;
  movieService: MovieService;

  searchCriteria: any[];
  searchTerm: string;
  selectedCriteria:string;

  constructor() {
    this.movieService = new SimpleMovieService();
  }



  ngOnInit() {
    this.searchCriteria = ["", "Title", "Year", "ImdbRating"];

    this.allMovies = this.movieService.getMovies();
    this.movies = this.allMovies;
  }

  search() {
    if (!this.searchTerm || !this.selectedCriteria) {
      this.movies = this.movieService.getMovies();
    }

    this.movies = filterList(this.allMovies, this.selectedCriteria, this.searchTerm);

  }

}
