//Types and TypesAliases
// Creating type aliases
type MyNumber = number;
type UserType = {
  id: number;
  name: string;
  email: string;
};

let MyNumber=100;
//MyNumber="hello"; //Not Possible, Type is number

let user:UserType={
  id:1,
  name:"Faisal",
  email:"faisal@faisal.com"
}
let user2:UserType={//not possible as email is not present
  id:2,
  name:"Faisal"  
}
console.log(user);
console.log(user2);

//TypeAliases
type StringOrNumber = string | number; //Defined Union of string and number
let value: StringOrNumber = "Hello";//String can be assigned to StringOrNumber
value = 100; //Number can be assigned to StringOrNumber
//value=true;//Not Possible as boolean is not part of StringOrNumber

//Interfaces
// Defining an interface
interface Client {
    name: string;
    address: string;
}
let client: Client = {//Perfectly fine
    name: "Faisal",
    address: "123 Main St"
}
// let client2: Client = {//Not possible as address is not present
//     name: "Faisal",
//}
console.log(client);
//console.log(client2);


//Fresh Types vs Stale Types
let animal = { name: 'cow', diet: 'vegan, but has milk of own species' };//Fresh Type
console.log(animal)

let testAnimal = { name: "cow", diet: "vegan, but has milk of own species", species: "cow" }
animal = testAnimal//Stale Type

console.log(animal);//{ name: 'hello', diet: 'hello', newVal: 'hello' }

//Tuples
// Declare a tuple with a string followed by a number
let myTuple: [string,number] = ["Hello", 42];
//let myTuple: [string,number,string,number] = ["Hello", 42,"Hello", 42];
// Access individual elements
let greeting: string = myTuple[0]; // "Hello"
let answer: number = myTuple[1]; // 42


// Union type for a parameter that can be a string or a number
function printValue(value: string | number): void {
    console.log(value);
}

printValue("Hello"); // OK
printValue(42); // OK
printValue(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'


// Define the Bird interface
interface Bird {
    fly(): void;
    layEggs(): void;
}

// Define the Fish interface
interface Fish {
    swim(): void;
    layEggs(): void;
}

// Implement the getSmallPet function
function getSmallPet(): Fish | Bird {
    // Randomly decide whether to return a Fish or a Bird
    const isFish = Math.random() < 0.5;

    if (isFish) {
        // Return a Fish
        return {
            swim() {
                console.log("SWIMMING");
            },
            layEggs() {
                console.log("LAYING EGGS");
            },
        };
    } else {
        // Return a Bird
        return {
            fly() {
                console.log("FLYING");
            },
            layEggs() {
                console.log("LAYING EGGS");
            },
        };
    }
}

// Example usage:
const pet = getSmallPet();
pet.layEggs(); // Common method for both Fish and Bird
pet.fly(); // Only available for Bird
pet.swim(); // Only available for Fish

