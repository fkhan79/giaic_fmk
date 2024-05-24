// Define a union type for directions
type Direction = "north" | "south" | "east" | "west";

// Declare a variable with the union type
let direction: Direction;

// Assigning valid values
direction = "north"; // Valid assignment
direction = "south"; // Valid assignment

// Attempting to assign an invalid value
direction = "up"; // Error: Type '"up"' is not assignable to type 'Direction'.

// Function using union literals for parameter
function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

// Calling the function with valid values
move("north"); // Moving north
move("east");  // Moving east

// Attempting to call the function with an invalid value
move("up"); // Error: Argument of type '"up"' is not assignable to parameter of type 'Direction'.
