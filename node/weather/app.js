const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philidelphia',
    json: true
},(error, response, body)=>{
    // console.log(JSON.stringify(body,undefined,2))
    console.log(`Lat : ${body.results[0].geometry.location.lat} `)
    console.log(`Log : ${body.results[0].geometry.location.lng} `)    
})  