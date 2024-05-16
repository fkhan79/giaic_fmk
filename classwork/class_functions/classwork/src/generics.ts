// Generic function with multiple type parameters and constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Using the generic function with objects
let mergedResult = merge({ name: "Alice" }, { age: 25 });
console.log(mergedResult);  // Output: { name: "Alice", age: 25 }

// Using the generic function with different object types
let mergedResult2 = merge({ brand: "Toyota" }, { model: "Corolla", year: 2020 });
console.log(mergedResult2);  // Output: { brand: "Toyota", model: "Corolla", year: 2020 }
