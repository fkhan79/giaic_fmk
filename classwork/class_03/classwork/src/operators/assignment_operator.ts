// Assignment Operator
let x = 5; // Assigns the value 5 to variable x
console.log(x); // Output: 5

let x1 = 5;
x1 += 3; // Adds 3 to x1, equivalent to x1 = x1 + 3
console.log(x1); // Output: 8

let x2 = 5;
x2 -= 2; // Subtracts 2 from x2, equivalent to x2 = x2 - 2
console.log(x2); // Output: 3

let x3 = 5;
x3 *= 2; // Multiplies x3 by 2, equivalent to x3 = x3 * 2
console.log(x3); // Output: 10

let x4 = 10;
x4 /= 2; // Divides x4 by 2, equivalent to x4 = x4 / 2
console.log(x4); // Output: 5

let x5 = 2;
x5 **= 3; // Raises x5 to the power of 3, equivalent to x5 = x5 ** 3
console.log(x5); // Output: 8


//scenario
//Suppose you are building a simple inventory management system for a store, and you want to keep track of the available quantity of a product after some transactions.

// Inventory management scenario
let initialQuantity: number = 100;
let soldQuantity: number = 20;
let returnedQuantity: number = 5;

// Display initial quantity
console.log("Initial quantity: " + initialQuantity);

// Simulate sales (subtract soldQuantity from initialQuantity)
initialQuantity -= soldQuantity;
console.log("Quantity after sales: " + initialQuantity);

// Simulate product returns (add returnedQuantity to initialQuantity)
initialQuantity += returnedQuantity;
console.log("Quantity after returns: " + initialQuantity);
