 const fs = require('fs');
 const _ = require('lodash');
 const yargs = require('yargs');


 const notes = require('./notes.js');

 

 const title = {
     describe: "Title of a note",
     demand: true,
     alias: 't'
 };

 const body = {
     describe: 'Body of note',
     demand: true,
     alias: 'b'
 };


 const argv = yargs
     .command('add', 'Add a new note', {
         title,
         body
     })
     .command('list', 'List all notes')
     .command('read', 'Read a note', {
         title
     })
     .command('remove', "Remove a note", {
         title
     })
     .argv;
 let command = process.argv[2]


 if (command === 'add') {
     const note = notes.addNote(argv.title, argv.body);
     if (_.isUndefined(note)) {
         console.log("Note title already exists")
     } else {
         console.log("Note created.")
         notes.logNote(note);
     }

 } else if (command === 'list') {
     const allNotes = notes.getAll();
     console.log(`Printing ${allNotes.length} note(s)`)
     allNotes.forEach(note => notes.logNote(note));
 } else if (command === 'read') {
     const note = notes.readNote(argv.title);
     if (_.isUndefined(note)) {
         console.log("Note not found")
     } else {
         console.log("Note found.");
         notes.logNote(note);
     }
 } else if (command === 'remove') {
     const noteRemoved = notes.removeNote(argv.title);
     var message = noteRemoved ? "Note was removed" : "Note not found";
     console.log(message);
 } else {
     console.log('command not recognized')
 }