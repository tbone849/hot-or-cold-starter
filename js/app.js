
$(document).ready(function(){

	getNumber();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


function newGame(){

	// generate number between 1 and 100
	var randomNumber = Math.floor((Math.random() * 10) + 1);


}

// get number from user
function getNumber(){
	$('#guessButton').click(function(){
		var dataEntered = $('#userGuess').val(); // get value from textbox
		var isNumber = parseInt(dataEntered); // parse answer to integer
		console.log(isNumber)
	});
	
/*
	if(isNumber){ // is it a number?
		if(isNumber < 15){
			alert("I thought I said a number greater than 15...");
			getNumber();
		} else {
			fizzbuzz(isNumber); // yes, run fizzbuzz
		}
		
	} else {
		alert("You did not enter a number. Try again."); // no, try again
		getNumber(); // reprompt for a number
	} */

}