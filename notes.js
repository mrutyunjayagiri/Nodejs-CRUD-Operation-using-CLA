const fs = require('fs');   // Get FileSystem
const chalk = require('chalk');     // For Styling the console statements: for more info visit=> https://www.npmjs.com/package/chalk


// Get All Notes
const getNotes = function () {
    return 'Your notes...'
}

// Remove a Note
const removeNote = (title) => {
    // Load Notes
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.yellowBright('No Note Available'));
        return;
    }

    // Get Notes which doesn't satisfy the conditions
    const filteredNotes = notes.filter((note) => note.title !== title);

    if (notes.length > filteredNotes.length) {
        saveNote(filteredNotes);

        console.log(chalk.green.inverse(' Note removed '));

    } else {
        console.log(chalk.red.inverse(' No note found '));

    }


};

// Add a Note
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.filter((note) => note.title === title);
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNote(notes);
        console.log(chalk.green.inverse(' Note added successfully '));

    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }

};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('./notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    } catch (error) {
        console.log(chalk.red('\nError in loading notes..\n'));
        return [];
    }

}

const saveNote = function (note) {
    const noteData = JSON.stringify(note);
    fs.writeFileSync('./notes.json', noteData)
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}