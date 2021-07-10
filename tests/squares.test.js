const squares = require('../src/squares.cjs');

// Tests

test('Square of 4 is 16', () => expect(squares.square(4)).toEqual(16))
test('Fifth square is 25', () => expect(squares.generateSquares(5)[5]).toEqual(25))
test('Square root of 16 is 4', () => expect(squares.squareroot(16)).toEqual(4)) 