const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fethc weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL)
    .then((response)=>{
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find the address')
        } 
        const lat = response.data.results[0].geometry.location.lat
        const lgn = response.data.results[0].geometry.location.lng
        const weatherURL = `https://api.darksky.net/forecast/be7d551e886c2ad0390753918ef9b238/${lat},${lgn}`;
        console.log(response.data.results[0].formatted_address)
        return axios.get(weatherURL)
    })
    .then((response) => {
        const temperature = response.data.currently.temperature;
        const apperentTemperature = response.data.currently.apperentTemperature;
        console.log(`Its currently ${temperature}. It feels like ${apperentTemperature}`)
    })
    .catch((e) => {
        if(e.code === 'ENOTFOUND'){
            console.log('Unable to connect to API servers')
        }else{
            console.log(e.message)
        }
    })