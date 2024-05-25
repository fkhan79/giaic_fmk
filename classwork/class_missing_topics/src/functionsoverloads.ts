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
function parseCoordinate(coord: any): Coordinate {
    if (typeof coord === "string") {
        let [x, y] = coord.split(",").map(Number);
        return { x, y };
    } else {
        return coord;
    }
}

parseCoordinate("10,20"); // Outputs: { x: 10, y: 20 }
parseCoordinate({ x: 10, y: 20 }); // Outputs: { x: 10, y: 20 }

// Additional example with different return types
function getValue(param: number): number;
function getValue(param: string): string;
function getValue(param: any): any {
    if (typeof param === "number") {
        return param * 2; // Example logic for numbers
    } else if (typeof param === "string") {
        return `Hello, ${param}`; // Example logic for strings
    }
}

getValue(10); // Outputs: 20
getValue("World"); // Outputs: Hello, World
