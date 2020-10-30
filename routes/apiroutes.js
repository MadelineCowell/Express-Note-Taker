const router = require("express").Router();
const action = require("../db/action");

// use to get API Routes (get/post/delete)

router.get("/notes", function (req, res) {
    action.getNotes().then((notes) => res.json(notes))
});

router.post("/notes", function (req, res) {
    action.addNote().then((notes) =>res.json(notes))
})

router.delete("/notes", function (req, res))

module.exports = router;