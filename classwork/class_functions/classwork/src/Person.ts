// File: person.ts
// This file defines a 'Person' class with various access modifiers.

export class Person {
    // Public member 'name' can be accessed from anywhere.
    public name: string;

    // Private member 'age' can only be accessed within the 'Person' class.
    private age: number;

    // Protected member 'employeeId' can be accessed within 'Person'
    // and any subclasses, even in different modules.
    protected employeeId: number;

    // Constructor initializes the class members.
    constructor(name: string, age: number, employeeId: number) {
        this.name = name; // Assigns the 'name' parameter to the public 'name' member.
        this.age = age; // Assigns the 'age' parameter to the private 'age' member.
        this.employeeId = employeeId; // Assigns the 'employeeId' parameter to the protected 'employeeId' member.
    }

    // Public method 'greet' that can be called from any other class or module.
    public greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}