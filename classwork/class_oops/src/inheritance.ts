// Base class
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

// Derived class
class Dog extends Animal {
    bark(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Rex');
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Rex moved 10 meters.
