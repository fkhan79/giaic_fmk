//Variable Hoisting Example
console.log(e); // This will give an error: Cannot access 'e' before initialization
let e = 10; // This declaration is hoisted to the top of the block scope
console.log(e); // This will print 10

console.log(f); // This will also give an error: Cannot access 'f' before initialization
const f = 10; // This declaration is also hoisted to the top of the block scope
console.log(f); // This will also print 10

console.log(x); // Output: undefined
var x = 10; // This declaration is hoisted to the top of the scope
console.log(x); // Output: 10

//Function Hoisting Example
myFunc(); // Output: Hello
function myFunc() {
  // This declaration is hoisted to the top of the scope
  console.log("Hello");
}

myFunc2(); // Output: Uncaught TypeError: g is not a function
let myFunc2 = function () {
  // This expression is not hoisted
  console.log("Hello");
};


//Class Hoisting
let c = new C(); // Output: Uncaught ReferenceError: Cannot access 'C' before initialization
class C {
  // This declaration is hoisted to the top of the scope
  constructor() {
    console.log("Hello");
  }
}

//Import Hoisting
console.log(add(1, 2)); // Output: 3
import { add } from "./math"; // This statement is hoisted to the top of the module

if (true) {
  import { subtract } from "./math"; // Error: Cannot use import statement outside a module
  console.log(subtract(3, 2));
}

