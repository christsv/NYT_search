// you need this or it WILL not run the funciton when you click it!!!
$(document).ready(function() {

var clear = function() {
    $("#article-section").empty();
    document.getElementById('keyword').value = "";
}





$("#search-button").on("click", function(event){

    event.preventDefault();
    clear();
//#form option:selected takes the string selected in the form-control box
    var numArticles = $("#form option:selected").val().trim();
    var numIntArticles = parseInt(numArticles);

    var searched = $("#keyword").val();

    console.log(searched);
    for ( var i = 0; i < numIntArticles; i++){
        var articleDiv = $("<div>");
        var p = $("<p>").text("testing");
        articleDiv.append(p);
        $("#article-section").append(articleDiv);
    }

  
});



});
