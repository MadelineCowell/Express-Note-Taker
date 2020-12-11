// Dependencies
// ===========================================================
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path")
const db = require("./db/db.json");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTES REQUIRED
const apiRoute = require("./routes/apiroutes");
const htmlRoute = require("./routes/htmlroutes");

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

// GET
app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data)
        res.json(notes)
        console.log(notes);
    })
})

// POST
app.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), function (err, data) {
        if (err) throw err;
        const noteObj = JSON.parse(data);
        const note = req.body;
        note.id = uuid.v1();
        noteObj.push(note);

        const noteString = JSON.stringify(noteObj);
        fs.writeFile(path.join(__dirname, "/db/db.json"), noteString, function (err) {
            if (err) throw err;
            res.json(req.body)
        })
    })
})

// DELETE
app.delete("/api/notes/:id", function (req, res) {
    const noteId = req.params.id;
    fs.readFile(path.join(__dirname, "/db/db.json"), function (err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        const deleteNote = notes.filter((noteObj) => noteObj.id !== noteId)
        fs.writeFile("./db/db.json", JSON.stringify(deleteNote), function (err) {
            if (err) {
                console.log(err);
                res.status(500).end();
            }
            res.json(deleteNote)
        })
    })
})

app.get("*", function (req, res){
    res.redirect("/")
})

app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
