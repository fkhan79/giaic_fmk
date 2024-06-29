class StaticMethods {
    // Define a static method
    static staticMethod(): string {
      return "This is a static method";
    }
  }
  
  // Calling static method without creating an instance
  console.log(StaticMethods.staticMethod()); // Output: "This is a static method"
  