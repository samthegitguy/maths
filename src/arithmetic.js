function add(a) { 
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
        
    }
    return sum;
 }
const subtract = (a, b) => a - b
const divide = (a, b) => a / b
const multiply = (a, b) => a * b