import { Customer } from '../lib/customer.js'
import { Movie, MovieType } from '../lib/movie.js'
import { Rental } from '../lib/rental.js'
import assert from 'assert'

describe('Videostore', hooks => {
  /** @type {Customer} */ let customer
  /** @type {Movie} */ let newReleaseMovie
  /** @type {Movie} */ let newReleaseMovie2
  /** @type {Movie} */ let childrensMovie
  /** @type {Movie} */ let regularMovie1
  /** @type {Movie} */ let regularMovie2
  /** @type {Movie} */ let regularMovie3

  beforeEach(() => {
    customer = new Customer('Customer')
    newReleaseMovie = new Movie('New Release', MovieType.NEW_RELEASE)
    newReleaseMovie2 = new Movie('New Release 2', MovieType.NEW_RELEASE)
    childrensMovie = new Movie('Childrens', MovieType.CHILDRENS)
    regularMovie1 = new Movie('Regular 1', MovieType.REGULAR)
    regularMovie2 = new Movie('Regular 2', MovieType.REGULAR)
    regularMovie3 = new Movie('Regular 3', MovieType.REGULAR)
  })

  it('should calculate totals for single new release movie', () => {
    customer.addRental(new Rental(newReleaseMovie, 3))

    customer.statement()

    assert.strictEqual(customer.getTotalAmount(), 9.0)
  })

  it('should calculate totals for rental of two new release movies', () => {
    customer.addRental(new Rental(newReleaseMovie, 3))
    customer.addRental(new Rental(newReleaseMovie2, 3))

    customer.statement()

    assert.strictEqual(customer.getTotalAmount(), 18.0)
    assert.strictEqual(customer.getFrequentRenterPoints(), 4)
  })

  it('should calculate totals for single childrens movie', () => {
    customer.addRental(new Rental(childrensMovie, 3))

    customer.statement()

    assert.strictEqual(customer.getTotalAmount(), 1.5)
    assert.strictEqual(customer.getFrequentRenterPoints(), 1)
  })

  it('should calculate totals for multiple regular movies', () => {
    customer.addRental(new Rental(regularMovie1, 1))
    customer.addRental(new Rental(regularMovie2, 2))
    customer.addRental(new Rental(regularMovie3, 3))

    customer.statement()

    assert.strictEqual(customer.getTotalAmount(), 7.5)
    assert.strictEqual(customer.getFrequentRenterPoints(), 3)
  })

  it('should format statement for multiple regular movies', () => {
    customer.addRental(new Rental(regularMovie1, 1))
    customer.addRental(new Rental(regularMovie2, 2))
    customer.addRental(new Rental(regularMovie3, 3))

    const statementText = customer.statement()

    assert.strictEqual(statementText, 'Rental Record for Customer\n' +
      '\tRegular 1\t2.0\n' +
      '\tRegular 2\t2.0\n' +
      '\tRegular 3\t3.5\n' +
      'You owed 7.5\n' +
      'You earned 3 frequent renter points\n')
  })
})