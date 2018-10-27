var currentQuoteLength = 0;

// https://stackoverflow.com/questions/35699577/send-random-quote-with-tweet-button-click-in-jquery?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

function tweet(message) {
  window.open(
    "https://twitter.com/intent/tweet?hashtags= freecodecamp&text=" +
      encodeURIComponent(message)
  );
}

var msg;
function tweetHandler() {
  tweet($("#text").text() + $("#author").text());
}

function getQuote() {
  //   https://quotesondesign.com/api-v4-0/
  //   http://quotes.stormconsultancy.co.uk/api "http://quotes.stormconsultancy.co.uk/quotes/1.json?callback=my_method"
  var quoteAPI =
    "https://quotesondesign.com/wp-json/posts?               filter[orderby]=rand&filter[posts_per_page]=1" +
    "?" +
    Math.round(new Date().getTime() / 1000);
  // console.log("fired");
  $.getJSON(quoteAPI, function(data) {
    console.log(data);
    var quote = data[0].content;
    // console.log(quote.length)
    $("#text").html(quote);
    currentQuoteLength = quote.length;

    if (quote.length > 140) {
      $("#tweet-quote").addClass("noclick");
    } else {
      if ($("#tweet-quote").hasClass("noclick")) {
        $("#tweet-quote").removeClass("noclick");
      }
    }
    if (quote.length > 250) {
      $("#text").addClass("small-text");
    } else {
      if ($("#text").hasClass("small-text")) {
        $("#text").removeClass("small-text");
      }
    }
    if (data[0].title === "") {
      $("#author").html("-- Unkown");
    } else {
      $("#author").html("-- " + data[0].title);
    }
  });
}

$("#new-quote").on("click", function() {
  getQuote();
});

document.addEventListener("DOMContentLoaded", function() {
  getQuote();
});

$("#tweet-quote").on("click", function() {
  tweetHandler();
});
