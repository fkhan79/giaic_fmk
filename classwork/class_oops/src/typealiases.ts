// Type alias for a complex type
type Point = {
    x: number;
    y: number;
};

class Shape {
    // Using type alias
    private center: Point;

    constructor(center: Point) {
        this.center = center;
    }

    describe(): void {
        console.log(`Shape is centered at (${this.center.x}, ${this.center.y}).`);
    }
}

const centerPoint: Point = { x: 5, y: 10 };
const shape = new Shape(centerPoint);
shape.describe(); // Output: Shape is centered at (5, 10).
