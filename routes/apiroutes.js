const router = require("express").Router();
const action = require("../db/action");

// use to get API Routes (get/post/delete)

//GET
router.get("/notes", function (req, res) {
    action.getNotes().then((notes) => res.json(notes))
});

// POST(CREATE)
router.post("/notes", function (req, res) {
    action.addNote().then((notes) =>res.json(notes))
})

//DELETE - NEED TO FIX
router.delete("/notes", function (req, res) {
    action.deleteNote().then(() => res.json(notes))
})

module.exports = router;