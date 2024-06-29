class Person {
  // Public property
  public name: string;

  // Private property
  private age: number;

  // Constructor to initialize properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Public method to get age (since age is private)
  public getAge(): number {
    return this.age;
  }
}

const person = new Person("John", 30);
console.log(person.name); // Output: John
console.log(person.getAge()); // Output: 30
