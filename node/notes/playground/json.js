// const obj = {
//     name: "Andrew"
// }

// const stringObj = JSON.stringify(obj)

// console.log(typeof obj)
// console.log(typeof stringObj)

// const personString = '{"name": "Andrew", "age": 25}'
// const person = JSON.parse(personString)

// console.log(typeof personString)
// console.log(typeof person)

const fs = require('fs');

let originalNote = {
    title: "Some title",
    body: "Some body"
}

const originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync("notes.json",originalNoteString);

const noteString = fs.readFileSync("notes.json");

const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)