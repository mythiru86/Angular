import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[];
  hideImages = false;

  imageSize = 20;
  delta = 10;
  minSize = 10;
  maxSize = 50;

  onUp() {
    this.onSizeChange(this.delta);
  }

  onDown() {
    this.onSizeChange(- this.delta);
  }

  private onSizeChange(delta: number) {
    const newValue = this.imageSize + delta;
    if (newValue >= this.minSize && newValue <= this.maxSize) {
      this.imageSize = newValue;
    }
  }

  constructor() {
    this.movies = [
      {
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Year: "2011",
        imdbID: "tt1201607",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg",
        imdbRating: "8.1"
      },
      {
        Title: "Harry Potter and the Sorcerer's Stone",
        Year: "2001",
        imdbID: "tt0241527",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        imdbRating: "7.5"
      },
      {
        Title: "Harry Potter and the Chamber of Secrets",
        Year: "2002",
        imdbID: "tt0295297",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
        imdbRating: "7.4"
      },
      {
        Title: "Harry Potter and the Goblet of Fire",
        Year: "2005",
        imdbID: "tt0330373",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
        imdbRating: "7.7"
      },
      {
        Title: "Harry Potter and the Prisoner of Azkaban",
        Year: "2004",
        imdbID: "tt0304141",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
        imdbRating: "7.8"
      },
      {
        Title: "Harry Potter and the Order of the Phoenix",
        Year: "2007",
        imdbID: "tt0373889",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg",
        imdbRating: "7.5"
      },
      {
        Title: "Harry Potter and the Deathly Hallows: Part 1",
        Year: "2010",
        imdbID: "tt0926084",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
        imdbRating: "7.7"
      },
      {
        Title: "Harry Potter and the Half-Blood Prince",
        Year: "2009",
        imdbID: "tt0417741",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
        imdbRating: "7.5"
      },
      {
        Title: "Star Wars: Episode IV - A New Hope",
        Year: "1977",
        imdbID: "tt0076759",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        imdbRating: "8.7"
      },
      {
        Title: "Star Wars: Episode V - The Empire Strikes Back",
        Year: "1980",
        imdbID: "tt0080684",
        Type: "movie",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        imdbRating: "8.8"
      }
    ];
  }

  ngOnInit() {}
}
