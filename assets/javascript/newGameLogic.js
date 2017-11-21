//id's: question answer graphic remaining guessed wins losses 

//BEGIN docuent.ready function
$(document).ready(function() {

//an array of questions
var qList =  [
	'Press Any Key to Play!', 
	'Q: In which country were the "Spaghetti Western" films created?',
	'Q: In 1966`s "Django" directed by Sergio Corbucci, where does Django keep his guns?',
	'Q: In "For a Few Dollars More" Lee Van Cleef`s character was known as The Man In: ____?',
	'Q: To this day, who is the biggest bad-ass actor in the Sphagetti Western world?',
	'You Lost, hombre. Wanna go again?'];

//ar arry of answers correpsonding to the above questions.
var wordList = ["_", "italy", "coffin", "black", "eastwood", "_"];

//an array of pics
	pics: [
	'<img src="./assets/images/youLose.jpg"/>',
	'<img src="./assets/images/dgrrk.jpg"/>',
	'<img src="./assets/images/cnooseOn.jpg"/>',
	'<img src="./assets/images/bfirstSite.jpg"/>',
	'<img src="./assets/images/astepUp.jpg"/>',
	'<img src="./assets/images/hmmm.jpg"/>',	
	'<img src="./assets/images/youWin.jpg"/>',
	'<img src="./assets/images/zsorry.jpg"/>',
	'<img src="./assets/images/zWinner.jpg"/>',
	]

	taunts: [
	'You Lose, Hombre!',
	'Last chance, Amigo...',
	'Can you feel the noose tightening?',
	'This doesn`t look good...',
	'You can still get out of this, right?',
	'hmmm',
	'You live to fight another day!',
	'Nobody lives forever.',
	'Victory!'
	]



	

var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var wins = 0;
var losses = 0;
var remain = 5;
var choice = 0

function startGame() {

	remain = 5;
	chosenWord = wordList[0];
	lettersInWord = chosenWord.split('');
	numBlanks = lettersInWord.length;
	blanksAndSuccesses = [];
	wrongGuesses = [];

	for (var i = 0; i<numBlanks; i++) {
		blanksAndSuccesses.push('_');
		
	}

	document.getElementById('#remaining').innerHTML = remain;

}


//END document.ready function
	});
