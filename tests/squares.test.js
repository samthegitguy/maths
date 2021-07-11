const squares = require('../src/squares.js');

// Tests

test('Square of 4 is 16', () => expect(squares.square(4)).toEqual(16))
test('Fifth square is 25 (via generateSquares )', () => expect(squares.generateSquares(100)[25]).toEqual(5))
test('Array squares and roots correspond', () => expect(squares.generateSquares(25)[100]).toEqual(10))
test('Square root of 16 is 4 (via squareroot)', () => expect(squares.squareroot(16)).toEqual(4)) 