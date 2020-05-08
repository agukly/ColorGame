var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var pickedColorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")

easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected")
  easyButton.classList.add("selected")
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", function(){
  easyButton.classList.remove("selected")
  hardButton.classList.add("selected")
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  pickedColorDisplay.textContent = pickedColor
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  this.textContent = "New Colours"
  pickedColorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
});

pickedColorDisplay.textContent = pickedColor


  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        changeColors(clickedColor);
        messageDisplay.textContent = "Well done!";
        resetButton.textContent = "Play Again?"
      }
        else {
          this.style.backgroundColor = "white";
          this.style.boxShadow = "none"
          messageDisplay.textContent = "Try Again";
        }
    })
  };


function changeColors(color){
  for(var i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = color
}

function pickColor() {
 var random = Math.floor(Math.random() * colors.length)
 return colors[random]
}

function generateRandomColors(num){
  var arr = [];
  for(i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

