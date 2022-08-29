// Modules
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

// Variables
const PORT = 5000;
var apikey = "1119e13e3c2861ba888f0d75482d35b5";
var url = "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=" + apikey + "&units=metric";

// GET Method
app.get("/", function (request, response) {
    // https GET Method
    https.get(url, function (res) {
        res.on("data", function (data) {
            var weatherInfo = JSON.parse(data);
            var place = weatherInfo.name;
            var weather = weatherInfo.weather[0].main;
            var temperature = weatherInfo.main.temp;
            
            // sending to body
            response.write(`Place : ${place}\n`);
            response.write(`Weather : ${weather}\n`);
            response.write(`Temperature : ${temperature} Degree Celcius\n`);
            response.send();
        });
    });
});

// Create a Server
app.listen(PORT, function () {
    console.log("Node Server is Running !!!!");
})
