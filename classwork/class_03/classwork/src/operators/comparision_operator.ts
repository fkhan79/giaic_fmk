let realNumber: number = 5;
let stringNumber: string = "5";

// Loose equality (==) and inequality (!=)
console.log(realNumber == 5); // true
console.log(stringNumber == "5"); // true
// console.log(realNumber == stringNumber); // error

console.log(realNumber != 6); // true
console.log(stringNumber != "5"); // false
// console.log(realNumber != stringNumber); // error

// Strict Equal to (===)
console.log(realNumber === 5); // true
console.log(stringNumber === "5"); // true
// console.log(realNumber === stringNumber); // error

// Strict Not Equal to (!==)
console.log(realNumber !== 6); // true
console.log(stringNumber !== "5"); // false
// console.log(realNumber !== stringNumber); // error
