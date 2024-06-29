// // Example 1: Copying an array
// const numbers = [1, 2, 3];
// const copiedNumbers = [...numbers];
// console.log(copiedNumbers);  // Output: [1, 2, 3]
// // Example 2: Merging arrays
// const moreNumbers = [4, 5, 6];
// const mergedNumbers = [...numbers, ...moreNumbers];
// console.log(mergedNumbers);  // Output: [1, 2, 3, 4, 5, 6]


// //Example 4.1
// function sumArray(a: number, b: number, c: number): number {
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     return a + b + c;
// }

// let numbersArray: number[] = [10, 7, 5,2];
// console.log(numbersArray, "numbersArray");
// let result = sumArray(...numbersArray);

// console.log(result);  // Output: 6

//Example 4.2: Rest operator using Spread
// function sumUsingRest(...numbers: number[]): number {
//     return numbers.reduce((sum, curr) => {
//         console.log(sum, "sum", curr, "curr");
//         return sum + curr
//     }, 0);
// }

// numbersArray = [1, 2, 3, 4, 5];
// result = sumUsingRest(...numbersArray);
// console.log(result);  // Output: 15

// Example 5: Copying an object
const person = { name: "Alice", age: 30 };
const copiedPerson = { ...person };
console.log(copiedPerson);  // Output: { name: "Alice", age: 30 }

// Example 6: Merging objects
const additionalInfo = { gender: "female", country: "UK" };
const mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);  // Output: { name: "Alice", age: 30, gender: "female", country: "UK" }

// Example 7: Overriding properties
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson);  // Output: { name: "Alice", age: 31 }
