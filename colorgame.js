// Main Variables
var numSquares = 6;
var colors = [];
var pickedColor;

//Main Selectors
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


// Main Functions

init();

function init(){
	// mode button event listeners
  setupModeButtons();
  setupSquares();
reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
	  modeButtons[0].classList.remove("selected");
	  modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      // Alternate Conditional - can change the line below to add a medium or hard level
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

      reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to the picked color 
		if(clickedColor === pickedColor){
		    messageDisplay.textContent = "You Got It!";
		    resetButton.textContent = "Play Again?"
		    changeColors(clickedColor);
		    h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!"
		}

	});
}
}


function reset(){
	//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messageDisplay.textContent = " ";
//change colors of the squares on the page
for(var i = 0; i < squares.length; i++){
	if(colors[i]){
	squares[i].style.display = "block";	
	squares[i].style.background = colors[i];
} else {
	squares[i].style.display = "none";
}
}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
reset();
});


function changeColors(color){
//loop through squares 
for(var i = 0; i < squares.length; i++){
 //change each color to match a given color
 squares[i].style.background = color;
}
}

function pickColor(){
 //pick a random number in the array
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
//make an array 
var arr = [];
//repeat num times
	for(var i = 0; i < num; i++){
	//get random color and push into the arr
	arr.push(randomColor());
	}
//return the arr at the very end
return arr;
}

function randomColor(){
	//pick a red color from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green color from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue color from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}