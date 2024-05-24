// Function overloads for adding numbers or concatenating strings
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

add(1, 2); // Outputs: 3
add("Hello, ", "world!"); // Outputs: Hello, world!

// More complex function overloads
interface Coordinate {
    x: number;
    y: number;
}

// Overloaded function to parse coordinates from a string or object
function parseCoordinate(coord: string): Coordinate;
function parseCoordinate(coord: Coordinate): Coordinate;
function
