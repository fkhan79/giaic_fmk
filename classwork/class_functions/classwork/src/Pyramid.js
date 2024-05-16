//using Named Function
console.log("Using Named Functions\n");
function printPyramid(height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        console.log(i, "i");
        // Adding spaces
        for (var j = 0; j < height - i - 1; j++) {
            row += '.';
            console.log(j, "j");
        }
        // Adding asterisks
        for (var k = 0; k <= i; k++) {
            row += '*';
            console.log(k, "k");
        }
        console.log(row);
    }
}
// Example usage
var height = 10;
printPyramid(height);
console.log('\nUsing Arror Functions\n');
var printPyramidUsingArrow = function (height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        // Adding spaces
        for (var j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        // Adding asterisks
        for (var k = 0; k <= i; k++) {
            row += '* ';
        }
        console.log(row);
    }
};
// Example usage
height = 5;
printPyramidUsingArrow(height);
