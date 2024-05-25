// Using the `any` type
let anyValue: any = 42;
anyValue = "Hello"; // Valid
anyValue = true; // Valid

// Using the `unknown` type
let unknownValue: unknown = 42;

// Type check is required before using the value
if (typeof unknownValue === "number") {
    let numberValue: number = unknownValue; // Valid after type check
}

// Using the `never` type in a function that never returns
function throwError(message: string): never {
    throw new Error(message);
}

// Example of a function with `never` type due to infinite loop
function infiniteLoop(): never {
    while (true) {
    }
}
