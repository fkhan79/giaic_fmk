// Class definition
class Animal {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

// Creating an object (instance of the class)
const dog = new Animal('Dog', 3);
dog.makeSound(); // Output: Dog makes a sound.
