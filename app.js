const fs = require("fs");
const validator = require('validator');
const chalk = require('chalk');
const yargs = require("yargs");
const notes = require('./notes')

console.log(chalk.green('\nNode Course Started\n'));

// create a add command
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    handler: function (argv) {
        
        notes.addNote(argv.title, argv.body);
    },
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    }
});

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note!',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string',
            demandOption: true
        },
       
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
});

// List  command
yargs.command({
    command: 'list',
    describe: 'RemoListve a new note!',
    handler: function () {
        console.log("Listing out all notes!!!");
    }
});

// Read command
yargs.command({
    command: 'read',
    describe: 'Read a new note!',
    handler: function () {
        console.log("Reading a note!!!");
    }
});




yargs.parse();

// console.log(yargs.argv)