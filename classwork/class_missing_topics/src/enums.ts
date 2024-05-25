// Define a numeric enum
enum Direction {
    North,
    South,
    East,
    West
}

// Use the numeric enum
let dir: Direction = Direction.North;
console.log(dir); // Outputs: 0 (the numeric value of Direction.North)

// Define a string enum
enum StringDirection {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}

// Use the string enum
let stringDir: StringDirection = StringDirection.North;
console.log(stringDir); // Outputs: NORTH

// Using enums in functions
function move(direction: Direction): void {
    console.log(`Moving ${Direction[direction]}`);
}

move(Direction.North); // Moving North

// Another function using string enums
function moveInStringDirection(direction: StringDirection): void {
    console.log(`Moving ${direction}`);
}

moveInStringDirection(StringDirection.North); // Moving NORTH
