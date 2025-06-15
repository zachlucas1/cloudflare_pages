// gets a request
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// gets a random image from this API
function getRandomImage() {
    // get the json from the API
    var json = httpGet('https://dog.ceo/api/breeds/image/random');
    console.log(json);

    // parse the JSON response
    var array = JSON.parse(json);
    console.log(array);

    // get the image URL
    var url = array.message;
    console.log(url);

    // update the image
    var image = document.getElementById('dogImage1');
    image.src = url;

    // extract the breed from the URL
    var breedMatch = url.match(/breeds\/([^\/]+)\//);
    var breedName = "Unknown Breed";

    if (breedMatch && breedMatch[1]) {
        breedName = breedMatch[1]
            .replace('-', ' ')                     // Replace hyphens with spaces
            .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize each word
    }

    // update the breed name in the DOM
    var breedElement = document.getElementById('breedName');
    if (breedElement) {
        breedElement.innerText = `Breed: ${breedName}`;
    }
}
