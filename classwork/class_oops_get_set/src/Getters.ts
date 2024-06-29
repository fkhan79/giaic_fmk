class Rectangle {
    private _width: number;
    private _height: number;
  
    constructor(width: number, height: number) {
      this._width = width;
      this._height = height;
    }
  
    // Getter for the width property
    get width(): number {
      return this._width;
    }
  
    // Getter for the height property
    get height(): number {
      return this._height;
    }  
   
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.width); // Output: 5
  console.log(rect.height); // Output: 10
  