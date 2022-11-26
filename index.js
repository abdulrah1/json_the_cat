// This file will be the one that users can run and provide the breed name to. It will then require the breedFetcher file and call its exported function.
const fetchBreed = require('./breedFetcher');
let breedName = process.argv[2];


fetchBreed(breedName, (error, description) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(description);
  }
});