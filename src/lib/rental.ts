import type { Movie } from "./movie.js";

export class Rental {
  movie: Movie;
  daysRented = 0;

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  getMovie(): Movie {
    return this.movie;
  }

  getDaysRented(): number {
    return this.daysRented;
  }

  getTitle(): string {
    return this.movie.getTitle();
  }
}
