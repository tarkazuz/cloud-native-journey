import { strict as assert } from 'assert'
import { Statement, Movie, MovieType, Rental } from '../src/index.js'
import { ChildrensMovie } from '../src/index.js'
import { NewReleaseMovie } from '../src/index.js'
import { RegularMovie } from '../src/index.js'

describe('Videostore', () => {
  let statement: Statement
  let newReleaseMovie: Movie
  let newReleaseMovie2: Movie
  let childrensMovie: Movie
  let regularMovie1: Movie
  let regularMovie2: Movie
  let regularMovie3: Movie

  before(() => {
    newReleaseMovie = new NewReleaseMovie('New Release')
    newReleaseMovie2 = new NewReleaseMovie('New Release 2')
    childrensMovie = new ChildrensMovie('Childrens')
    regularMovie1 = new RegularMovie('Regular 1')
    regularMovie2 = new RegularMovie('Regular 2')
    regularMovie3 = new RegularMovie('Regular 3')
  })

  beforeEach(() => {
    statement = new Statement('Customer')
  })

  it('should return the customer name', () => {
    assert.equal(statement.getCustomerName(), 'Customer')
  })

  it('should calculate totals for single new release movie', () => {
    statement.addRental(new Rental(newReleaseMovie, 3))

    statement.generate()

    assert.equal(statement.getTotalAmount(), 9.0)
  })

  it('should calculate totals for rental of two new release movies', () => {
    statement.addRental(new Rental(newReleaseMovie, 3))
    statement.addRental(new Rental(newReleaseMovie2, 3))

    statement.generate()

    assert.equal(statement.getTotalAmount(), 18.0)
    assert.equal(statement.getFrequentRenterPoints(), 4)
  })

  it('should calculate totals for single childrens movie', () => {
    statement.addRental(new Rental(childrensMovie, 4))

    statement.generate()

    assert.equal(statement.getTotalAmount(), 3)
    assert.equal(statement.getFrequentRenterPoints(), 1)
  })

  it('should calculate totals for multiple regular movies', () => {
    statement.addRental(new Rental(regularMovie1, 1))
    statement.addRental(new Rental(regularMovie2, 2))
    statement.addRental(new Rental(regularMovie3, 3))

    statement.generate()

    assert.equal(statement.getTotalAmount(), 7.5)
    assert.equal(statement.getFrequentRenterPoints(), 3)
  })

  it('should format statement for multiple regular movies', () => {
    statement.addRental(new Rental(regularMovie1, 1))
    statement.addRental(new Rental(regularMovie2, 2))
    statement.addRental(new Rental(regularMovie3, 3))

    const statementText = statement.generate()

    const expectedStatementText = [
      'Rental Record for Customer',
      '\tRegular 1\t2.0',
      '\tRegular 2\t2.0',
      '\tRegular 3\t3.5',
      'You owed 7.5',
      'You earned 3 frequent renter points'
    ].join('\n')

    assert.equal(statementText, expectedStatementText)
  })
})
