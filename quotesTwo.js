var canvas = document.getElementById('map-canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cb = canvas.getContext('2d');

function randomIntRange(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var quotes = [];
var sizes = ['22px', '24px', '26px', '28px', '30px', '32px', '34px', '36px', '38px', '40px'];
var sizesLength = sizes.length - 1;
var fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Times', 'Courier New', 'Courier', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Terbuchet MS', 'Arial Black', 'Impact'];
var fontsLength = fonts.length - 1;
var pageHeight = 0;

function Quote(quote, author, font, size, x, y, speed){
  this.text = quote + ' --' + author;
  // this.author = author;
  this.size = size;
  this.font = font;
  this.color = 'grey';
  this.dx = speed;
  this.y = y;
  this.x = x;
  this.length = cb.measureText(this.text).width;

  this.draw = function(){
     cb.font = this.size + ' ' + this.font;
     cb.fillStyle = this.color;
     cb.fillText(this.text, this.x, this.y)
  }
  this.update = function(){
    if (this.x > innerWidth){
      this.x = 0 - this.length*2;
    }
    this.x += this.dx;
    this.draw();
  }
}

function getQuote(){
//   https://quotesondesign.com/api-v4-0/
  // var quoteAPI = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=?"
  var quoteAPItwo = "https://talaikis.com/api/quotes/random/"

  // + '?' + Math.round(new Date().getTime() / 1000)
  // https://stackoverflow.com/questions/11456862/get-a-json-file-from-url-and-display?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

  $.getJSON(quoteAPItwo, function(data){
    var fontIndex = randomIntRange(0, fontsLength);
    var sizeIndex = randomIntRange(0, sizesLength);
    var addToPage = parseInt(sizes[sizeIndex].slice(0, 2));
    var xPosition = randomIntRange(-600, 200)
    var speed = (Math.random() + 0.2) * 2;
    pageHeight += addToPage;
    if (pageHeight <= innerHeight){
      quotes.push(new Quote(data.quote, data.author, fonts[fontIndex], sizes[sizeIndex], xPosition, pageHeight, speed));
    }


  });

}

for (var i = 0; i < 30; i++){
  getQuote();
}

function animate(){
  requestAnimationFrame(animate);
  cb.clearRect(0, 0, innerWidth, innerHeight);
  for (var x = 0; x < quotes.length; x++){
    quotes[x].update();
  }

}
animate();
