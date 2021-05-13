// exercise template

//.slice()
//this does NOT change the current array
//it produces a NEW one
//first parameter is zero index-based and second is not

const display = document.querySelector(".display");

const artists = ["Shakira", "Snoop", "Sia", "Beyonce", "Taylor Swift"];

const maleArtists = artists.slice(1, 2);
console.log(maleArtists);
