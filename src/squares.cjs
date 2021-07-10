const square = a => a * a

/** Generates an array of squares, until the length provided.
 * @argument length Length of array
 * @returns Array of squares **/
const generateSquaresArray = function(length) {
    let squares = []
    for(let i = 0; i < length + 1; i++) {
        squares.push(square(i))
    }
    return squares
}
//TODO: stop using JS function - make own function instead
function squareroot(num) {
    
}
// Exports
exports.square = square
exports.generateSquares = generateSquaresArray
exports.squareroot = squareroot