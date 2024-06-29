class MathUtils {
    // Define a class variable (static variable)
    static PI: number = 3.14;
  
    // Define a class method (static method)
    static calculateCircumference(radius: number): number {
      return 2 * MathUtils.PI * radius;
    }
  }
  
  console.log(MathUtils.PI); // Output: 3.14
  console.log(MathUtils.calculateCircumference(5)); // Output: 31.4
  