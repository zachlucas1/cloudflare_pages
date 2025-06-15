// gets a request
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// gets a random image from this API
async function getRandomImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        const url = data.message;
        // --- START DEBUGGING LOGS ---
        console.log("DEBUG: Image URL (from API response):", url);
        // --- END DEBUGGING LOGS ---

        // Set image source
        document.getElementById('dogImage1').src = url;

        // Extract breed or sub-breed from URL
        let breedName = "Unknown Breed";
        const match = url.match(/breeds\/([^\/]+)\//i);

        // --- START DEBUGGING LOGS ---
        console.log("DEBUG: Result of regex match:", match);
        if (match && match[1]) {
            console.log("DEBUG: Matched breed part (match[1]):", match[1]);
        } else {
            console.log("DEBUG: Regex did NOT find a match or match[1] is undefined.");
        }
        // --- END DEBUGGING LOGS ---

        if (match && match[1]) {
            // Handles cases like "spaniel-brittany"
            breedName = match[1]
                .split('-')
                .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                .join(' ');
            // --- START DEBUGGING LOGS ---
            console.log("DEBUG: Final processed breedName:", breedName);
            // --- END DEBUGGING LOGS ---
        }

        document.getElementById('breedName').innerText = `Breed: ${breedName}`;
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('breedName').innerText = `Breed: Error loading`;
    }
}