console.log('inside notes js file');


var addNote = (title, body) => {
    console.log(title, body);
}

var getAll = () => {
    console.log('getting all notes');
}

var read = () => {
    console.log('read note');
}

var remove = () => {
    console.log('remove a note');
}


module.exports = {
    addNote: addNote,
    //or just addNote - both are same (ES6)
    //addNote 
    getAll,
    read,
    remove
}