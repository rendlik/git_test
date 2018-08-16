const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    if(err){
        return console.log('unable to connect to mongo')
    }

    let db = client.db('TodoApp')

    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Todos').deleteOne({text: 'walk the dog'}).then(result => console.log(result))

    // db.collection('Users').findOneAndDelete({name: 'Jan'}).then(result => console.log(result))

    // db.collection('Users').deleteMany({name: 'Roman'}).then(result => console.log(result))

    db.collection('Users').findOneAndDelete({name: 'Jan'})
    client.close()
})