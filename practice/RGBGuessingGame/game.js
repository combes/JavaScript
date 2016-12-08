var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var goalColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetColor = "#232323";
var easyButton = document.querySelector("#easyButton")
var hardButton = document.querySelector("#hardButton")

easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  goalColor = randomColor();
  colorDisplay.textContent = goalColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardButton.addEventListener("click", function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  goalColor = randomColor();
  colorDisplay.textContent = goalColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});
resetButton.addEventListener("click", function() {
  // Generate all new colors
  colors = generateRandomColors(numberOfSquares);
  // Pick a new random color from array
  goalColor = randomColor();
  // Change colors of squares
  colorDisplay.textContent = goalColor;

  for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.background = colors[i]
  }
  h1.style.background = "steelblue";
});

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
  // Add initial colors to squares
  squares[i].style.background = colors[i]

  // Add click listeners to squares
  squares[i].addEventListener("click", function() {
    // Grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor + " ? " + goalColor);

    // Compare color to goalColor
    if (clickedColor === goalColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = resetColor;
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
  var randomNumber =  Math.floor(Math.random() * colors.length)
  return colors[randomNumber];
}

function generateRandomColors(num) {
  // Create an array
  var a = []
  // Add num random colors to array
  for (var i = 0; i < num; i++) {
    a.push(randomTextColor());
  }
  // Return the array
  return a;
}

function randomTextColor() {
  // Pick color red
  var r = Math.floor(Math.random() * 256);
  // Pick color for green
  var g = Math.floor(Math.random() * 256);
  // Pick color for blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
