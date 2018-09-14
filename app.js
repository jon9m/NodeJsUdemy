console.log('Starting app.js');

const yargs = require('yargs');

const notes = require('./notes.js');

// const argv = yargs.argv;
const argv = yargs
    .command('add', 'Add a new note.', {
        title: {
            describe: 'Title of the note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note',
            demand: false,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .help()
    .argv;

console.log("argv", argv);
console.log(process.argv);

// var command = process.argv[2];
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created !");
        console.log("--------------");
        console.log(`Title ${note.title}`);
        console.log(`Body ${note.body}`);
        console.log("--------------");
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    allNotes.forEach(note => {
        console.log("--------------");
        console.log(`Title ${note.title}`);
        console.log(`Body ${note.body}`);
    });
} else if (command === 'read') {
    var note = notes.read(argv.title);
    if (note) {
        console.log("Note found !");
        console.log("--------------");
        console.log(`Title ${note.title}`);
        console.log(`Body ${note.body}`);
        console.log("--------------");
    } else {
        console.log("Note cannot be found !");
    }
} else if (command === 'remove') {
    notes.remove(argv.title);
} else {
    console.log('command not recognized');
}
