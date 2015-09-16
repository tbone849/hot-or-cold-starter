$(document).ready(function(){
  newGame();
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
        compareNumbers(randomNewNumber, guessedNumber);
      }
    }
  }

  // Start a new game
  function newGame(){
    $('.new').click(function (){
      $('#feedback').text("Make your Guess!");
      $('.guessBox li').remove();
      $('#count').text('0');
      randomNewNumber = randomizeNumber();
    });
  }

});






// get number from user
function getNumber(){
  var dataEntered = $('#userGuess').val(); // get value from textbox
  return parseInt(dataEntered); // parse answer to integer
}

// make a random number 
function randomizeNumber(){
	// generate number between 1 and 100
	var randomNumber = Math.floor((Math.random() * 100) + 1);
	return randomNumber;
}

// compare computer's number with user's
function compareNumbers(random, guessed){
  //console.log(random);
  //console.log(guessed);
  var difference = random - guessed;
  var absoluteDif = Math.abs(difference);
  if(random == guessed){
    $('#feedback').text("You guessed correctly!\nWay to be awesome!");
  } 
  else if(absoluteDif <= 10){
    $('#feedback').text("You are burning hot!");
  }
  else if(absoluteDif <= 20){
    $('#feedback').text("You are hot!");
  }
  else if(absoluteDif <= 30){
    $('#feedback').text("You are warm.");
  }
  else if(absoluteDif <= 50){
    $('#feedback').text("You are cold");
  }
  else {
    $('#feedback').text("You are freezing");
  }
 
}

// show guess count
function counter(){
  var count = parseInt(($('#count').text()));
  count++;
  $('#count').text(count);
}