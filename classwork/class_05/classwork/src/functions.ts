//Named Functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

//Anonymous Functions
let multiplyNumbers = function(a: number, b: number): number {
    return a * b;
};

//Arrow Functions
let subtractNumbers = (a: number, b: number): number => a - b;

//Method Functions
class Calculator {
    constructor(public value: number = 0) {}
    add(a: number) {
        this.value += a;
        console.log(this.value);
    }
}

//Constructor Functions
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

//Generic Functions
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

// Usage examples
const sum = addNumbers(10, 5); // Named Function
console.log(sum);
const product = multiplyNumbers(10, 5); // Anonymous Function
console.log(product);
const difference = subtractNumbers(10, 5); // Arrow Function
console.log(difference);
const myCalculator = new Calculator(); // Constructor Function
myCalculator.add(5); // Method Function
const greeting = new Greeter("world").greet(); // Constructor Function
console.log(greeting);
const firstNum = firstElement([10, 20, 30]); // Generic Function
console.log(firstNum);