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
        document.getElementById('dogImage1').src = url;

        console.log("Image URL:", url); // ← Add this to inspect in dev tools

        let breedName = "Unknown Breed";
        const regex = /breeds\/([^\/]+)\/([^\/]+\.jpg)/;

        // Match standard breed/sub-breed path
        const match = url.match(/breeds\/([a-z\-]+)(?:\/[a-z\-]+)?\//i);
        if (match && match[1]) {
            breedName = match[1]
                .replace('-', ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
        }

        document.getElementById('breedName').innerText = `Breed: ${breedName}`;
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('breedName').innerText = `Breed: Error loading`;
    }
}

