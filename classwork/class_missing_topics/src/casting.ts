// Using `as` syntax for explicit casting
let value: unknown = "Hello";
let strLength: number = (value as string).length; // Casting unknown to string

// Using angle-bracket syntax for explicit casting
let anotherValue: unknown = "Hello";
let anotherStrLength: number = (<string>anotherValue).length; // Casting unknown to string

// Example with DOM elements
let element = document.getElementById("my-element") as HTMLInputElement;
element.value = "New Value"; // Accessing HTMLInputElement properties

// Another example: casting a broader type to a more specific type
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let animal: Animal = { name: "Rex" };
let dog = animal as Dog; // Explicit casting
dog.breed = "Labrador"; // TypeScript will not complain, but it's potentially unsafe
