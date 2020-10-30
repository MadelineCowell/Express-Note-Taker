const path = require("path");
const router = require("express").Router();

//JOIN NOTES PATH
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//JOIN CATCHALL PATH AND INDEX
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;