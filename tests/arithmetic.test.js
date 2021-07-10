// Packages
const arithmetic = require("../src/arithmetic.cjs")

test('adds 1 + 2 to equal 3', () => {
    expect(arithmetic.add(1,2)).toBe(3)
})