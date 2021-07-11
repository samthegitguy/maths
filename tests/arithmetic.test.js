// Packages
const arithmetic = require("../src/arithmetic.js")

test('adds 1 + 2 to equal 3', () => expect(arithmetic.add(1,2)).toEqual(3))
test('subtracts 1 from 2 to equal 1', () => expect(arithmetic.subtract(2,1)).toEqual(1))
test('divides 10 by 5 to equal 2', () => expect(arithmetic.divide(10,5)).toEqual(2))
test('divides 0 / 0 to equal NaN', () => expect(arithmetic.divide(0,0)).toEqual(NaN))
test('multiplies 2 by 5 to equal 10', () => expect(arithmetic.multiply(2,5)).toEqual(10))