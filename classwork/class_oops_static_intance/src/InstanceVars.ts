class InstanceVars {
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
}

const example1 = new InstanceVars(1);
const example2 = new InstanceVars(2);

// Each instance has its own copy of the instance variable
console.log(example1.instanceVar); // Output: 1
console.log(example2.instanceVar); // Output: 2
