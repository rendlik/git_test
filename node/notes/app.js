console.log("starting app")

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2]


if(command === 'add'){
    console.log('adding new note')
}else if(command === 'list'){
    console.log('Listing all notes')
}else if(command === 'read'){
    console.log('Fetching note')
}else if(command === 'remove'){
    console.log('Removing note')
}else{
    console.log('command not recognized')
}