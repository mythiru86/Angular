import { MovieService } from "./movie-service";
import { Movie } from "./movie";

export class SimpleMovieService implements MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "imdbID": "tt1201607",
        "Type": "movie",
        "Poster": "/images/tt1201607.jpg",
        "imdbRating": "8.1",
        "BoxOffice": 105,
        "ReleaseDate": "2011/9/10"
      },
      {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "Year": "2001",
        "imdbID": "tt0241527",
        "Type": "movie",
        "Poster": "/images/tt0241527.jpg",
        "imdbRating": "7.5",
        "BoxOffice": 27,
        "ReleaseDate": "2001/12/18"
      },
      {
        "Title": "Harry Potter and the Chamber of Secrets",
        "Year": "2002",
        "imdbID": "tt0295297",
        "Type": "movie",
        "Poster": "/images/tt0295297.jpg",
        "imdbRating": "7.4",
        "BoxOffice": 10,
        "ReleaseDate": "2002/1/9"
      },
      {
        "Title": "Harry Potter and the Goblet of Fire",
        "Year": "2005",
        "imdbID": "tt0330373",
        "Type": "movie",
        "Poster": "/images/tt0330373.jpg",
        "imdbRating": "7.7",
        "BoxOffice": 58,
        "ReleaseDate": "2005/2/2"
      },
      {
        "Title": "Harry Potter and the Prisoner of Azkaban",
        "Year": "2004",
        "imdbID": "tt0304141",
        "Type": "movie",
        "Poster": "/images/tt0304141.jpg",
        "imdbRating": "8.1",
        "BoxOffice": 117,
        "ReleaseDate": "2004/11/5"
      },
      {
        "Title": "Harry Potter and the Order of the Phoenix",
        "Year": "2007",
        "imdbID": "tt0373889",
        "Type": "movie",
        "Poster": "/images/tt0373889.jpg",
        "imdbRating": "7.5",
        "BoxOffice": 31,
        "ReleaseDate": "2007/10/2"
      },
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 1",
        "Year": "2010",
        "imdbID": "tt0926084",
        "Type": "movie",
        "Poster": "/images/tt0926084.jpg",
        "imdbRating": "7.7",
        "BoxOffice": 28,
        "ReleaseDate": "2010/4/10"
      },
      {
        "Title": "Harry Potter and the Half-Blood Prince",
        "Year": "2009",
        "imdbID": "tt0417741",
        "Type": "movie",
        "Poster": "/images/tt0417741.jpg",
        "imdbRating": "7.5",
        "BoxOffice": 79,
        "ReleaseDate": "2009/3/5"
      },
      {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "/images/tt0076759.jpg",
        "imdbRating": "8.7",
        "BoxOffice": 72,
        "ReleaseDate": "1977/9/17"
      },
      {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "/images/tt0080684.jpg",
        "imdbRating": "8.8",
        "BoxOffice": 100,
        "ReleaseDate": "1980/2/10"
      }
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(imdbId: string): Movie {
    imdbId = imdbId.toLowerCase();

    const result = this.movies.filter(
      movie => movie.imdbID.toLowerCase() === imdbId
    );

    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  }

  addMovie(movie: Movie): boolean {
    // todo: validation of movie object
    this.movies.push(movie);
    return true;
  }
}
