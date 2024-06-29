class Person {
    private _firstName: string;
    private _lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    // Getter for the fullName property
    get fullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Setter for the fullName property
    set fullName(name: string) {
      let parts = name.split(' ');
      if (parts.length === 2) {
        this._firstName = parts[0];
        this._lastName = parts[1];
      } else {
        console.error("Full name must contain first and last name");
      }
    }
  }
  
  const person = new Person("John", "Doe");
  console.log(person.fullName); // Output: John Doe
  
  person.fullName = "Jane Smith";
  console.log(person.fullName); // Output: Jane Smith
  
  person.fullName = "InvalidName"; // Will trigger error: Full name must contain first and last name
  