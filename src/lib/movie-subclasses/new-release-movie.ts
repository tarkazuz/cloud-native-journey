import { Movie } from "../movie.js";

export class NewReleaseMovie extends Movie {
    constructor(title: string) {
        super(title)
    }

    determineFrequentRenterPoints(daysRented: number): number {
        let renterPoints = 1
        daysRented > 1 && renterPoints++
        return renterPoints
      }
    
      determineAmount(daysRented: number): number {
        let rentalAmount = daysRented * 3
        return rentalAmount
      }
}