//id's: question answer graphic remaining guessed wins losses 
//
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
	//variable for remaining guesses starts at zero on initialization so that the first act onclick is to advance to the next/first question.
	var remain = 0;
	//var to keep track of correct guesses and compare to number of letters in answer.
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
//END function to initialize game
}

//function to go to Next Question:
function nextQ() {
	j++;
	remain = 5;
	correctGuesses = 0;
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
		$('#answer').empty();
		$("#answer").append(blanksAndSuccesses);
//END function to go to Next Question
}

//initialize(); on load
//
//ON CLICK: 
document.onkeyup = function() {
//		IS THE ROUND OVER? (remain === 0 || correctGuesses === qs.answer.length)
if (remain === 0 || correctGuesses === qs.answer.length) {
//			If YES, then:
//				IS THE GAME OVER?
	         if (losses + wins === qs.question.lenght-1) {
//					If YES, then:
						alert("Game`s over.  Use F5 or refresh to start again.")
	} else {
//					If NO, then:
						nextQ();
//							
	//END of game over NO
	};
//END if round over YES
} else {
//capture the keystroke and convert it to an upper case letter
letGuessed = event.key.toUpperCase();
//add the current guess to the DOM
	$('#guessed').html(letGuessed);
	//declare var.  Check if the guessed letter is in the answer array and if so at what index
var h = jQuery.inArray(letGuessed, qs.answer[j]);//			If NO ,then:
//				DOES THE LETTER MACTCH THE ANSWER?
					if (h > -1) {
//					IF YES, then
						
						alert("Good Guess");
						blanksAndSuccesses[h] = letGuessed;
						// console.log(blanksAndSuccesses);
						$("#answer").empty();
						$("#answer").append(blanksAndSuccesses);
//						-Add the letter to the blank and the DOM
						correctGuesses++;
						console.log(correctGuesses);
//							HAS THE WORD BEEN COMPLETED? 
							if (correctGuesses === blanksAndSuccesses.length) {
//								If YES, then:
								alert("You Win!");
								wins++;
								$('#wins').html(wins);
									} 
//								If NO, then:
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
									//IF NO, then remain--
									//						ARE THE GUESSES USED UP? 
									

								
 
//						

//					
									
//END if round isn't over NO.
};

	
//END document.onkeyup	
};

initialize();
	
//END document.ready function 
});
	
	   
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	