//Named Functions
function addNumbers(a, b) {
    return a + b;
}
//Anonymous Functions
var multiplyNumbers = function (a, b) {
    return a * b;
};
//Arrow Functions
var subtractNumbers = function (a, b) { return a - b; };
//Method Functions
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Calculator.prototype.add = function (a) {
        this.value += a;
        console.log(this.value);
    };
    return Calculator;
}());
//Constructor Functions
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
//Generic Functions
function firstElement(arr) {
    return arr[0];
}
// Usage examples
var sum = addNumbers(10, 5); // Named Function
console.log(sum);
var product = multiplyNumbers(10, 5); // Anonymous Function
console.log(product);
var difference = subtractNumbers(10, 5); // Arrow Function
console.log(difference);
var myCalculator = new Calculator(); // Constructor Function
myCalculator.add(5); // Method Function
var greeting = new Greeter("world").greet(); // Constructor Function
console.log(greeting);
var firstNum = firstElement([10, 20, 30]); // Generic Function
console.log(firstNum);
