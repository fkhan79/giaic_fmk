let num1: number = 5; // Initialize num1
let num2: number = 3; // Initialize num2

let sum: number = num1 + num2; // Add num1 and num2
console.log("Sum is " + sum);

let diff: number = num1 - num2; // Subtract num2 from num1
console.log("Difference is " + diff);

let product: number = num1 * num2; // Multiply num1 by num2
console.log("Product is " + product);

let quotient: number = num1 / num2; // Divide num1 by num2
console.log("Quotient is " + quotient);

let remainder: number = num1 % num2; // Remainder of num1 divided by num2
console.log("Remainder is " + remainder);

let base: number = 5; // Initialize base
let exponent: number = 3; // Initialize exponent

// Calculate base raised to the power of exponent
let power: number = base ** exponent;
console.log("Power is " + power); // Output: Power is 125

// Incrementing a number
let initial = 5;
let incremented = initial++; // incremented gets 5, initial becomes 6

console.log(`Initial value: ${initial}, Incremented value: ${incremented}`);
// Output: Initial value: 6, Incremented value: 5
console.log(initial);
console.log(initial++); // Prints 6, initial becomes 7
// Output: 6

console.log(incremented); // Prints 5
// Output: 5

initial++; // initial becomes 8

console.log(initial); // Prints 8
// Output: 8

// Prefix increment: The value is incremented first then returned
let initialPrefix = 5;
console.log(++initialPrefix); // Output: 6
console.log(initialPrefix); // Output: 6

//Scenario
//Suppose we are building a shopping cart application, and we want to calculate the total cost of items in the cart after applying a discount.

// Shopping cart scenario
let itemPrice: number = 25;
let quantity: number = 3;
let discountPercentage: number = 10;

// Calculate total cost before discount
let totalBeforeDiscount: number = itemPrice * quantity;
console.log("Total before discount: $" + totalBeforeDiscount);

// Calculate discount amount
let discountAmount: number = (totalBeforeDiscount * discountPercentage) / 100;
console.log("Discount amount: $" + discountAmount);

// Calculate total cost after discount
let totalAfterDiscount: number = totalBeforeDiscount - discountAmount;
console.log("Total after discount: $" + totalAfterDiscount);






