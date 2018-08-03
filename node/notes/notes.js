
const fs = require('fs')

const fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json')
        return notes = JSON.parse(notesString)
    }catch(e){
        return [];
    }
};

const saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

const addNote = (title,body) => {
    let notes = fetchNotes();
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

}

const getAll = () => {
    return fetchNotes();
} 

const readNote = (title) => {
    const filteredNotes = fetchNotes().filter(note => note.title === title);
    return filteredNotes[0];
}

const removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

const logNote = (note) =>{
    debugger;
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`)
}


module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
}