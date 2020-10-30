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
        return readFileAsync("db/db.json", "utf8");
    }
    // creates notes
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes = JSON(notes);
            console.log(parsedNotes);
            return parsedNotes;
        });
    }

    addNote(newNote) {
        // console.log(newNote);
        return this.getNotes().then(notes => {
            const newNotesArr = [...notes, newNote]; 
            console.log(newNotesArr);
            return this.write(newNotesArr);
        });
    }

    deleteNote(id) {
        return this.getNotes()
            .then(remove) => remove.filter((this.deletedNote) => this.deletedNote.id !== id))
        .then((filterNotes) => this.write(filterNotes))
    }

};

module.exports = new Action();
