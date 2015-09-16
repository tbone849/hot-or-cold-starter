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
  $('#userGuess').val(''); // empty textbox
  if(isNaN(guessedNumber)) {
    $("#feedback").text("You did not enter a number.\nPlease try again."); // no, try again
  } else {
    if(guessedNumber < 1 || guessedNumber > 100) { 
      $("#feedback").text("You SHOULD enter a number between 1 and 100."); // no, try again
    } else {
      $('.guessBox').append("<li>" + guessedNumber + "</li>"); // it is a number between 1 and 100
      counter();
      // compareNumbers goes here
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

function compareNumbers(random, guessed){
  if(random == guessed){
    $('#feedback').text("You guessed correctly! Way to be awesome");
  } 
 
}

function counter(){
  var count = parseInt(($('#count').text()));
  count++;
  $('#count').text(count);
}