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
  
    // Setter for the width property with validation
    set width(value: number) {
      if (value > 0) {
        this._width = value;
      } else {
        console.error("Width must be positive");
      }
    }
  
    // Getter for the height property
    get height(): number {
      return this._height;
    }
  
    // Setter for the height property with validation
    set height(value: number) {
      if (value > 0) {
        this._height = value;
      } else {
        console.error("Height must be positive");
      }
    }
    get area():number{
    if (this._width >= 0 && this._height >= 0){
      return this._width * this._height;
    }else if (this._width < 0 && this._height < 0){
      return -1;
    }
    return 0;
  }
}

  const rect = new Rectangle(5, 10);
  rect.width = 15;
  rect.height = -5; // Will trigger error: Height must be positive
  console.log(rect.width); // Output: 15
  console.log(rect.height); // Output: 10
  console.log(rect.area); // Output: 150
  