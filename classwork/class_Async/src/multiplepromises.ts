// Simulate fetching data from multiple sources
async function fetchFromSource1(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Data from source 1"), 1000));
}

async function fetchFromSource2(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Data from source 2"), 2000));
}

// Async function to fetch from multiple sources concurrently
async function fetchDataFromMultipleSources(): Promise<void> {
    try {
        console.log("Fetching data from multiple sources...");
        const [data1, data2] = await Promise.all([fetchFromSource1(), fetchFromSource2()]); // Await both promises
        console.log("Source 1:", data1);
        console.log("Source 2:", data2);
        console.log("All data fetched.");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
fetchDataFromMultipleSources();
// Outputs:
// Fetching data from multiple sources...
// (after 1 second) Source 1: Data from source 1
// (after 2 seconds) Source 2: Data from source 2
// All data fetched.
