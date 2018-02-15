var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins= 0;
var losses= 0;
var guessesLeft= 9;
// A variable to check if the user key is a letter
var check;
// an array to hold user's guesses
var yourGuesses= [];
// Generate the computer pick by generating a random index of the alphabet array
var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
// Check the computer pick
console.log("computer pick  " + computerPick);
//Function to perform the comparison trigered by the user's key releasing
document.onkeyup = function(event) {
// assign userGuess value based on the key and change to lower case
	var userKey= event.key;
	var userGuess= userKey.toLowerCase();
	console.log("user guess:" + userGuess);
// if the key is an element in the alphabrt array and not yet one of the usere's guesses
// Reduce the guesses left by 1
// Add the user guess to the user guesses array 
	if (alphabet.indexOf(userGuess)>= 0 && (yourGuesses.indexOf(userGuess)< 0)){
		yourGuesses.push(userGuess);
		guessesLeft--;
		console.log(yourGuesses);
	}
	if (userGuess == computerPick) {
		console.log(userGuess + " and"  + "  " + computerPick);
		alert( "you won!!!");
		wins++;
		guessesLeft= 9;
		yourGuesses =[];
		computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Computer Pick  " + "  " +computerPick);
	}			
		if ((userGuess !== computerPick) && (guessesLeft===0)){
			console.log(userGuess + " and"  +  "  " +computerPick);
			// console.log("Guesses Left  " + guessesLeft)
// In case no mmore attempts are available
			losses++;				
			yourGuesses= [];
			guessesLeft= 9;
			alert("Game lost");
			computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("Computer Pick  " + computerPick);
		}	
		var yg= document.getElementById("uGuess");
		yg.innerHTML= ("Your Guesses so far: " + yourGuesses);
		var gl= document.getElementById("guessl");
		gl.innerHTML= ("Guesses Left: " + guessesLeft);
		var wi = document.getElementById("w");
		wi.innerHTML= ("Wins: "+ wins);
		var lo= document.getElementById("l");
		lo.innerHTML= ("Losses: " + losses);	 
	}

	



