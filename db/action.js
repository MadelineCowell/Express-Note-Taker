const util = require("util")
const fs = require("fs")
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.watchFile)

// use this to read, write and get notes
// THEN add and delete notes
class Action {

};

module.exports = new Action();
