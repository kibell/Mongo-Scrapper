const cherrio = require("cheerio")
const axios = require("axios")
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = 3000;

// Initialize Express
const app = express();

//configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", {
    useNewUrlParser: true
});




axios.get("https://hiphopdx.com/").then(function (response) {

    const $ = cherrio.load(response.data)

    const results = [];

    $("h3.title").each(function (i, element) {

        const title = $(element).text()
        // console.log(title)

        results.push({
            title: title



        })


    })
})


// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});