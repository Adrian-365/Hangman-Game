//id's: question answer graphic remaining guessed wins losses 

 

$(document).ready(function() {
//create an array with propeties of questions, answers and images
var qs = {
	question: [
	'Press Any Key to Play!', 
	'Q: In which country were the "Spaghetti Western" films created?',
	'Q: In 1966’s "Django" directed by Sergio Corbucci, where does Django keep his guns?',
	'Q: In "For a Few Dollars More" Lee Van Cleef’s character was known as The Man In: ____?',
	'Q: To this day, who is the biggest bad-ass actor in the Sphagetti Western world?',
	'You Lost, hombre. Wanna go again?'	],

	answer: [
	['_'],
	['I', 'T', 'A', 'L', 'Y'],
	['C', 'O', 'F', 'F', 'I', 'N'],
	['B', 'L', 'A', 'C', 'K']
	['E', 'A', 'S', 'T', 'W', 'O', 'O', 'D'],
	['_']	],

	// blank: [
	// ['_ '],
	// ['ANSWER: ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '],
	// ['ANSWER: ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '],
	// ['ANSWER: ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ']
	// ['ANSWER: ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '],
	// ['ANSWER: ', '_ ']	],

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
}


// guesses remaining =
// wins and losses
var remain = 5;
var wins = 0;
var losses = 0;
var letGuessed = "_";

//function to initialize game
function initialize() {
	$('#question').html(qs.question[0]);
	$('#answer').html(qs.question[0]);
	$('#graphic').html(qs.pics[5]);
	$('#remaining').html(remain);
	$('#guessed').html(letGuessed);
	$('#wins').html(wins);
	$('#losses').html(losses);

}


// function to start the game
document.onkeyup = function() {
    if(letGuessed === "_") {
  	var j = 1;
 	$('#question').html(qs.question[j]);
	$('#graphic').html(qs.pics[5]);
	$("#answer").empty()
	letGuessed = "Make your First Guess";
	$('#guessed').html(letGuessed);

//create a blank space for each letter of the answer
		for (var i = 0; i < qs.answer[j].length; i++) {
		var blankSpace = $("<div>_</div>");
		blankSpace.attr("data-index", qs.answer[j]);
		$("#answer").append(blankSpace);
    	};
	
    }

    else if (remain !=0) {
	letGuessed = event.key.toUpperCase();
    $('#guessed').html(letGuessed);
    	var j = 1;
    	var h = jQuery.inArray(letGuessed, qs.answer[j])
    	if (h > -1) {
    	alert("Good Guess")

    	}
    	else {
    	alert("One Step Close to Death");
    	remain--;
    	$('#remaining').html(remain);
    	$('#graphic').html(qs.pics[remain]);

			if (remain === 0) {
			losses++;
			$('#losses').html(losses);
			$('#question').html(qs.question[qs.question.length-1])
			$("#answer").html('Hit any key to try the next question.  Or use F5 to reset.');
			}

    	}

    	// if(remain = 0) {
    	// 	alert("You Lose!!");
    	// }

	}




};







//funtion to play the next qustion
//function to start all over after max win or max loss, reset initialize



// If guesses remaining = 0 then you lose.



// questions and answers, arranged as objects with the answer being an array.  
// Blanks as an array as well.

// initialQ: "Press any Key to Play", answer: (none), img: hmmm.jpg
// q1
// q2
// q3
// q4
// lastQ: "Wanto to Play Again? Press any Key", answer: (none), img: lookThru.jpg



 





initialize();


});
