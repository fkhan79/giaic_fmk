class StaticVars {
    // Define a static variable
    static staticVar: number = 42;
  
    // Static method to access static variable
    static getStaticVar(): number {
      return StaticVars.staticVar;
    }
  }
  
  // Accessing static variable without creating an instance of the class
  console.log(StaticVars.staticVar); // Output: 42
  
  // Accessing static method without creating an instance
  console.log(StaticVars.getStaticVar()); // Output: 42
  