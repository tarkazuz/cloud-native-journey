export enum MovieType {
  REGULAR = 0,
  NEW_RELEASE = 1,
  CHILDRENS = 2,
}

export abstract class Movie {
  private title = ''
  priceCode = 0

  constructor(title: string) {
    this.title = title
  }

  getTitle(): string {
    return this.title
  }

  determineFrequentRenterPoints(daysRented: number): number {
    return 0
  }

  determineAmount(daysRented: number): number {
    return 0
  }
}
