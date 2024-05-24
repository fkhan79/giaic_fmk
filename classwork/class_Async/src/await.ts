// Async function to simulate a delayed operation
async function delayedOperation(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Operation completed"), 2000); // Resolves after 2 seconds
    });
}

// Async function using await
async function performOperations() {
    console.log("Starting operation...");
    const result = await delayedOperation(); // Await the delayed operation
    console.log(result); // Log the result once the promise is resolved
    console.log("Operation finished.");
}

// Call the async function
performOperations();
// Outputs:
// Starting operation...
// (after 2 seconds) Operation completed
// Operation finished.
