console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

console.log(argv);
console.log(process.argv);

// var command = process.argv[2];
var command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.read();
} else if (command === 'remove') {
    notes.remove();
} else {
    console.log('command not recognized');
}
