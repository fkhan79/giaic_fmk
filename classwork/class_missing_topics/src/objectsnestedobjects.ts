// Define an interface for a simple object
interface Person {
    name: string;
    age: number;
}

// Create an object adhering to the Person interface
const person: Person = {
    name: "John",
    age: 30
};

// Define interfaces for nested objects
interface Address {
    street: string;
    city: string;
}

interface PersonWithAddress {
    name: string;
    age: number;
    address: Address; // Nested object
}

// Create an object with nested structure adhering to the interfaces
const personWithAddress: PersonWithAddress = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

// Accessing nested properties
console.log(personWithAddress.address.city); // Outputs: New York

// Modifying nested properties
personWithAddress.address.city = "Los Angeles";
console.log(personWithAddress.address.city); // Outputs: Los Angeles
