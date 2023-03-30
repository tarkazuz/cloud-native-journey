import { Movie } from "../movie.js";

export class RegularMovie extends Movie {
    constructor(title: string) {
        super(title)
    }

    determineFrequentRenterPoints(): number {
        const renterPoints = 1 
        return renterPoints
      }
    
      determineAmount(daysRented: number): number {
        let rentalAmount = 2
        if (daysRented > 2) {
         rentalAmount += (daysRented - 2) * 1.5 
        }
        return rentalAmount
      }
}