class Animal {
    makeSound(): void {
        console.log('Some generic animal sound');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meow! Meow!');
    }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());
// Output:
// Woof! Woof!
// Meow! Meow!
