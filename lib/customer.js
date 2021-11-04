import { MovieType } from './movie.js'

export class Customer {
  /**
   * @param {string} customerName
   */
  constructor (customerName) {
    this.customerName = customerName
    /** @type {Rental[]} */ this.rentals = []
    this.totalAmount = 0
    this.frequentRenterPoints = 0
  }

  getCustomerName () {
    return this.customerName
  }

  statement () {
    this.totalAmount = 0
    this.frequentRenterPoints = 0
    let result = 'Rental Record for ' + this.getCustomerName() + '\n'

    // determines the amount for each line
    for (const each of this.rentals) {
      let thisAmount = 0

      switch (each.getMovie().getPriceCode()) {
        case MovieType.REGULAR:
          thisAmount += 2
          if (each.getDaysRented() > 2) {
            thisAmount += (each.getDaysRented() - 2) * 1.5
          }
          break
        case MovieType.NEW_RELEASE:
          thisAmount += each.getDaysRented() * 3
          break
        case MovieType.CHILDRENS:
          thisAmount += 1.5
          if (each.getDaysRented() > 3) {
            thisAmount += (each.getDaysRented() - 3) * 1.5
          }
          break
      }

      this.frequentRenterPoints++
      if (each.getMovie().getPriceCode() === MovieType.NEW_RELEASE && each.getDaysRented() > 1) {
        this.frequentRenterPoints++
      }

      result += '\t' + each.getTitle() + '\t' + thisAmount.toFixed(1) + '\n'
      this.totalAmount += thisAmount
    }

    result += 'You owed ' + this.totalAmount.toFixed(1) + '\n'
    result += 'You earned ' + this.frequentRenterPoints + ' frequent renter points\n'

    return result
  }

  addRental (rental) {
    this.rentals.push(rental)
  }

  getTotalAmount () {
    return this.totalAmount
  }

  getFrequentRenterPoints () {
    return this.frequentRenterPoints
  }
}
