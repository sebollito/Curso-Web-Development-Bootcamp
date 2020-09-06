let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //add event listeners to mode buttons
  setupModeButtons();
  //add event listeners to squares
  setupSquares();
  //updates page to default values
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //figure out how many squares to show
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      //generate new colors, pick a new pickedColor and update page to reflect changes
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      //grab color of the square that was clicked
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //update message display
  messageDisplay.textContent = "";
  //update text in reset button
  resetButton.textContent = "New Colors";
  //change color of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

//add event listener to reset button
resetButton.addEventListener("click", reset);

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    //change each color to match pickedColor
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //pick a random number
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //repeat num times
  for (let i = 0; i < num; i++) {
    //get a random color and push it into the array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //pick a red from 0 to 255
  let r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  let g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
