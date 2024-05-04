let arr = [5, 2, 9, 1, 5, 6];
console.log("Unsorted Array:",arr);
const n = arr.length;
let swapped: boolean;

do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            // Swap elements
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swapped = true;
        }
    }
} while (swapped);
console.log("Sorted Array:",arr);