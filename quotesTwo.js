const heightOfPage = window.innerHeight;
const MAX_QUOTE_INDEX = all_quotes.length;
window.random = false;
const API_TAG =
  '<pre style="word-wrap: break-word; white-space: pre-wrap;">placeholder</pre>';

const detectURI = () => {
  const index = location.href.indexOf("?");
  if (index != -1) {
    const url = location.href.slice(index + 2);
    if (url === "random") {
      const randomQuote = JSON.stringify(
        all_quotes[randomIntRange(0, MAX_QUOTE_INDEX)]
      );
      $("head").empty();
      $("body").empty();
      $("body").append(API_TAG.replace("placeholder", randomQuote));
      window.random = true;
    }
  }
};

detectURI();
function randomIntRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const replaceEach = (startString, searchArray) => {
  let myString = startString;
  searchArray.forEach(value => {
    const reg = new RegExp(value[0], "g");
    myString = myString.replace(reg, value[1]);
  });
  return myString;
};

const getRandomQuoteString = () => {
  const randomIndex = randomIntRange(0, MAX_QUOTE_INDEX);
  const newQuote = all_quotes[randomIndex];
  return newQuote.author + "-- " + newQuote.quote + " --&nbsp;";
};
/*
 * TO DO work on smaller screen function
 * return var not direct math.round
 * amke screen selector smaller
 */
const screenWidth = innerWidth;
const screenHeight = innerHeight;
const dimensions = [screenWidth, screenHeight];
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

window.currentHeight = 0;

window.countRows = 1;

const MOVE_RIGHT_CSS =
  ".sizerowNum { font-size: sizeToAddpx;} @keyframes moveMe-rightrowNum { 0% { transform: translate(0, " +
  "heightOnPagepx); } 100% { transform: translate(110%, heightOnPagepx); } }";
const MOVE_LEFT_CSS =
  ".sizerowNum { font-size: sizeToAddpx;} @keyframes moveMerowNum { 0% { transform: translate(0, " +
  "heightOnPagepx); } 100% { transform: translate(-110%, heightOnPagepx); } }";

function loadQuotes(stopHeight) {
  //   https://quotesondesign.com/api-v4-0/
  // var quoteAPI = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=?"
  // const totalRows = howManyRows;

  // for (var currentRow = 1; currentRow <= totalRows; currentRow++)
  while (currentHeight <= stopHeight + 20) {
    const whichDirection = Math.random() > 0.5 ? "left" : "right";

    const newQuoteString = getRandomQuoteString();

    const quoteLength = newQuoteString.length;

    if (quoteLength <= 188 && quoteLength >= 60) {
      initHTML(countRows);
      initCSS(countRows, whichDirection);
      init(countRows, whichDirection);
      const sizeToAdd = getSize(quoteLength);
      // console.log("currernt height: ", window.currentHeight);
      if (whichDirection == "right") {
        const cssText = replaceEach(MOVE_RIGHT_CSS, [
          ["rowNum", countRows],
          ["sizeToAdd", sizeToAdd],
          ["heightOnPage", window.currentHeight]
        ]);
        $("#css").append(cssText);
        $("#row" + countRows).html(newQuoteString);
        //     // console.log(countRows.toString())
        $("#row" + countRows + "b").html(newQuoteString);
      } else {
        const cssText = replaceEach(MOVE_LEFT_CSS, [
          ["rowNum", countRows],
          ["sizeToAdd", sizeToAdd],
          ["heightOnPage", window.currentHeight]
        ]);
        $("#css").append(cssText);
        $("#row" + countRows).html(newQuoteString);
        //     // console.log(countRows.toString())
        $("#row" + countRows + "b").html(newQuoteString);
      }
      window.countRows += 1;

      window.currentHeight += parseInt(sizeToAdd);
    }
  }
}
/*
 *
 * TO DO add init for div elements, call next init with previous init
 *
 */
const HTML_RIGHT =
  "<div class='container-fluid'><span id='rownum' class='moveMe-rightnum sizenum'></span><span id='row" +
  "numb' class='moveMe-rightnum moveTwonum-right sizenum'></span></div>";
const HTML_LEFT =
  "<div class='container-fluid'><span id='rownum' class='moveMenum sizenum'></span><span id='row" +
  "numb' class='moveMenum  moveTwonum sizenum'></span></div>";

function init(pageRow, whichDirection) {
  // for (var rowcount = 1; rowcount <= pageRows; rowcount++) {
  var num = pageRow.toString();
  var bodyDoc = $("#init" + num);
  if (whichDirection == "right") {
    const htmlForRight = replaceEach(HTML_RIGHT, [["num", num]]);
    bodyDoc.html(htmlForRight);
  } else {
    const htmlForLeft = replaceEach(HTML_LEFT, [["num", num]]);
    bodyDoc.html(htmlForLeft);
  }
  // }
}
const RIGHT_STYLE =
  ".moveMe-rightnumb" +
  " { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-right: 100%; animation: moveMe-right" +
  "numb 20s infinite linear; position: absolute; right: 10%; } .moveTwonumb-right { animation-delay: 10s; }";
const LEFT_STYLE =
  ".moveMenumb" +
  " { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-left: 100%; animation: moveMe" +
  "numb 26s infinite linear; position: absolute; } .moveTwonumb{ animation-delay: 13s; }";

function initCSS(styleNum, whichDirection) {
  var docStyle = $("#css");
  // for (var style = 1; style <= styleNum; style++) {
  var numb = styleNum.toString();
  if (whichDirection == "right") {
    const addStyle = replaceEach(RIGHT_STYLE, [["numb", numb]]);
    docStyle.append(addStyle);
  } else {
    const addStyle = replaceEach(LEFT_STYLE, [["numb", numb]]);
    docStyle.append(addStyle);
  }
  // }
}

function initHTML(numOfRows) {
  var quoteBack = $("#quoteBack");
  // for (var rows = 1; rows <= numOfRows; rows++) {
  var num = numOfRows.toString();
  var addDiv = "<div id='init" + num + "' class='container-fluid'></div>";
  quoteBack.append(addDiv);
  // }
}

function insert(initrows) {}

var initrows;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  initrows = 45;
} else {
  initrows = 25;
}
// insert(initrows);
if (!window.random) {
  loadQuotes(heightOfPage);
}
