// Define two interfaces
interface User {
    name: string;
}

interface Admin {
    isAdmin: boolean;
}

// Create an intersection type combining User and Admin
type AdminUser = User & Admin;

// Create an object of the intersection type
const admin: AdminUser = {
    name: "Alice",
    isAdmin: true
};

// Combining more interfaces
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
}

// Create an intersection type from multiple interfaces
type PersonEmployee = Person & Employee;

// Create an object that satisfies all combined interfaces
const employee: PersonEmployee = {
    name: "Bob",
    age: 25,
    employeeId: 12345
};

// Accessing properties from combined interfaces
console.log(employee.name); // Outputs: Bob
console.log(employee.employeeId); // Outputs: 12345
