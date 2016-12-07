var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]
var squares = document.querySelectorAll(".square");
var goalColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
  // Add initial colors to squares
  squares[i].style.background = colors[i]

  // Add click listeners to squares
  squares[i].addEventListener("click", function() {
    // Grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // Compare color to goalColor
    if (clickedColor === goalColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  // Loop through all squares
  for (var i = 0; i < colors.length; i++) {
    // Change each color to match given color
    squares[i].style.background = color;
  }
}

function randomColor() {
  var randomNumber =  Math.floor(Math.random() * colors.length + 1)
  return colors[randomNumber];
}
