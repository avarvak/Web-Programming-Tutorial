"use strict"; 

function do_one_check() {
    
    let game_over = false;

    // get the guess
    // update GUESSES
    //    hint: to add a new element to an array, use the array push method
    // compare the guess to TARGET and output appropriate message
    //    if the guess is the TARGET, update game_over to true
    // update displays of number of guesses and the guesses display

    if (game_over) {
        document.getElementById("check_guess").disabled = true;
        document.getElementById("play_again").hidden = false;
    }
}

function reset() {
    TARGET = Math.floor(Math.random() * 101);
    GUESSES = [];
    document.getElementById("guess").value = "";
    document.getElementById("check_guess").disabled = false;
    document.getElementById("play_again").hidden = true;
    document.getElementById("message").innerText = "";
    document.getElementById("num_guesses").innerText = NUM_GUESSES;
    document.getElementById("guesses_display").innerText = "";
}

function onReady() {
    document.getElementById("num_guesses").innerText = "0";
    document.getElementById("play_again").hidden = true;
    document.getElementById("check_guess").addEventListener("click",do_one_check);
    document.getElementById("play_again").addEventListener("click", reset);
}


// global variables, to remember the state of the game
let TARGET = Math.floor(Math.random() * 101);  // random whole number between 0 and 100
let GUESSES = [];       // array of guesses made so far
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
} else {
    onReady();
}