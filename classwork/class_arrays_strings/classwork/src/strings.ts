let message = "  Hello, TypeScript! ";

let messageLength = message.length;
console.log(messageLength);

let upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage); // Output: "  HELLO, TYPESCRIPT! " 

let lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage); // Output: "  hello, typescript! "

let trimmedMessage = message.trim(); 
console.log(trimmedMessage);    // Output: "Hello, TypeScript!"

let startsWithHello = message.startsWith("Hello");
console.log(startsWithHello);    // Output: true

let endsWithExclamation = message.endsWith("!");
console.log(endsWithExclamation);    // Output: true

let indexOfType = message.indexOf("Type"); 
console.log(indexOfType);  // Output: 7 (Index of the first 'T' in 'TypeScript')

let lastIndexOfSpace = message.lastIndexOf(" ");  
console.log(lastIndexOfSpace); // Output: 17 (Index of the last space)

let scriptPart = message.slice(7, 15);
console.log(scriptPart);   // Output: TypeScript