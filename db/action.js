const util = require("util")
const fs = require("fs")
const { response } = require("express")
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.watchFile)

// use this to read, write and get notes
// THEN add and delete notes
class Action {
    //read all notes in db.json
    read() {
        return readFileAsync("db/db.json")
    }
    // write notes
    write(note) {
        return writeFileAsync("db/db.json", note);
    }
    getNotes() {
        const notesCreated = 
        return this.read().then((response) => {

        });
    }
    addNote (note) {
        const{ title, text } = note;
        const newNote = { title, text, id }
        return this.getNotes
    }
    deleteNote(id) {
        return this.getNotes()
        .then(remove) => remove.filter((this.deletedNote) => this.deletedNote.id !== id))
        .then((filterNotes) => this.write(filterNotes))        
    }

};

module.exports = new Action();
