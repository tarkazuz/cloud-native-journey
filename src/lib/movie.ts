export enum MovieType {
  REGULAR=0,
  NEW_RELEASE=1,
  CHILDRENS=2,
}

export class Movie {
  title = "";
  priceCode = 0;

  constructor(title: string, priceCode: number) {
    this.title = title;
    this.priceCode = priceCode;
  }

  getTitle(): string {
    return this.title;
  }

  getPriceCode(): number {
    return this.priceCode;
  }
}
