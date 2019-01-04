function randomIntRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
 * TO DO work on smaller screen function
 * return var not direct math.round
 * amke screen selector smaller
 */
var screenWidth = innerWidth;
var screenHeight = innerHeight;
var dimensions = [screenWidth, screenHeight];
// console.log(innerWidth)
// console.log(innerHeight)

function getSize(leng) {
  var fontSize = 0;
  if (screenWidth <= 450) {
    fontSize += Math.round(16.0 - 0.09 * leng * 0.85);
    // fontSize = randomIntRange(8, 14)
    var fontString = fontSize.toString();
    // console.log(fontSize, fontString)
    return fontString;
  } else if (screenWidth <= 600 && screenWidth >= 451) {
    fontSize += Math.round(31.0 - 0.155 * leng);
    var fontString = fontSize.toString();
    // console.log(fontSize, fontString)
    return fontString;
  } else if (screenWidth <= 750 && screenWidth >= 601) {
    fontSize += Math.round(35.0 - 0.15 * leng);
    var fontString = fontSize.toString();
    return fontString;
  } else if (screenWidth <= 1000 && screenWidth >= 751) {
    fontSize = Math.round(33.0 - 0.12 * leng);
    // fontSize = randomIntRange(12, 14)
    var fontString = fontSize.toString();
    // console.log(fontSize, fontString)
    return fontString;
  } else if (screenWidth <= 1200 && screenWidth >= 1001) {
    fontSize = Math.round(61.5 - 0.28 * leng);
    var fontString = fontSize.toString();
    return fontString;
  } else if (screenWidth <= 1600 && screenWidth >= 1201) {
    fontSize = Math.round(40.0 - 0.11 * leng);
    var fontString = fontSize.toString();
    return fontString;
  } else if (screenWidth <= 2000 && screenWidth >= 1601) {
    fontSize = Math.round(92.7 - 0.4 * leng);
    var fontString = fontSize.toString();
    return fontString;
  } else {
    // To Do this function is wrong for large screens
    fontSize = Math.round(92.7 - 0.4 * leng);
    var fontString = fontSize.toString();
    return fontString;
  }
}

var sizeToAdd;
var pixelsDown = [0, 0];
var countRows = 1;

