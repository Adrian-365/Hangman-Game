//id's: question answer graphic remaining guessed wins losses 
$(document).ready(function() {



// guesses remaining =
// wins and losses
var remaining
var wins
var losses

//function to initialize game
// function to start the game
//funtion to play the next qustion
//function to start all over after max win or max loss, reset initialize



// If guesses remaining = 0 then you lose.
if(remaining = 0) {
	$("#answer").html("<h1>You Lose !!<h1>");
	$("#graphic").html("<img scr = './assets/images/youLose'>");
	}


// questions and answers, arranged as objects with the answer being an array.  
// Blanks as an array as well.

// initialQ: "Press any Key to Play", answer: (none), img: hmmm.jpg
// q1
// q2
// q3
// q4
// lastQ: "Wanto to Play Again? Press any Key", answer: (none), img: lookThru.jpg

var qs = {
	question: [
	'Press Any Key to Play!', 
	'In which country were many of the "Sphagetti Westerns" filmed?',
	'In 1966’s "Django" directed by Sergio Corbucci, where does Django keep his guns?',
	'In "For a Few Dollars More" Lee Van Cleef was known as The Man In: what?',
	'To this day, who is the biggest bad-ass in the Sphagetti Western world?',
	'Wanna go again?'	],

	answer: [
	[""],
	['I', 'T', 'A', 'L', 'Y'],
	['C', 'O', 'F', 'F', 'I', 'N'],
	['B', 'L', 'A', 'C', 'K']
	['E', 'A', 'S', 'T', 'W', 'O', 'O', 'D'],
	['']	]
}


 

// listen for key click
// 	if ??? is empty then initialize
// 	if ??? is not empty then check key against answer
// 		if key = one of the answers then display that character
// 		if key != one of the answers then decrease quesses remaining
// 	if guesses remaining = 0 then prompt to start again.






}