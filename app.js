const express = require("express");
const cities = require('./src/country-by-capital-city.json');

const app = express();
 
app.get("/", function(request, response){
    response.send("Hello");
});

app.get("/capital", (request, response) => {
    const country = request.query.country;
    response.send(findCapital(cities, country));
  })

app.use((error, request, response, next) => {
    res.status(404);
    res.send("This route not found");
  })

/*
Function to convert the first letter of a string to uppercase
param str - input string
*/
function toFirstUpperCase(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/* 
Function to search for the capital by country
param objCities - object of values of countries and their capitals in the form of a key-value
param valueCountry - the country whose capital you want to find (string)
*/
function findCapital(objCities, valueCountry) {
    for (let value of Object.values(objCities)) {
        if (value.country === toFirstUpperCase(valueCountry)) 
            return `Capital of ${value.country} is ${value.city}`
    }
    return `No such country found`; 
}

app.listen(3000);