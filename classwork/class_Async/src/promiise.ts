// Creating a Promise that resolves successfully
const successfulPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve("Operation was successful"), 1000); // Resolves after 1 second
});

// Creating a Promise that rejects with an error
const failingPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => reject("Operation failed"), 1000); // Rejects after 1 second
});

// Handling a resolved promise
successfulPromise
    .then(result => console.log(result)) // Outputs: Operation was successful
    .catch(error => console.error(error))
    .finally(() => console.log("Operation complete"));

// Handling a rejected promise
failingPromise
    .then(result => console.log(result))
    .catch(error => console.error(error)) // Outputs: Operation failed
    .finally(() => console.log("Operation complete"));
