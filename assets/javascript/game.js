//id's: question answer graphic remaining guessed wins losses 

 

$(document).ready(function() {
//create an array with propeties of questions, answers and images
var qs = {
	question: [
	'Press Any Key to Play!', 
	'In which country were many of the "Sphagetti Westerns" filmed?',
	'In 1966’s "Django" directed by Sergio Corbucci, where does Django keep his guns?',
	'In "For a Few Dollars More" Lee Van Cleef was known as The Man In: what?',
	'To this day, who is the biggest bad-ass in the Sphagetti Western world?',
	'Wanna go again?'	],

	answer: [
	["_"],
	['I', 'T', 'A', 'L', 'Y'],
	['C', 'O', 'F', 'F', 'I', 'N'],
	['B', 'L', 'A', 'C', 'K']
	['E', 'A', 'S', 'T', 'W', 'O', 'O', 'D'],
	['_']	],

	pics: [
	'<img src="./assets/images/hmmm.jpg"/>',
	'<img src="./assets/images/astepUp.jpg"/>',
	'<img src="./assets/images/bfirstSite.jpg"/>',
	'<img src="./assets/images/cnooseOn.jpg"/>',
	'<img src="./assets/images/dgrrk.jpg"/>',
	'<img src="./assets/images/youLose.jpg"/>',
	'<img src="./assets/images/youWin.jpg"/>',
	'<img src="./assets/images/zsorry.jpg"/>',
	'<img src="./assets/images/zWinner.jpg"/>',
	]
}


// guesses remaining =
// wins and losses
var remaining = 5;
var wins = 0;
var losses = 0;
var letGuessed = "_";

//function to initialize game
function initialize() {
	$('#question').html(qs.question[0]);
	$('#answer').html(qs.answer[0]);
	$('#graphic').html(qs.pics[0]);
	$('#remaining').html(remaining);
	$('#guessed').html(letGuessed);
	$('#wins').html(wins);
	$('#losses').html(losses);

}

initialize();
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



 

// listen for key click
// 	if ??? is empty then initialize
// 	if ??? is not empty then check key against answer
// 		if key = one of the answers then display that character
// 		if key != one of the answers then decrease quesses remaining
// 	if guesses remaining = 0 then prompt to start again.






});
