// Callback-based asynchronous function to fetch data
function fetchDataWithCallbacks(url: string, successCallback: (data: string) => void, errorCallback: (error: string) => void): void {
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            const data = `Fetched data from ${url}`;
            successCallback(data);
        } else {
            errorCallback('Error fetching data');
        }
    }, 1000);
}

// Using the callback-based function with success and error handling
fetchDataWithCallbacks(
    "https://api.example.com/data",
    (data) => console.log(data), // Success callback
    (error) => console.error(error) // Error callback
);
