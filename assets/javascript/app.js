$("document").ready(function() {
  $("button").on("click", function() {
    console.log("test");



var search = $("#search-term").val();

// var beginDate = $("#start-year");
// var endDate = $("#end-year");
// // var search = "california";

var beginDate = "19990101";
var endDate = "20011231";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url +=
  "?" +
  $.param({
    "api-key": "fb822c1a6e0940c8a27b786b8440fa1d",
    'q': search,
    'begin_date': beginDate,
    'end_date': endDate
  });
$.ajax({
  url: url,
  method: "GET"
})
  .then(function(response) {
    var results = response.response.docs;
    console.log(results[0].headline.main);
    $('.article-list').prepend(results[0].headline.main + '<hr> <br>');
  })
  .fail(function(err) {
    throw err;
  });

// $("#submit").on("click", function() {
//   var x = $(search).val();
  console.log(url);
});
});
