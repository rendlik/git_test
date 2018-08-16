const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
if(err){
    return console.log('Unable to connect to MongoDB')
}
console.log('Connected to MongoDB')

let db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5b7337c1496a32041f3c7802")},{$set:{completed: true}},{returnOriginal: false}).then(result => console.log(result))

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b736929e320560b41609f05")
},{
    $set: {
        name: "Roman"
    },
    $inc: {
        age: 1
    }
})

client.close()
})