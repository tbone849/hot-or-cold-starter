$(document).ready(function(){
	var randomNewNumber = randomizeNumber();
  $('form').submit(onFormSubmitted);

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

}

// Handle form submission
function onFormSubmitted (event) {
  event.preventDefault();
  var guessedNumber = getNumber();
  if(isNaN(guessedNumber)) {
    $("#feedback").replaceWith("<h2 id='feedback'>You did not enter a number.</br>Please try again.</h2>"); // no, try again
  } else {
    if(guessedNumber < 1 || guessedNumber > 100) {
      $("#feedback").replaceWith("<h2 id='feedback'>You SHOULD enter a number between 1 and 100.</h2>");
    } else {
      $('.guessBox').append("<li>" + isNumber + "</li>");
      $("#feedback").replaceWith("<h2 id='feedback'>Make your Guess!</h2>");
    }
  }
}

// get number from user
function getNumber(){
  var dataEntered = $('#userGuess').val(); // get value from textbox
  return parseInt(dataEntered); // parse answer to integer
}

function randomizeNumber(){
	// generate number between 1 and 100
	var randomNumber = Math.floor((Math.random() * 100) + 1);
	return randomNumber;
}
