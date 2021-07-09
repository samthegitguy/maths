// Basic arithmetic functions for completeness
function add(a) { 
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
        
    }
    return sum;
 }
function subtract (a, b) { return a - b; }
function divide (a, b) { return a / b; }
function multiply (a, b) { return a * b; }