// var quoteAPItwo = "https://quotes.rest/quote/random.json";
var WikiquoteApi = (function() {
  var wqa = {};

  var API_URL = "https://en.wikiquote.org/w/api.php";

  wqa.queryTitles = function(titles, success, error) {
    $.ajax({
      url: API_URL,
      dataType: "jsonp",
      data: {
        format: "json",
        action: "query",
        redirects: "",
        titles: titles
      },

      success: function(result, status) {
        var pages = result.query.pages;
        var pageId = -1;
        for (var p in pages) {
          var page = pages[p];
          if (!("missing" in page)) {
            pageId = page.pageid;
            break;
          }
        }
        if (pageId > 0) {
          success(pageId);
        } else {
          error("No results");
        }
      },

      error: function(xhr, result, status) {
        error("Error processing your query");
      }
    });
  };

  wqa.queryRandomTitle = function(success, error) {
    $.ajax({
      url: API_URL,
      dataType: "jsonp",
      data: {
        format: "json",
        action: "query",
        redirects: "",
        list: "random",
        rnnamespace: "0"
      },

      success: function(result, status) {
        var title = result.query.random[0].title;
        if (title !== undefined) {
          success(title);
        } else {
          error("No results");
        }
      },

      error: function(xhr, result, status) {
        error("Error processing your query");
      }
    });
  };

  wqa.getSectionsForPage = function(pageId, success, error) {
    $.ajax({
      url: API_URL,
      dataType: "jsonp",
      data: {
        format: "json",
        action: "parse",
        prop: "sections",
        pageid: pageId
      },

      success: function(result, status) {
        var sectionArray = [];
        var sections = result.parse.sections;
        for (var s in sections) {
          var splitNum = sections[s].number.split(".");
          if (splitNum.length > 1 && splitNum[0] === "1") {
            sectionArray.push(sections[s].index);
          }
        }
        if (sectionArray.length === 0) {
          sectionArray.push("1");
        }
        success({ titles: result.parse.title, sections: sectionArray });
      },
      error: function(xhr, result, status) {
        error("Error getting sections");
      }
    });
  };

  wqa.getQuotesForSection = function(pageId, sectionIndex, success, error) {
    $.ajax({
      url: API_URL,
      dataType: "jsonp",
      data: {
        format: "json",
        action: "parse",
        noimages: "",
        pageid: pageId,
        section: sectionIndex
      },

      success: function(result, status) {
        var quotes = result.parse.text["*"];
        var quoteArray = [];

        var $lis = $(quotes).find("li:not(li li)");
        $lis.each(function() {
          $(this)
            .children()
            .remove(":not(b)");
          var $bolds = $(this).find("b");

          if ($bolds.length > 0) {
            quoteArray.push($bolds.html());
          } else {
            quoteArray.push($(this).html());
          }
        });
        success({ titles: result.parse.title, quotes: quoteArray });
      },
      error: function(xhr, result, status) {
        error("Error getting quotes");
      }
    });
  };

  wqa.openSearch = function(titles, success, error) {
    $.ajax({
      url: API_URL,
      dataType: "jsonp",
      data: {
        format: "json",
        action: "opensearch",
        namespace: 0,
        suggest: "",
        search: titles
      },

      success: function(result, status) {
        success(result[1]);
      },
      error: function(xhr, result, status) {
        error("Error with opensearch for " + titles);
      }
    });
  };

  wqa.getRandomQuote = function(titles, success, error) {
    var errorFunction = function(msg) {
      error(msg);
    };

    var chooseQuote = function(quotes) {
      var randomNum = Math.floor(Math.random() * quotes.quotes.length);
      success({ titles: quotes.titles, quote: quotes.quotes[randomNum] });
    };

    var getQuotes = function(pageId, sections) {
      var randomNum = Math.floor(Math.random() * sections.sections.length);
      wqa.getQuotesForSection(
        pageId,
        sections.sections[randomNum],
        chooseQuote,
        errorFunction
      );
    };

    var getSections = function(pageId) {
      wqa.getSectionsForPage(
        pageId,
        function(sections) {
          getQuotes(pageId, sections);
        },
        errorFunction
      );
    };

    wqa.queryTitles(titles, getSections, errorFunction);
  };

  wqa.getCompletelyRandomQuote = function(success, error) {
    wqa.queryRandomTitle(function(title) {
      wqa.getRandomQuote(title, success, error);
    }, error);
  };

  wqa.capitalizeString = function(input) {
    var inputArray = input.split(" ");
    var output = [];
    for (s in inputArray) {
      output.push(
        inputArray[s].charAt(0).toUpperCase() + inputArray[s].slice(1)
      );
    }
    return output.join(" ");
  };

  return wqa;
})();

