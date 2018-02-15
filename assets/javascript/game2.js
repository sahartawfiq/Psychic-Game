var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var check;
var yourGuesses= [];
var j= 0
// Generate the computer pick by generating a random index of the alphabet array
var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("computer pick  " + computerPick);
//Function to perform the comparison trigered by the user's key releasing
document.onkeyup = function(event) {
	var useKey= event.key;
	var userGuess= userKey.toLowerCase();
	//	check whether the key is an alphabet by the value of check
    check= 0;
	for (var i = 0; i < (alphabet.length) - 1; i++) {
		if (userGuess === alphabet[i]) {
			check= 1;
		}
		} 
	if (check == 1){				
		guessesLeft--;
		var gl= document.getElementById("guessl");
		gl.innerHTML= ("Guesses Left: " + guessesLeft);
 //  Add the user guess to an array (yourGuesses) 
		yourGuesses.push(userGuess);
		console.log(yourGuesses)
	
		if (userGuess === computerPick) {
			alert( "you won!!!");
			wins++;
			guessesLeft= 9;
				yourGuesses =[];
				var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
				console.log("computer pick  " + computerPick);
			}
			

// In case no mmore attempts are available
			else if (guessesLeft===0) {
					losses++;
					yourGuesses= [];
					guessesLeft= 9;
					alert("Game lost");
					computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
					console.log("Computer Pick" + computerPick);
					console.log("Guesses Left" + guessesLeft)
				}	
			}
			else {
				alert ("Not an alphabet!!");
			}
		var yg= document.getElementById("uGuess");	
		yg.innerHTML= ("Your Guesses so far: " + yourGuesses + " ");
		
		var wi = document.getElementById("w");
		wi.innerHTML= ("Wins: "+ wins)
		var lo= document.getElementById("l");
		lo.innerHTML= ("Losses: " + losses);	 
	}
	
	

				


