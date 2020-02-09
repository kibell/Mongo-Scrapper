const cherrio = require("cheerio")
const axios = require("axios")

axios.get("https://hiphopdx.com/").then(function(response){

const $ = cherrio.load(response.data)

const results = [];

$("h3.title").each(function(i,element){

const title = $(element).text()
// console.log(title)

results.push({
title: title



})


    })
})