const express = require('express')

const app = express();

app.get('/',(req, res)=>{
    res.send('Hello world!')
})

app.get('/users', (req,res) => {
    res.send([{name: 'Roman', age: 27}, {name: 'Petra', age: 25}])
})

app.listen(3000)

module.exports.app = app