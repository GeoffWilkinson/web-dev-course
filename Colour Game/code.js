var numSquares = 6;
var squares = document.querySelectorAll(".square");

var colours = generateRandomColours(numSquares);
var pickedColour = pickColour();

var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function() {
	// generate new colours
	colours = generateRandomColours(numSquares);
	// pick a new random colour from the array
	pickedColour = pickColour();
	// change colour display to match picked colour
	colourDisplay.textContent = pickedColour;
	// change colours of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
	}
	// reset the menu
	resetButton.textContent = "New Colours";
	h1.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";
});

easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++) {
		if(colours[i]) {
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colours";
	h1.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";
});

hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = "block";
	}
	resetButton.textContent = "New Colours";
	h1.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";
});

colourDisplay.textContent = pickedColour;

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
	})
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
