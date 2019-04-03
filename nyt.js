// you need this or it WILL not run the funciton when you click it!!!
$(document).ready(function() {

var clear = function() {
    $("#article-section").empty();
    
}





$("#search-button").on("click", function(event){

    event.preventDefault();
    clear();
//#form option:selected takes the string selected in the form-control box
    var numArticles = $("#form option:selected").val().trim();
    var numIntArticles = parseInt(numArticles);

    var searched = $("#keyword").val();

    console.log(searched);


    var APIkey = "gKG7mZSCUAzBbtpMtwg1PZT5GJubSsCA"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searched + "&api-key=" + APIkey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var article = response.response;
        console.log(article.docs[0]);

        for ( var i = 0; i < numIntArticles; i++){

            var articleDiv = $("<div>");
            var list = $("<ul>");
            list.addClass("list-group");
            var p = $("<li>").text((i + 1) + " " + article.docs[i].headline.main).addClass("list-group-item");
            var author = p.append("<br>" + article.docs[i].byline.original).append("<br> Section Name: " + article.docs[i].section_name);
            var date = author.append("<br>" + article.docs[i].pub_date);
            var webURL = date.append("<br>" + "<a href='" + article.docs[i].web_url + "'>" + article.docs[i].web_url + "</a>");
            
            articleDiv.append(list).append(author).append(date).append(webURL);

            
            $("#article-section").append(articleDiv);
        }
        

    });
  
});


});
