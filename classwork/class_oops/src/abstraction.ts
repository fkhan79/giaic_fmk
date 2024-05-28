abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log('Moving along!');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Moving along!
