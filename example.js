// Example JavaScript file for TABA repository
// This file demonstrates basic JavaScript functionality

/**

- Simple calculator class
  */
  class Calculator {
  constructor() {
  this.result = 0;
  }
  
  /**
  - Add two numbers
  - @param {number} a - First number
  - @param {number} b - Second number
  - @returns {number} Sum of a and b
    */
    add(a, b) {
    this.result = a + b;
    return this.result;
    }
  
  /**
  - Subtract two numbers
  - @param {number} a - First number
  - @param {number} b - Second number
  - @returns {number} Difference of a and b
    */
    subtract(a, b) {
    this.result = a - b;
    return this.result;
    }
  
  /**
  - Multiply two numbers
  - @param {number} a - First number
  - @param {number} b - Second number
  - @returns {number} Product of a and b
    */
    multiply(a, b) {
    this.result = a * b;
    return this.result;
    }
  
  /**
  - Divide two numbers
  - @param {number} a - First number
  - @param {number} b - Second number
  - @returns {number} Quotient of a and b
    */
    divide(a, b) {
    if (b === 0) {
    throw new Error(“Cannot divide by zero”);
    }
    this.result = a / b;
    return this.result;
    }
  
  /**
  - Get current result
  - @returns {number} Current result
    */
    getResult() {
    return this.result;
    }
  
  /**
  - Reset calculator
    */
    reset() {
    this.result = 0;
    }
    }

/**

- Utility functions
  */
  const Utils = {
  /**
  - Check if a number is even
  - @param {number} num - Number to check
  - @returns {boolean} True if even, false if odd
    */
    isEven: function(num) {
    return num % 2 === 0;
    },
  
  /**
  - Generate random number between min and max
  - @param {number} min - Minimum value
  - @param {number} max - Maximum value
  - @returns {number} Random number
    */
    randomBetween: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
  /**
  - Format number with commas
  - @param {number} num - Number to format
  - @returns {string} Formatted number
    */
    formatNumber: function(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, “,”);
    }
    };

/**

- Array helper functions
  */
  const ArrayHelpers = {
  /**
  - Find maximum value in array
  - @param {number[]} arr - Array of numbers
  - @returns {number} Maximum value
    */
    max: function(arr) {
    return Math.max(…arr);
    },
  
  /**
  - Find minimum value in array
  - @param {number[]} arr - Array of numbers
  - @returns {number} Minimum value
    */
    min: function(arr) {
    return Math.min(…arr);
    },
  
  /**
  - Calculate average of array
  - @param {number[]} arr - Array of numbers
  - @returns {number} Average value
    */
    average: function(arr) {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
    },
  
  /**
  - Remove duplicates from array
  - @param {any[]} arr - Array with potential duplicates
  - @returns {any[]} Array without duplicates
    */
    removeDuplicates: function(arr) {
    return […new Set(arr)];
    }
    };

// Example usage and demo
console.log(”=== TABA JavaScript Demo ===”);

// Calculator demo
const calc = new Calculator();
console.log(“Calculator Demo:”);
console.log(“5 + 3 =”, calc.add(5, 3));
console.log(“10 - 4 =”, calc.subtract(10, 4));
console.log(“6 * 7 =”, calc.multiply(6, 7));
console.log(“15 / 3 =”, calc.divide(15, 3));

// Utils demo
console.log(”\nUtils Demo:”);
console.log(“Is 8 even?”, Utils.isEven(8));
console.log(“Random between 1-10:”, Utils.randomBetween(1, 10));
console.log(“Format 1234567:”, Utils.formatNumber(1234567));

// Array helpers demo
const numbers = [1, 5, 3, 9, 2, 7, 1, 3];
console.log(”\nArray Helpers Demo:”);
console.log(“Array:”, numbers);
console.log(“Max:”, ArrayHelpers.max(numbers));
console.log(“Min:”, ArrayHelpers.min(numbers));
console.log(“Average:”, ArrayHelpers.average(numbers));
console.log(“No duplicates:”, ArrayHelpers.removeDuplicates(numbers));

// Export for Node.js if applicable
if (typeof module !== ‘undefined’ && module.exports) {
module.exports = {
Calculator,
Utils,
ArrayHelpers
};
}
