const square = a => a * a

/** Generates a dictionary of squares, until the length provided.
 * 
 * Returns dictionary square:root
 * NOTE: This does not work on non-square numbers - not every number is in the dict, only square numbers. Use squareroot() instead.
 * Therefore 
 * @example
 * squares.generateSquaresDictionary(100)[100]
 * // returns 10
 * squares.generateSquaresDictionary(25)[25]
 * // returns 5
 * <caption>Returns the square root of the number you put in</caption>
 * @author samthegitguy
 * @argument length Length of array. Recommended to keep it same as the number you are rooting.
 * @returns Dictionary of squares **/
const generateSquaresDictionary = function(length) {
    let squares = {}
    for(let i = 0; i < length + 1; i++) {
        squares[square(i)] = i
    }
    return squares
}
/**
 * Generates the square root of all positive numbers using generateSquares.
 * @param num The number which needs to be squarerooted.
 * @returns The square root of a number
 */
function squareroot(num) {
    return generateSquaresDictionary(num)[num]
    
}
// Exports
exports.square = square
exports.generateSquares = generateSquaresDictionary
exports.squareroot = squareroot