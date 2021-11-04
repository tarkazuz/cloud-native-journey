export const MovieType = {
  REGULAR: 0,
  NEW_RELEASE: 1,
  CHILDRENS: 2,
}

export class Movie {
  #title
  #priceCode
  
  constructor (title, priceCode) {
    this.#title = title
    this.#priceCode = priceCode
  }

  getTitle () {
    return this.#title
  }

  getPriceCode () {
    return this.#priceCode
  }
}
