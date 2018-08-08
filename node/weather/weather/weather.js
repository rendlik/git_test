const request = require('request');

const getWeather = (lat,lgn,callback) => {
    request({
        url: `https://api.darksky.net/forecast/be7d551e886c2ad0390753918ef9b238/${lat},${lgn}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined,
                `It is ${convertToCelsius(body.currently.temperature)} but it feels like ${convertToCelsius(body.currently.apparentTemperature)}`
            )
        }else {
            callback('Unable to fetch weather');
        }
    })
}

const convertToCelsius = (far) => (5/9*(far-32))

module.exports.getWeather = getWeather;