function loadQuotes(howManyRows) {
  //   https://quotesondesign.com/api-v4-0/
  // var quoteAPI = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=?"
  var totalRows = howManyRows;
  // console.log(totalRows);
  // var shortEnough = false;
  // + '?' + Math.round(new Date().getTime() / 1000)
  // https://stackoverflow.com/questions/11456862/get-a-json-file-from-url-and-display?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  for (var currentRow = 1; currentRow <= totalRows; currentRow++) {
    try {
      WikiquoteApi.queryRandomTitle(
        function(title) {
          WikiquoteApi.getRandomQuote(title, function(newQuote) {
            if (newQuote.quote) {
              quote = newQuote.quote.replace(/<(?:.|\n)*?>/gm, "");
              author = newQuote.titles.replace(/<(?:.|\n)*?>/gm, "");
              if (pixelsDown[1] >= dimensions[1]) {
                // console.log("quotes completed");
                return 0;
              }
              var rowNum = countRows.toString();
              var quote = quote + " -- " + author + " --&nbsp;";
              if (quote.length <= 188 && quote.length >= 60) {
                var heightOnPage = pixelsDown.pop();

                sizeToAdd = getSize(quote.length);
                // console.log(sizeToAdd);
                // console.log(quote.length);
                // console.log(sizeToAdd);
                /*
                 * // TO DO replace if countrows odd or even with if ( $().hassClass ) then rows can move right or left randomly instead of every other
                 *    condence .toString() usage
                 */
                if (countRows % 2 == 1) {
                  $("#css").append(
                    ".size" +
                      rowNum +
                      " { font-size: " +
                      sizeToAdd +
                      "px;} @keyframes moveMe-right" +
                      rowNum +
                      " { 0% { transform: translate(0, " +
                      heightOnPage +
                      "px); } 100% { transform: translate(110%, " +
                      heightOnPage +
                      "px); } }"
                  );
                  $("#row" + rowNum).html(quote);
                  // console.log(countRows.toString())

                  $("#row" + rowNum + "b").html(quote);
                } else if (countRows % 2 == 0) {
                  $("#css").append(
                    ".size" +
                      rowNum +
                      " { font-size: " +
                      sizeToAdd +
                      "px;} @keyframes moveMe" +
                      rowNum +
                      " { 0% { transform: translate(0, " +
                      heightOnPage +
                      "px); } 100% { transform: translate(-110%, " +
                      heightOnPage +
                      "px); } }"
                  );
                  $("#row" + rowNum).html(quote);
                  // console.log(countRows.toString())

                  $("#row" + rowNum + "b").html(quote);
                }
                countRows += 1;
                // pixelsDown += parseInt(sizeToAdd);
                heightOnPage += parseInt(sizeToAdd);
                pixelsDown.push(heightOnPage);
                // console.log("row completed")
              } else {
                loadQuotes(1);
              }

              var height = pixelsDown.pop();
              if (height < dimensions[1]) {
                pixelsDown.push(height);
                insert(1);
              }
            }
          });
        },
        function(msg) {
          console.log("message: " + msg);
        }
      );
    } catch (err) {
      console.log("API error message: " + err);
    }
    // $.getJSON(quoteAPItwo, function(data) {
    //   console.log(data);
    //   if (pixelsDown[1] >= dimensions[1]) {
    //     // console.log("quotes completed");
    //     return 0;
    //   }
    //   var rowNum = countRows.toString();
    //   var quote = data.quote + " -- " + data.author + " --&nbsp;";
    //   if (quote.length <= 188 && quote.length >= 60) {
    //     var heightOnPage = pixelsDown.pop();

    //       sizeToAdd = getSize(quote.length);
    //       // console.log(sizeToAdd);
    //       // console.log(quote.length);
    //       // console.log(sizeToAdd);
    //       /*
    //        * // TO DO replace if countrows odd or even with if ( $().hassClass ) then rows can move right or left randomly instead of every other
    //        *    condence .toString() usage
    //        */
    //       if (countRows % 2 == 1) {
    //         $("#css").append(
    //           ".size" +
    //             rowNum +
    //             " { font-size: " +
    //             sizeToAdd +
    //             "px;} @keyframes moveMe-right" +
    //             rowNum +
    //             " { 0% { transform: translate(0, " +
    //             heightOnPage +
    //             "px); } 100% { transform: translate(110%, " +
    //             heightOnPage +
    //             "px); } }"
    //         );
    //         $("#row" + rowNum).html(quote);
    //         // console.log(countRows.toString())

    //         $("#row" + rowNum + "b").html(quote);
    //       } else if (countRows % 2 == 0) {
    //         $("#css").append(
    //           ".size" +
    //             rowNum +
    //             " { font-size: " +
    //             sizeToAdd +
    //             "px;} @keyframes moveMe" +
    //             rowNum +
    //             " { 0% { transform: translate(0, " +
    //             heightOnPage +
    //             "px); } 100% { transform: translate(-110%, " +
    //             heightOnPage +
    //             "px); } }"
    //         );
    //         $("#row" + rowNum).html(quote);
    //         // console.log(countRows.toString())

    //         $("#row" + rowNum + "b").html(quote);
    //       }
    //       countRows += 1;
    //       // pixelsDown += parseInt(sizeToAdd);
    //       heightOnPage += parseInt(sizeToAdd);
    //       pixelsDown.push(heightOnPage);
    //       // console.log("row completed")
    //     } else {
    //       loadQuotes(1);
    //     }
    //   });
  }
  // var height = pixelsDown.pop();
  // if (height < dimensions[1]){
  //   pixelsDown.push(height);
  //   insert(1);
  // }
}
/*
 *
 * TO DO add init for div elements, call next init with previous init
 *
 */
