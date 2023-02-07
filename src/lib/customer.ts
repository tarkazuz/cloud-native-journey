import { MovieType } from './movie.js'
import type { Rental } from './rental.js'

export class Customer {
  private customerName = ''
  private rentals: Rental[] = []
  private totalAmount = 0
  private frequentRenterPoints = 0

  constructor(customerName: string) {
    this.customerName = customerName
  }

  getCustomerName(): string {
    return this.customerName
  }

  statement(): string {
    this.totalAmount = 0
    this.frequentRenterPoints = 0
    let result = [
      `Rental Record for ${this.customerName}`
    ]

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

      result = [
        ...result,
        `\t${each.getTitle()}\t${thisAmount.toFixed(1)}`
      ]

      this.totalAmount += thisAmount
    }

    result = [
      ...result,
      `You owed ${this.totalAmount.toFixed(1)}`,
      `You earned ${this.frequentRenterPoints} frequent renter points`
    ]

    const statement = result.join('\n')

    return statement
  }

  addRental(rental: Rental): void {
    this.rentals = [
      ...this.rentals,
      rental
    ]
  }

  getTotalAmount(): number {
    return this.totalAmount
  }

  getFrequentRenterPoints(): number {
    return this.frequentRenterPoints
  }
}
