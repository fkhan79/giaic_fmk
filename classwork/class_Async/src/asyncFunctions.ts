// Example of a callback-based asynchronous function
function fetchDataWithCallback(url: string, callback: (data: string) => void): void {
    setTimeout(() => {
        const data = `Fetched data from ${url}`;
        callback(data); // Call the provided callback function with the data
    }, 1000);
}

// Using the callback-based asynchronous function
fetchDataWithCallback("https://api.example.com/data", (data) => {
    console.log(data); // Outputs: Fetched data from https://api.example.com/data
});

// Example of an async function
async function fetchDataAsync(url: string): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = `Fetched data from ${url}`;
            resolve(data); // Resolve the promise with the data
        }, 1000);
    });
}

// Using the async function with await
(async () => {
    const data = await fetchDataAsync("https://api.example.com/data");
    console.log(data); // Outputs: Fetched data from https://api.example.com/data
})();
