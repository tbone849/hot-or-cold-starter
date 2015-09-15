
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
	$('form').submit(function(event){
		var dataEntered = $('#userGuess').val(); // get value from textbox
		var isNumber = parseInt(dataEntered); // parse answer to integer
		$('#userGuess').val('');
	
		if(isNumber){ // is it a number?
			if((isNumber < 1) || (isNumber > 100)) {
				$("#feedback").replaceWith("<h2 id='feedback'>You SHOULD enter a number between 1 and 100.</h2>");
				event.preventDefault();
				getNumber();
			} else {
				$('.guessBox').append("<li>" + isNumber + "</li>");
				event.preventDefault();
			}
		
			} else {
			$("#feedback").replaceWith("<h2 id='feedback'>You did not enter a number.</br>Please try again.</h2>"); // no, try again
			event.preventDefault();
			getNumber(); // reprompt for a number
		} 
	});
}

