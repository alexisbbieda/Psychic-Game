
// Creating a global variable that is an array for the computer to choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, how many guesses are left, and what the user has guessed
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var options = [];

// Setting a function for whenever the user presses a key
document.onkeyup = function(event) {

      // Setting a variable to determine which key is pressed and pushing it to the DOM
      var userGuess = event.key;

      // Setting a variable that assigns a random letter
      var letter = alphabet [Math.floor(Math.random() * alphabet.length)];
      
      // Defining the letter options to generate from
      var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      
      // If one of the letter options mathers with a user guess 
      if (letterOptions.indexOf(userGuess) > -1){
        
        // If the user's guess is the same as the random letter generated then add a win and keep the score
        if(userGuess === letter){
          wins++;
          guessesLeft = 10;
          options = [];
        }

        // If the user guess is not the same as the letter decrease the amount of guesses
        if(userGuess != letter){
          guessesLeft --;
          options.push(userGuess);
        }

        // If the user runs out of guesses add a loss
        if(guessesLeft === 0){
          guessesLeft = 10;
          losses ++;
          options = [];
        }
      }
    

      
        // Display the results to the DOM
        var html = "<p>Wins: " + wins + "</p>" +
                  "<p>Losses: " + losses + "</p>" +
                  "<p>Guesses left: " + guessesLeft + "</p>" +
                  "<p> Your guesses so far: " + options.join(", ") + "</p>";
        
        document.querySelector("#game").innerHTML = html;

      }
    
  