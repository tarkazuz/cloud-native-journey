export class Rental {
  #movie
  #daysRented
  /**
   * @param {Movie} movie
   * @param {number} daysRented
   */
  constructor (movie, daysRented) {
    this.#movie = movie
    this.#daysRented = daysRented
  }

  getMovie () {
    return this.#movie
  }

  getDaysRented () {
    return this.#daysRented
  }

  getTitle () {
    return this.#movie.getTitle()
  }
}
