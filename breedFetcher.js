/*
let's build a command line app that makes it "easy" for users to query this dataset from the terminal.
Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed.
*/



const request = require('request');



const fetchBreedDiscription = function(breedName, callback) {
  let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;


  request(URL, (error, response, body) => {
    // In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first.
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    }
    if (data[0]) {
      // console.log('body: ', data)
      //console.log(typeof data) // becomes object
      callback(data[0].description, null); // Access the first entry in data(body) array and  prints out the description from the object.
    } else {
      callback("Could not find the breed!", null);
    }
  });
};


module.exports = fetchBreedDiscription;
