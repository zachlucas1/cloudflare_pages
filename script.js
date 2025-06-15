//gets a request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// gets a random image from this API
function getRandomImage()
{
  // get the json from a server that has 20,000 images
  var json = httpGet('https://dog.ceo/api/breeds/image/random');
  console.log(json);

  // puts it all into an array
  var array = JSON.parse(json);
  console.log(array);
  
  // get the image url from the array
  var url = array.message;
  console.log(url);
  
  // get the image 
  var image = document.getElementById('dogImage1');

  
  // set the src of the image object and prints it
  image.src = url;
}