const cherrio = require("cheerio")
const axios = require("axios")
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("../models")

const path = require('path');
const exphbs = require("express-handlebars");
// Initialize Express
const router = express()


// Homepage
router.get('/', function (req, res, next) {

    res.render('index', {
    
  
    });
  });




  router.get('/scrape', function (req, res) {

  axios.get("https://hiphopdx.com/").then(function (response) {

    const $ = cherrio.load(response.data)
    
  
         $("a.single").each(function (i, element) {
        
         const results = [];

        const title = $(element).children("h3").text()
        const excerpt = $(element).children("p.excerpt").text()
       
             results.push({
                title: title ,
                excerpt: excerpt  
             })    
             
         
         db.Article.create(results)
         .then(function(dbArticle) {
           // View the added result in the console
           console.log(dbArticle);
         })
         .catch(function(err) {
           // If an error occurred, log it
           console.log(err);
         });
         
         });  
     res.send("Scrape Complete");   
  })
  });

  router.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  module.exports = router;