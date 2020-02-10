const cherrio = require("cheerio")
const axios = require("axios")
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const path = require('path');
const exphbs = require("express-handlebars");
// Initialize Express
const router = express()


// Homepage
router.get('/', function (req, res, next) {

    res.render('index', {
    
  
    });
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

        console.log(title)
    })
})
  module.exports = router;