import type { Rental } from './rental.js'

export class Statement {
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
  
  private clearTotals():void {
    this.totalAmount = 0
    this.frequentRenterPoints = 0
  }

  private header(): string[] {
    return [
      `Rental Record for ${this.customerName}`
    ]    
  } 

  private formatRentalLine(rental: Rental, rentalAmount: number): string[] {
    return [`\t${rental.getTitle()}\t${rentalAmount.toFixed(1)}`]
  } 

  private rentalLine(rental: Rental): string[] {
    const rentalAmount = rental.determineAmount()
    const frequentRenterPoints = rental.determineFrequentRenterPoints()
    this.frequentRenterPoints += frequentRenterPoints
    this.totalAmount += rentalAmount
    return this.formatRentalLine(rental,rentalAmount)
  }
  
  private rentalLines(): string[] {
    let statements: string [] = []
    for (const rental of this.rentals) {
      const rentalLineStatement = this.rentalLine(rental)
  
      statements = statements.concat(rentalLineStatement)
    }
    return statements
  }
  
  private footer(): string[] {
    return [
      `You owed ${this.totalAmount.toFixed(1)}`,
      `You earned ${this.frequentRenterPoints} frequent renter points`
    ]
  }

  generate(): string {
      this.clearTotals()
      return this.header()
        .concat(this.rentalLines())
        .concat(this.footer())
        .join('\n')
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
