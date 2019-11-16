const heightOfPage = window.innerHeight;
const MAX_QUOTE_INDEX = all_quotes.length;

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
  try {
    return newQuote.author + "-- " + newQuote.quote + " --&nbsp;";
  } catch (err) {
    return getRandomQuoteString();
  }
};
/*
 * TO DO work on smaller screen function
 * return var not direct math.round
 * amke screen selector smaller
 */
const screenWidth = innerWidth;
const screenHeight = innerHeight;
const dimensions = [screenWidth, screenHeight];

// getSize takes in a length (leng) which will be the length of the quote strong
// and the output is the font size that the string should be so that it does not overlap
// with itself as the string wraps around the string but as large as it can be without doing so.
const getSize = leng => {
  let fontSize = 0;

  if (screenWidth <= 450) {
    return Math.round(16.0 - 0.09 * leng * 0.85).toString();
  } else if (screenWidth <= 600 && screenWidth >= 451) {
    return Math.round(31.0 - 0.155 * leng).toString();
  } else if (screenWidth <= 750 && screenWidth >= 601) {
    return Math.round(35.0 - 0.15 * leng).toString();
  } else if (screenWidth <= 1000 && screenWidth >= 751) {
    return Math.round(33.0 - 0.12 * leng).toString();
  } else if (screenWidth <= 1200 && screenWidth >= 1001) {
    return Math.round(61.5 - 0.28 * leng).toString();
  } else if (screenWidth <= 1600 && screenWidth >= 1201) {
    return Math.round(40.0 - 0.11 * leng).toString();
  } else if (screenWidth <= 2000 && screenWidth >= 1601) {
    return Math.round(91 - 0.4 * leng).toString();
  } else {
    return Math.round(94 - 0.35 * leng).toString();
  }
};

window.currentHeight = 0;

window.countRows = 1;

const MOVE_RIGHT_CSS =
  ".sizerowNum { font-size: sizeToAddpx;} @keyframes moveMe-rightrowNum { 0% { transform: translate(0, " +
  "heightOnPagepx); } 100% { transform: translate(110%, heightOnPagepx); } }";
const MOVE_LEFT_CSS =
  ".sizerowNum { font-size: sizeToAddpx;} @keyframes moveMerowNum { 0% { transform: translate(0, " +
  "heightOnPagepx); } 100% { transform: translate(-110%, heightOnPagepx); } }";

const loadQuotes = stopHeight => {
  while (currentHeight <= stopHeight + 20) {
    const whichDirection = Math.random() > 0.5 ? "left" : "right";
    const newQuoteString = getRandomQuoteString();
    const quoteLength = newQuoteString.length;

    if (quoteLength <= 188 && quoteLength >= 60) {
      initHTML(countRows);
      initCSS(countRows, whichDirection);
      init(countRows, whichDirection);
      const sizeToAdd = getSize(quoteLength);

      if (whichDirection == "right") {
        const cssText = replaceEach(MOVE_RIGHT_CSS, [
          ["rowNum", countRows],
          ["sizeToAdd", sizeToAdd],
          ["heightOnPage", window.currentHeight]
        ]);
        $("#css").append(cssText);
        $("#row" + countRows).html(newQuoteString);

        $("#row" + countRows + "b").html(newQuoteString);
      } else {
        const cssText = replaceEach(MOVE_LEFT_CSS, [
          ["rowNum", countRows],
          ["sizeToAdd", sizeToAdd],
          ["heightOnPage", window.currentHeight]
        ]);
        $("#css").append(cssText);
        $("#row" + countRows).html(newQuoteString);

        $("#row" + countRows + "b").html(newQuoteString);
      }
      window.countRows += 1;

      window.currentHeight += parseInt(sizeToAdd);
    }
  }
};
/*
 * TO DO add init for div elements, call next init with previous init
 */
const HTML_RIGHT =
  "<div class='container-fluid'><span id='rownum' class='moveMe-rightnum sizenum'></span><span id='row" +
  "numb' class='moveMe-rightnum moveTwonum-right sizenum'></span></div>";
const HTML_LEFT =
  "<div class='container-fluid'><span id='rownum' class='moveMenum sizenum'></span><span id='row" +
  "numb' class='moveMenum  moveTwonum sizenum'></span></div>";

const init = (pageRow, whichDirection) => {
  var num = pageRow.toString();
  var bodyDoc = $("#init" + num);
  if (whichDirection == "right") {
    const htmlForRight = replaceEach(HTML_RIGHT, [["num", num]]);
    bodyDoc.html(htmlForRight);
    return;
  }
  const htmlForLeft = replaceEach(HTML_LEFT, [["num", num]]);
  bodyDoc.html(htmlForLeft);
};

const RIGHT_STYLE =
  ".moveMe-rightnumb" +
  " { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-right: 100%; animation: moveMe-right" +
  "numb seconds1s infinite linear; position: absolute; right: 10%; } .moveTwonumb-right { animation-delay: seconds2s; }";
const LEFT_STYLE =
  ".moveMenumb" +
  " { margin: 0 auto; white-space: nowrap; display: inline-block; overflow: hidden; padding-left: 100%; animation: moveMe" +
  "numb seconds1s infinite linear; position: absolute; } .moveTwonumb{ animation-delay: seconds2s; }";

const initCSS = (styleNum, whichDirection) => {
  var docStyle = $("#css");
  // for (var style = 1; style <= styleNum; style++) {
  var numb = styleNum.toString();
  let randomSeconds = randomIntRange(20, 50);
  if (randomSeconds % 2 == 1) {
    randomSeconds++;
  }
  const random2 = Math.floor(randomSeconds / 2);
  if (whichDirection == "right") {
    const addStyle = replaceEach(RIGHT_STYLE, [
      ["numb", numb],
      ["seconds1", randomSeconds],
      ["seconds2", random2]
    ]);
    docStyle.append(addStyle);
  } else {
    const addStyle = replaceEach(LEFT_STYLE, [
      ["numb", numb],
      ["seconds1", randomSeconds],
      ["seconds2", random2]
    ]);
    docStyle.append(addStyle);
  }
  // }
};

const initHTML = numOfRows => {
  const quoteBack = $("#quoteBack");
  const num = numOfRows.toString();
  const addDiv = "<div id='init" + num + "' class='container-fluid'></div>";
  quoteBack.append(addDiv);
};

if (!window.random) {
  loadQuotes(heightOfPage);
}
