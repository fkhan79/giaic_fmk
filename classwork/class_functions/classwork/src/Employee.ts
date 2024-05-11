// File: employee.ts
// This file imports the 'Person' class and extends it with an 'Employee' subclass.

import { Person } from './Person.js';

export class Employee extends Person {
    // Constructor calls the superclass constructor.
    constructor(name: string, age: number, employeeId: number) {
        super(name, age, employeeId); // 'super' refers to the 'Person' class.
    }

    // Public method 'showId' that can be called from any other class or module.
    public showId() {
        // Accesses the protected member 'employeeId' from the 'Person' class.
        console.log(`My employee ID is ${this.employeeId}`);
    }
}