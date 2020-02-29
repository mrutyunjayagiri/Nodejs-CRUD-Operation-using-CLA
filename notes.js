const fs = require('fs');   // Get FileSystem
const chalk = require('chalk');     // For Styling the console statements: for more info visit=> https://www.npmjs.com/package/chalk


// Get All Notes
const getNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.yellowBright.inverse(' No Note Available '));
        return;
    }

    console.log(chalk.blue.inverse('\n --- My Notes --- \n'));
    notes.forEach((note, index) => {
        console.log("Note No: " + (index + 1));
        console.log(chalk.yellow('Title: ' + note.title + '\nBody: ' + note.body + '\n'));
    })
}

// Read a Note
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.yellow('Title: ' + note.title + '\nBody: ' + note.body + '\n'));

    } else {
        console.log(chalk.red('No Note Found For Title: ' + title + '\n'));

    }

};

// Update a Note
const updateNote = (title, updatedTitle, updatedBody) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        const duplicateNote = notes.find((note) => note.title === updatedTitle);
        if (!duplicateNote) {
            note.title = updatedTitle;
            note.body = updatedBody;
            saveNote(notes);
            console.log(chalk.green.inverse('\n Updated Successfully \n'));

        } else {
            console.log(chalk.red('Update Failed.\nTitle is taken: ' + updatedTitle + '\n'));

        }


    } else {
        console.log(chalk.red('No Note Found For Title: ' + title + '\n'));

    }

};



// Add a Note
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNote(notes);
        console.log(chalk.green.inverse(' Note added successfully '));

    } else {
        console.log(chalk.red.inverse(' Note title is taken '));
    }

};

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

const loadNotes = () => {
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
    readNote: readNote,
    removeNote: removeNote,
    updateNote: updateNote
}