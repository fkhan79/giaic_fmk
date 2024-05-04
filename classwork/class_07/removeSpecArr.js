var originalArray = [10, 20, 30, 40, 50];
var elementToRemove = 30;
// Find the index of the element to remove
// const index = originalArray.indexOf(elementToRemove);
// console.log(index)
// if (index !== -1) {
//     // Remove the element by directly modifying the array
//     originalArray.splice(index, 1);
// }
console.log("orignal array:", originalArray);
originalArray.splice(0, 2);
console.log("Modified array:", originalArray);
