const cherrio = require("cheerio")
const axios = require("axios")
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3000;
const path = require('path');
const exphbs = require("express-handlebars");
const router = require('./controller/hipHopController')

// Initialize Express
const app = express();
app.use(router)
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));


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
mongoose.connect("mongodb://localhost/hiphopdb", {
    useNewUrlParser: true
});



  
  
 




// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});