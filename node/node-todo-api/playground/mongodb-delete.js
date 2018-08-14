const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    if(err){
        return console.log('unable to connect to mongo')
    }

    let db = client.db('TodoApp')

    db.collection('Todos').deleteMany({name: 'eat luch'})

    client.close()
})