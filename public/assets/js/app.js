// Grab the articles as a json
$(document).ready(scrape());
function scrape () { 

$.getJSON("/articles", function(data) {
  // For each one
  // console.log(" yyerp" + data[1].title)
    // Display the apropos information on the page
  
      $("#articles").append(`<div class="mt-5 mb-5 Lo">
      <h1 style="font-size: 4em; text-align: center">Hip Hop Top Stories </h1> 
      <div>`)
      for (let i = 0; i < data.length; i++) {
            
        
        $("articles").empty();
          $('#articles').append(`
                  <div class="card articleCard mt-4 mb-4" >
                  <div class="card-header">
                  <h5 >
                  <a id="mainTitle" >${data[i].title}</a>
                  <button class="btn btn-success float-right shadow-buttons saveArticle" data-id="${data[i]._id}">Save Article</button>
                  </h5>
                  </div>
                  <div class="card-body">
                  <h5 class="card-title">${data[i].title}</h5>
                  <p class="card-text">${data[i].excerpt}</p>
                  <img src="${data[i].image}">
                  <a href = "https://hiphopdx.com${data[i].link}" style = "float: right; font-weight:bolder"> View Article</a>
                
                  </div>
                  </div>
     `)
      }
  })
}