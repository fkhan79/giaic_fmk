function greet1(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet1("Bob", "Hi")); // Output: Hi, Bob!

function greet2(name: string, greeting?: string, punctuation: string = "!"): string {
    if (greeting) {
        return `${greeting}, ${name}${punctuation}`;
    } else {
        return `Hello, ${name}${punctuation}`;
    }
}

console.log(greet2("Alice")); // Output: Hello, Alice!
console.log(greet2("Bob", "Hi")); // Output: Hi, Bob!
console.log(greet2("Charlie", undefined, ".")); // Output: Hello, Charlie.