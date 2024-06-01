interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Rex');
dog.makeSound(); // Output: Woof! Woof!
