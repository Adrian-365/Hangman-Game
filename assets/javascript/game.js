//id's: question answer graphic remaining guessed wins losses 

//ON CLICK: 
//HAS THE GAME STARTED? (j >0)
//	If YES, then:
//		IS THE ROUND OVER? (remain === 0 || correctGuesses === qs.answer.length)
//			If YES, then:
//				IS THE GAME OVER?
//					If YES, then:
//						-alert game over.
//					If NO, then:
//						advace to the next round.
//							-correctGuesses = 0;
//							-remain = 5;
//			If NO ,then:
//				DOES THE LETTER MACTCH THE ANSWER?
//					IF YES, then
//						-Alert "good guess"
//						-Add the letter to the blank and the DOM
//						-correctGuesses++
//							HAS THE WORD BEEN COMPLETED? (correctGuesses === qs.answer.length)
//								If YES, then:
//									-alert("You Win!");
//									-Wins++;
//								If NO, then:
//					IF NO, then remain--
//						ARE THE GUESSES USED UP? (remain === 0).
//							If YES, then:
//								-losses++;
//							If NO, then:			
//	If NO, then initialize();



 
//BEGIN docuent.ready function
$(document).ready(function() {

//create an object with propeties of questions, answers and images
var qs = {
	question: [
	'Press Any Key to Play!', 
	'Q: In which country were the "Spaghetti Western" films created?',
	'Q: In 1966`s "Django" directed by Sergio Corbucci, where does Django keep his guns?',
	'Q: In "For a Few Dollars More" Lee Van Cleef`s character was known as The Man In: ____?',
	'Q: To this day, who is the biggest bad-ass actor in the Sphagetti Western world?',
	'You Lost, hombre. Wanna go again?'	],

	answer: [
	'Press Any Key to Play!',
	'ITALY',
	'COFFIN',
	'BLACK',
	'EASTWOOD',
	'You Lost, hombre. Wanna go again?'	],


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
	],

	taunts: [
	'You Lose, Hombre!',
	'Last chance, Amigo...',
	'Can you feel the noose tightening?',
	'This doesn`t look good...',
	'You can still get out of this, right?',
	'Did you hear what the bet was?  Your life!',
	'You live to fight another day!',
	'Nobody lives forever.',
	'Victory!'
	]
}


// create some global variables
//variable for remaining guesses
var remain = 5;
var correctGuesses = 0;
var wins = 0;
var losses = 0;
//to capture and display the most recent letter guessed
var letGuessed = "_";
//to iterate through the indeces of the question and the answer arrays
var j = 0;

//some other global variables
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

//function to initialize game
function initialize() {
	$('#question').html(qs.question[j]);
	$('#answer').html(qs.answer[j]);
	$('#taunts').html(qs.taunts[remain]);
	$('#graphic').html(qs.pics[remain]);
	$('#remaining').html(remain);
	$('#guessed').html(letGuessed);
	$('#wins').html(wins);
	$('#losses').html(losses);
}

//function to go to Next Question:
function nextQ() {
	j++;
	remain = 5;
	$('#question').html(qs.question[j]);

	$('#taunts').html(qs.taunts[remain]);
	$('#graphic').html(qs.pics[remain]);
	$('#remaining').html(remain);
	$('#guessed').html("Make A Guess");
	$('#wins').html(wins);
	$('#losses').html(losses);


		chosenWord = qs.answer[j];
		lettersInWord = chosenWord.split('');
		numBlanks = lettersInWord.length;
		blanksAndSuccesses = [];
		wrongGuesses = [];
	//create a blank space for each letter of the answer
		for (var i = 0; i < qs.answer[j].length; i++) {
			blanksAndSuccesses.push('_ ');		
    	};
    	//append blanks to the DOM
		$("#answer").append(blanksAndSuccesses);

}



// function to listen for key presses
document.onkeyup = function() {
	//if the game hasn't started, then do this on key press:
    if(j === 0) {
    j++;
   	$('#question').html(qs.question[j]);
	$('#graphic').html(qs.pics[remain]);
	$("#answer").empty();
	letGuessed = "Make your First Guess";
	$('#guessed').html(letGuessed);


		chosenWord = qs.answer[j];
		lettersInWord = chosenWord.split('');
		numBlanks = lettersInWord.length;
		blanksAndSuccesses = [];
		wrongGuesses = [];
	//create a blank space for each letter of the answer
		for (var i = 0; i < qs.answer[j].length; i++) {
			blanksAndSuccesses.push('_ ');		
    	};
    	//append blanks to the DOM
		$("#answer").append(blanksAndSuccesses);
    //END if game hasn't started
    }

    //if j > 0 then game has started then check the letter against the answer
    else  {
    		//capture the keystroke and convert it to an upper case letter
    		letGuessed = event.key.toUpperCase();
    		//add the current guess to the DOM
   			 $('#guessed').html(letGuessed);
   			 //declare var.  Check if the guessed letter is in the answer array and if so at what index
    		var h = jQuery.inArray(letGuessed, qs.answer[j]);
    		
	    		//if h is 0 or greater, then the answer is right 
	    		if (h > -1) {
	    			alert("Good Guess");
	    			blanksAndSuccesses[h] = letGuessed;
	    			// console.log(blanksAndSuccesses);
	    			$("#answer").empty();
	    			$("#answer").append(blanksAndSuccesses);
	    		
	    		} 
				//otherwise the answer is wrong
	    		else {
	    			alert("One Step Close to Death");
	    			remain--;
	    			$('#remaining').html(remain);
	    			$('#graphic').html(qs.pics[remain]);
	    			$('#taunts').html(qs.taunts[remain]);

	    			if (remain === 0) {
	    				losses++;
						$('#losses').html(losses);
						$('#question').html(qs.question[qs.question.length-1]) 
						$("#answer").html('Hit any key to try the next question.  Or use F5 to reset.');

	    			}

	    		}
    //END of the game started function
    	}



    	
    	//END of document onkeyup function
    	};

//call the initialize function
initialize();

//END document.ready function 
});

   















