var numSquares = 6;
var colours = [];
var pickedColour;

var squares = document.querySelectorAll(".square");
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

function init() {
	setupButtons();
	setupSquares();
	resetGame();
}

function setupButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy") {
				numSquares = 3;
			} else if(this.textContent === "Hard") {
				numSquares = 6;
			}
			resetGame();
		});
	}
	resetButton.addEventListener("click", function() {
		resetGame();
	});
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		// add initial colours to squares
		squares[i].style.backgroundColor = colours[i];
		// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab colour of clicked square
			var clickedColour = this.style.backgroundColor;
			// compare colour to pickedColour
			if(clickedColour === pickedColour) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function resetGame() {
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;

	resetButton.textContent = "New Colours";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++) {
		if(colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function pickColour() {
	return colours[Math.floor(Math.random() * colours.length)];
}

function changeColours(colour) {
	// loop through all squares
	for(var i = 0; i < squares.length; i++) {
		// change each colour to match given colour
		squares[i].style.backgroundColor = colour;
	}
}

function randomColour() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColours(num) {
	// make an array
	var arr = [];
	// add num random colours to the array
	for(var i = 0; i < num; i++) {
		arr.push(randomColour());
	}
	// return array
	return arr;
}

init();
