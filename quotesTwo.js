var canvas = document.getElementById('map-canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cb = canvas.getContext('2d');

function randomIntRange(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var quotes = [];
var sizes = [];
var fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Times', 'Courier New', 'Courier', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Terbuchet MS', 'Arial Black', 'Impact'];
var fontCount = 0;

function Quote(quote, author, font){
  this.text = quote;
  this.author = author;
  this.size = '14px';
  this.font = font;
  this.color = 'black';

  this.draw = function(){
     cb.font = this.size + ' ' + this.font;
     cb.fillStyle = this.color;
     cb.fillText(this.text + this.author, innerWidth/2, innerHeight/2)
  }
  this.update = function(){
    this.draw();
  }
}

function getQuote(){
//   https://quotesondesign.com/api-v4-0/
  // var quoteAPI = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=?"
  var quoteAPItwo = "https://talaikis.com/api/quotes/random/"
  var fontIndex = fontCount % fonts.length;
  // + '?' + Math.round(new Date().getTime() / 1000)
  // https://stackoverflow.com/questions/11456862/get-a-json-file-from-url-and-display?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

  $.getJSON(quoteAPItwo, function(data){

    quotes.push(new Quote(data.quote, data.author, fonts[fontIndex]));
  });
  fontCount += 1;
}

for (var i = 0; i < 10; i++){
  getQuote();
}

function animate(){
  requestAnimationFrame(animate);
  if (quotes[0] != undefined){
    quotes[0].update();
  }

}
animate();
