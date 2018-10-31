const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

let id = "5b7a303e918ad2294c4f577922"

// User.find({
//     _id: id
// }).then((users) => {
//     console.log('Users',users)
// })

// User.findOne({
//     _id: id
// }).then((user) => console.log('User',user))

User.findById(id).then(user => {
    if(!user){
        return console.log('User not found')
    }
    console.log('User', user)
}).catch(e => console.log(e))

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos: ', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo: ', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found')
//     }
//     console.log('Todo',todo)
// }).catch(e => console.log(e))