function init(pageRows) {
  for (var rowcount = 1; rowcount <= pageRows; rowcount++) {
    var num = rowcount.toString();
    var bodyDoc = $("#init" + num);
    if (rowcount % 2 == 1) {
      var html =
        "<div class='container-fluid'><span id='row" +
        num +
        "' class='moveMe-right" +
        num +
        " size" +
        num +
        "'></span><span id='row" +
        num +
        "b' class='moveMe-right" +
        num +
        " moveTwo" +
        num +
        "-right size" +
        num +
        "'></span></div>";
      bodyDoc.html(html);
    } else {
      var html =
        "<div class='container-fluid'><span id='row" +
        num +
        "' class='moveMe" +
        num +
        " size" +
        num +
        "'></span><span id='row" +
        num +
        "b' class='moveMe" +
        num +
        " moveTwo" +
        num +
        " size" +
        num +
        "'></span></div>";
      bodyDoc.html(html);
    }
  }
  loadQuotes(pageRows);
}

function initCSS(styleNum) {
  var docStyle = $("#css");
  for (var style = 1; style <= styleNum; style++) {
    var numb = style.toString();
    if (style % 2 == 1) {
      var addStyle =
        ".moveMe-right" +
        numb +
        " { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-right: 100%; animation: moveMe-right" +
        numb +
        " 20s infinite linear; position: absolute; right: 10%; } .moveTwo" +
        numb +
        "-right { animation-delay: 10s; }";
      docStyle.append(addStyle);
    } else {
      var addStyle =
        ".moveMe" +
        numb +
        " { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-left: 100%; animation: moveMe" +
        numb +
        " 26s infinite linear; position: absolute; } .moveTwo" +
        numb +
        "{ animation-delay: 13s; }";
      docStyle.append(addStyle);
    }
  }
}

function initHTML(numOfRows) {
  var quoteBack = $("#quoteBack");
  for (var rows = 1; rows <= numOfRows; rows++) {
    var num = rows.toString();
    var addDiv = "<div id='init" + num + "' class='container-fluid'></div>";
    quoteBack.append(addDiv);
  }
}

function insert(initrows) {
  initHTML(initrows);
  initCSS(initrows);
  init(initrows);
}

var initrows;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  initrows = 90;
} else {
  initrows = 45;
}
insert(initrows);

// .moveMe-right1 { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-right: 100%; animation: moveMe-right1 20s infinite linear; position: absolute; right: 10%; }

// .moveTwo1-right { animation-delay: 10s; }

// .moveMe2 { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-left: 100%; animation: moveMe2 26s infinite linear; position: absolute; } .moveTwo2{ animation-delay: 13s; }

// <div class='container-fluid'><span id='row1' class='moveMe-right1 size1'></span><span id='row1b' class='moveMe-right1 moveTwo1-right size1'></span></div>
// <div class='container-fluid'><span id='row2' class='moveMe2 size2'></span><span id='row2b' class='moveMe2 moveTwo2 size2'></span></div>
// loadQuotes(pageRows);

// document.addEventListener('DOMContentLoaded', function() {
//
// });

// function animate(){
//   requestAnimationFrame(animate);
//   cb.clearRect(0, 0, innerWidth, innerHeight);
//   for (var x = 0; x < quotes.length; x++){
//     quotes[x].update();
//   }
//
// }
// animate();
