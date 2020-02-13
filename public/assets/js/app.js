// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  
    // Display the apropos information on the page
    // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].excerpt + "</p>");
   
  
    
      $("#articles").append(`<div class="mt-5 mb-5 Lobster text-center">
      <h1 style="font-size: 4em">Hip Hop Top Stories</h1>
      <div>`)
      for (let i = 0; i < data.length; i++) {

          $('#articles').append(`
                  <div class="card articleCard mt-4 mb-4" >
                  <div class="card-header">
                  <h5>
                  <a class="text-wrap text-break" id="mainTitle">${data[i].title}</a>
                  <button class="btn btn-success float-right shadow-buttons saveArticle" data-id="${data[i]._id}">Save Article</button>
                  </h5>
                  </div>
                  <div class="card-body">
                  <h5 class="card-title">${data[i].title}</h5>
                  <p class="card-text">${data[i].excerpt}</p>
                
                  </div>
                  </div>
     `)
      }
  })