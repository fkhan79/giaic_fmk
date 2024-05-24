// Async function to fetch data with error handling
async function fetchDataWithErrorHandling(url: string): Promise<string> {
    try {
        const response = await fetch(url); // Await the fetch call
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text(); // Await the response
        return data; // Return the data
    } catch (error) {
        console.error("Fetch error:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

// Call the async function with error handling
fetchDataWithErrorHandling("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(error => console.error("Caught error:", error));
