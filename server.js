// Dependencies
// ===========================================================
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path")
const PORT = process.env.PORT || 3000;
//ROUTES REQUIRED
const apiRoute = require("./routes/apiroutes");
const htmlRoute = require("./routes/htmlroutes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// var notes = require("./db.json");

app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
