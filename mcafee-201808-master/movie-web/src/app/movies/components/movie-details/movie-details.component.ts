import { Component, OnInit, Input, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../../model/movie-service";
import { SimpleMovieService } from "../../model/simple-movie-service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  movieService: MovieService;
  @Input()
  imdbId: string = "tt0076759";

  constructor(private route: ActivatedRoute, private routeService: Router) {
    this.movieService = new SimpleMovieService();
    console.log("this.route", this.route);
    console.log("this.routeService", this.routeService);
  }

  ngOnInit() {
    const imdbId = this.route.snapshot.params.imdbId;
    const _movie = this.movieService.getMovie(imdbId);
    if (_movie !== null) {
      this.movie = _movie;
    } else {
      this.routeService.navigateByUrl(
        '/not-found?error=imdbId "' + imdbId + '" not found'
      );
    }
  }
}
