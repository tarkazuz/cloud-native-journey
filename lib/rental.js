export class Rental {
  #movie = null
  #daysRented = 0

  constructor(movie, daysRented) {
    this.#movie = movie
    this.#daysRented = daysRented
  }

  getMovie() {
    return this.#movie
  }

  getDaysRented() {
    return this.#daysRented
  }

  getTitle() {
    return this.#movie.getTitle()
  }
}
