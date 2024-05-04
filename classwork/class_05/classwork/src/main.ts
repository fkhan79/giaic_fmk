// File: main.ts
// This file demonstrates how to use the 'Person' and 'Employee' classes.

import { Person } from './Person.js';
import { Employee } from './Employee.js';

// Creates an instance of 'Person'.
let person = new Person('Alice', 30, 12345);
person.greet(); // OK: Calls the public method 'greet'.
console.log(person.name); // OK: Accesses the public member 'name'.
// console.log(person.age); // Error: 'age' is private and cannot be accessed outside 'Person'.
// console.log(person.employeeId); // Error: 'employeeId' is protected and cannot be accessed outside 'Person' or its subclasses.

// Creates an instance of 'Employee'.
let employee = new Employee('Bob', 40, 67890);
employee.showId(); // OK: Calls the public method 'showId' which accesses a protected member.