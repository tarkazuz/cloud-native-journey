import { Movie } from "../movie.js";

export class ChildrensMovie extends Movie {
    constructor(title: string) {
        super(title)
    }

    determineFrequentRenterPoints(): number {
        let renterPoints = 1
        return renterPoints
      }
    
      determineAmount(daysRented: number): number {
        let rentalAmount = 1.5
        if (daysRented > 3) {
            rentalAmount += (daysRented - 3) * 1.5
        }
        return rentalAmount
      }
}