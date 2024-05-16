// Example of a shallow copy using the spread operator
const originalObject = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: 12345
    }
};

const shallowCopy = { ...originalObject };

shallowCopy.name = "Bob";  // Changes only the copy
shallowCopy.address.city = "Dreamland";  // Changes both original and copy

console.log(originalObject);  // Output: { name: "Alice", address: { city: "Dreamland", zip: 12345 } }
console.log(shallowCopy);  // Output: { name: "Bob", address: { city: "Dreamland", zip: 12345 } }

// Example of a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.name = "Charlie";  // Changes only the copy
deepCopy.address.city = "Neverland";  // Changes only the copy
console.log(originalObject);  // Output: { name: "Alice", address: { city: "Dreamland", zip: 12345 } }
console.log(deepCopy);  // Output: { name: "Charlie", address: { city: "Neverland", zip: 12345 } }

// Example of a deep copy using a custom recursive function
function deepCopyAdvanced(obj: any) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }

    const copy = {} as any;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const customDeepCopy = deepCopyAdvanced(originalObject);
customDeepCopy.name = "Dave";  // Changes only the copy
customDeepCopy.address.city = "Fantasyland";  // Changes only the copy
console.log(originalObject);  // Output: { name: "Alice", address: { city: "Dreamland", zip: 12345 } }
console.log(customDeepCopy);  // Output: { name: "Dave", address: { city: "Fantasyland", zip: 12345 } }
