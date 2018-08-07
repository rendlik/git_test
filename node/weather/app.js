// const yargs = require('yargs');

// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a:{
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fethc weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help','h')
//     .argv;

// geocode.geocodeAddress(argv.a, (errorMessage,results) => {
//     if (errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results,undefined,2))
//     }
// })    

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/be7d551e886c2ad0390753918ef9b238/49.7005057,18.0039066`,
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature)
    }else {
        console.log('Unable to fetch weather');
    }
})


