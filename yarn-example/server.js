const express = require('express');
const port = process.env.PORT || 3000

let app = express();

app.get('/',(req,res) => {
  res.send('Ahoj')
})

app.listen(port, ()=> console.log(`server is running on port ${port}`))
