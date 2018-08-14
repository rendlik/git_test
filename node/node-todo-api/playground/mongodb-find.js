const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB')
    }
    let db = client.db('TodoApp')

    // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    //     console.log('Todos:')
    //     console.log(JSON.stringify(docs,undefined,2))
    // },err =>{
    //     console.log(err)
    // })

    // db.collection('Todos').find({completed:false}).count().then((count) => {
    //     console.log( count)
    // },err =>{
    //     console.log(err)
    // })

    db.collection('Users').find({name: 'Roman'}).toArray().then((docs) => {
        // console.log(JSON.stringify(docs,undefined,2))
        console.log(docs)
    },err =>{
        console.log(err)
    })

    client.close()
})