//using Named Function
console.log("Using Named Functions\n");
function printPyramid(height: number): void {
    for (let i = 0; i < height; i++) {
        let row = '';
        console.log(i, "i");


        // Adding spaces
        for (let j = 0; j < height - i - 1; j++) {
            row += '.';
            console.log(j, "j");

        }

        // Adding asterisks
        for (let k = 0; k <= i; k++) {
            row += '*';
            console.log(k, "k");
        }

        console.log(row );
    }
}

// Example usage
let height = 10;
printPyramid(height);

console.log('\nUsing Arror Functions\n');
const printPyramidUsingArrow = (height: number): void => {
    for (let i = 0; i < height; i++) {
        let row = '';

        // Adding spaces
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }

        // Adding asterisks
        for (let k = 0; k <= i; k++) {
            row += '* ';
        }

        console.log(row);
    }
};

// Example usage
height = 5;
printPyramidUsingArrow(height);