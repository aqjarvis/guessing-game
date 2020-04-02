//Create a list of words and store in a var.
var words = ["harry", "ron", "hermione", "luna", "snape", "dumbledore", "ginny", "fred", "hagrid", "voldemort", "lupin", "sirius"];
var images = ["img1.png"];
//Create an empty list to store letters pressed.
var guessed = [];
//Create a lives var = 10.
var lives = 10;
//Create a var to store wins.
var wins = 0;
//Create a var to store losses.
var losses = 0;
//Create a var to store the dashArray.
var dashArray = [];

var index = 0;



//Create a function to randomly pick a word from our list of words.
function pick() {
    index = Math.floor(Math.random() * words.length);
    return words[index];
}
//Call the function above to get a random word.
var random = pick();

//Call makeDash on random word.
makeDash(random);

//Create a function to reset the game(reset all variables).
function reset() {
    guessed = [];
    lives = 10;
    random = pick();
}

//Create a function to create a "-" array of a word.
function makeDash(word) {
    dashArray = [];
    for (var i = 0; i < word.length; i++) {
        dashArray.push("_");
    }
}

document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + losses;
document.getElementById("current-word").textContent = dashArray.join(" ");
document.getElementById("guesses").textContent = "Guesses Remaining:" + lives;

//Listen for onkeyup from DOM to start game.
document.onkeyup = function (event) {
    var key = event.key;

    //If key pressed is not in letters-guessed
    if (guessed.includes(key) === false) {
        //Add key to the letters-guessed array.
        guessed.push(key);
        //Display to the DOM.
        document.getElementById("letters-guessed").textContent = "Letters Guessed: " + guessed;
        //If the letter is in the random word
        if (random.includes(key)) {
            //Replace the dash with the correct letter for every instance of the key(for loop)
            for (var i = 0; i < random.length; i++) {
                if (random[i] === key) {
                    dashArray[i] = key;
                }
            }
            //If no more "-"'s in our dashArray we win
            if (!dashArray.includes("_")) {
                //Increment wins by 1.
                wins++;
                document.getElementById("pic").setAttribute('src', images[index]);
                //Reset the game(call function)
                reset();
                makeDash(random);
            }
            //Diplay to DOM
            document.getElementById("letters-guessed").textContent = "Letters Guessed: " + guessed;
            document.getElementById("wins").textContent = "Wins: " + wins;
            document.getElementById("current-word").textContent = dashArray.join(" ");
            document.getElementById("guesses").textContent = "Guesses Remaining:" + lives;
        }
        //Else
        else {
            //Decrement lives by 1.
            lives--;
            //If lives left are 0.
            if (lives === 0) {
                //Increment losses by 1.
                losses++;
                //Call reset game Function.
                reset();
                makeDash(random);
            }
            //Display on the DOM.
            document.getElementById("letters-guessed").textContent = "Letters Guessed: " + guessed;
            document.getElementById("losses").textContent = "Losses: " + losses;
            document.getElementById("current-word").textContent = dashArray.join(" ");
            document.getElementById("guesses").textContent = "Guesses Remaining:" + lives;
        }
    }
    //Else do nothing


};