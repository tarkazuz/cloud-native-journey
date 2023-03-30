import type { Movie } from './movie.js'
export class Rental {
  movie: Movie
  daysRented = 0

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie
    this.daysRented = daysRented
  }

  getTitle(): string {
    return this.movie.getTitle()
  }

  determineFrequentRenterPoints(): number {
    return this.movie.determineFrequentRenterPoints(this.daysRented)
  }
  determineAmount(): number {
    return this.movie.determineAmount(this.daysRented)
  }

}
