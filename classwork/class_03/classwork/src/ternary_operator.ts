// Assign a value to a variable based on a condition
let x: number = 10;
let y: string = x > 0 ? "Positive" : "Negative or zero";
console.log(y); // Output: Positive

// Perform a simple calculation based on a condition
let a: number = 5;
let b: number = 10;
let c: number = a > b ? a - b : b - a;
console.log(c); // Output: 5

// Nest the ternary operator to create multiple conditions
let score: number = 85;
let grade: string = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // Output: B

// Use parentheses to group the expressions and improve the readability
let grade_with_parentheses: string = score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : (score >= 60 ? "D" : "F")));
console.log(grade_with_parentheses); // Output: B

// Combine the ternary operator with other operators
let d: number = 2;
let e: number = 3;
let f: number = d > e ? d * e : d + e;
console.log(f); // Output: 5

