function bubbleSort(arr: number[]): number[] {
    // Get the length of the array
    const len = arr.length;
    
    // Initialize a variable to track whether any swaps were made
    let swapped;

    // Repeat until no more swaps are made
    do {
        // Reset swapped flag to false
        swapped = false;

        // Iterate through the array
        for (let i = 0; i < len - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // If the current element is greater than the next one, swap them
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                // Set swapped flag to true to indicate that a swap was made
                swapped = true;
            }
        }
    } while (swapped); // Continue looping until no swaps are made

    // Once all elements are in their correct positions, return the sorted array
    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 1, 2];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);