console.log('inside notes js file');
const fs = require('fs');


var fetchNotes = () => {
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (err) {
    }
    return notes;
}

var saveNote = (notes, note) => {
    var duplicatteNotes = notes.filter(currNote => {
        return currNote.title === note.title
    });

    if (duplicatteNotes.length <= 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        return note;
    }
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var updatedNotes = notes.filter(currNote => {
        return currNote.title !== title
    });
    fs.writeFileSync('notes-data.json', JSON.stringify(updatedNotes));
}

var getAllNotes = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    var theNote;
    notes.forEach(note => {
        if (note.title === title) {
            theNote = note;
        }
    });
    return theNote;
}

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title: title,
        body: body
    };

    notes = fetchNotes();
    return saveNote(notes, note);
}

var getAll = () => {
    return getAllNotes();
}

var read = (title) => {
    return getNote(title);
}

var remove = (title) => {
    removeNote(title);
}


module.exports = {
    addNote: addNote,
    //or just addNote - both are same (ES6)
    //addNote 
    getAll,
    read,
    remove
}