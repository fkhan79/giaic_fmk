class StaticVsInstance {
    // Define an instance variable
    instanceVar: number;
  
    // Constructor to initialize instance variable
    constructor(instanceVar: number) {
      this.instanceVar = instanceVar;
    }
  
    // Instance method to access instance variable
    getInstanceVar(): number {
      return this.instanceVar;
    }
  
    // Define a static method
    static staticMethod(): string {
      return "This is a static method";
    }
  }
  
  const example = new StaticVsInstance(3);
  console.log(example.getInstanceVar()); // Output: 3
  console.log(StaticVsInstance.staticMethod()); // Output: "This is a static method"
  