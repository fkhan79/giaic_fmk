// let arrayNameWithoutType=[]
// let arrayName: type[];
// let numbers = []; // 'numbers' is implicitly any[]
// Array of numbers:
// let numArray: number[] = [1, 2, 3, 4, 2];
// // Array of strings:
// let names: string[] = ["Alice", "Bob", "Charlie"];
// // Using the Array type
// let mixedArray: Array<number | string> =
//  [1, "hello", 2]; 
// let var1 = 1;
// let var2 = 2;
// let var3 = 3;
// console.log(var1, var2, var3);
var varArray = [1, 2, 3];
console.log(varArray);
var firstNumber = varArray[0];
console.log(firstNumber);
console.log(firstNumber, varArray[0]);
varArray[0] = 5;
console.log(firstNumber, varArray[0]);
