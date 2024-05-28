class Person {
    // Private properties
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Public method to access private property
    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person = new Person('John', 30);
console.log(person.getDetails()); // Output: Name: John, Age: 30
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.
