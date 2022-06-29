/**
 *
 * There should be a one to one mapping from shortURL to longURL.
 *
 * Key value store 1
 * Make sure that there is one to one mapping
 * {
 *    "long": "short"
 * }
 *
 * ShortUrls ->
 * | longUrl | shortURL | userId |
 *
 * Key value store 2
 * When decoding the short URL to get the long one
 * {
 *    "short": "long"
 * }
 *
 * How to create the shortURL?
 *
 * To get a value for any url:
 * "https://google.co.in" -> "tinyurl.com/jjdj65"
 *
 * We can use random values to generate the URL and we can store these values in our database
 *
 *
 * 1. Get the basic URL.
 * 2. Apply the function to get a unique random string for that URL.
 * 3. Store them in both key-value store
 *
 * Example for short URL:
 *
 *       LONG                   SHORT
 * "https://google.co.in" ->  "tinyurl.com/arrxy734hjghdkl"
 *
 * Return BASE URL tinyurl.com/arrxy
 *
 *
 * "arrxy734hjghdkl" -> "https://google.co.in"
 *
 *
 *
 *
 *
 * We can create the corresponding shorten URL using ASCII values
 * ASCII value is always an integer [0 - 127]
 *
 * "/0" -> 0
 * "a" -> 97
 *
 * We are going to use Math.random() [for random number generation]
 *
 * Math.random -> [0, 1) and we can even get decimal values
 * Math.random -> 0.000, 0.056, 0.5343
 *
 * The problem with directly using Math.floor() is that we will always get 0.
 *
 * Math.floor(Math.random()) -> ALWAYS ZERO
 *
 *
 * String.fromCharCode(97) -> "a"
 *
 * I know the range of ASCII lowercase characters:
 *
 * "A" -> 65
 *
 * "a" -> 97 (97 + 0)
 * "b" -> 98 (97 + 1)
 * "c" -> 99 (97 + 2)
 * ...
 * "z" -> (97 + 25)
 *
 * -> We have to convert the output from Math.random into a ASCII value for a lowercase
 *    alphabet.
 *
 * String.fromCharCode(97 + Math.random()) -> 24
 *
 *
 * fixed       random
 *  97     +   [0 - 25]
 *
 *
 * String.fromCharCode(97 + Math.floor(Math.random() * 26))
 * -> always give a value between [0-25]
 *
 * TO make it alphanumeric, generate a number and a alphabet
 * again generate a random number from 0-2
 *
 * if(choice == 0){
 *  // add lowercase alphabet
 * } else if(choice == 1){
 *  // add uppercase character
 * } else {
 *  // add digit
 * }
 *
 *
 * Right now we are using only lowercase characters -
 *
 * Let's say we use 5 charcters after base URL
 *  _  _  _  _  _
 * 26 26 26 26 26 -> (26^5)
 *
 * Usage of only 5 characters gives a 11M combinations
 *
 *
 *
 * MAKE IT ALPHANUMERIC:
 * What if we use both uppercase, lowercase characters and digits?
 *
 * _   _   _   _   _
 * 62  62  62  62  62
 * For one place how many choices? (26 + 26 + 10) = 62
 *
 * [a-z] -> 26
 * [A-Z] -> 26
 * [0-9] -> 10
 *
 *
 *
 *
 *
 *
 *
 */

function createRandomCharacter() {
  // choice has range from [0-2]
  let choice = Math.floor(Math.random() * 3);
  // character to return
  let result;

  if (choice == 0) {
    // "a" -> 97
    result = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  } else if (choice == 1) {
    // "A" -> 65
    result = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  } else {
    // "0" -> 48
    result = String.fromCharCode(48 + Math.floor(Math.random() * 10));
  }
  return result;
}

function urlShortener() {
  let baseUrl = "https://tinyurl.com/";
  // final shortened url
  let shortUrl = "";
  // loop over the longURL
  // generate 5 random characters
  for (let i = 0; i < 5; i++) {
    // character to place here
    // append character to shortURL
    shortUrl += createRandomCharacter();
  }
  shortUrl = baseUrl + shortUrl;
  // this url will be stored somewhere
  return shortUrl;
}

console.log(
  urlShortener(
    "https://www.google.com/search?q=long+url&oq=long+url&aqs=chrome..69i57j0i512l6j0i131i433i512j46i512j0i512.1692j0j7&sourceid=chrome&ie=UTF-8"
  )
);
function getHash() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
