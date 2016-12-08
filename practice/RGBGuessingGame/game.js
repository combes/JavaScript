// TODO: Refactor using objects
var numberOfSquares = 6;
var colors = [];
var goalColor;
var resetColor = "#232323";
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
var squares = document.querySelectorAll(".square");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  // Mode button event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  // Add listeners to each square
  for (var i = 0; i < squares.length; i++) {
    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;

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
}

function reset() {
  // Generate all new colors
  colors = generateRandomColors(numberOfSquares);
  // Pick a new random color from array
  goalColor = randomColor();
  // Change colors of squares
  colorDisplay.textContent = goalColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

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
