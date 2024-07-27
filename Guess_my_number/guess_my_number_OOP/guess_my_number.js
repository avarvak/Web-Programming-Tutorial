"use strict"; 

class GMM_Game {

    onReady() {
        // GMM_Game attributes, to remember the state of the game
        this.TARGET = Math.floor(Math.random() * 101);  // random whole number between 0 and 100
        this.GUESSES = [];       // array of guesses made so far

        // GMM_Game attributes to reference the HTML elements, which makes the code faster
        this.play_again_button = document.getElementById("play_again");
        this.check_guess_button = document.getElementById("check_guess");
        this.guess_input = document.getElementById("guess");
        this.num_guess_display = document.getElementById("num_guesses");
        this.message_display = document.getElementById("message");
        this.guess_display = document.getElementById("guesses_display");

        // Set up the HTML elements
        this.num_guess_display.innerText = this.NUM_GUESSES;
        this.play_again_button.hidden = true;
        this.check_guess_button.addEventListener("click", this.do_one_check);
        this.play_again_button.addEventListener("click", this.reset);
    }

    do_one_check() {
    
        let game_over = false;
    
        // get the guess
        // update this.GUESSES
        //    hint: to add a new element to an array, use the array push method
        // compare the guess to this.TARGET and output appropriate message
        //    if the guess is equal to this.TARGET, update game_over to true
        // update displays of number of guesses and the guesses display
    
        if (game_over) {
            this.check_guess_button.disabled = true;
            this.play_again_button.hidden = false;
        }
    }
    
    reset() {
        this.TARGET = Math.floor(Math.random() * 101);
        this.GUESSES = [];
        this.guess_input.value = "";
        this.check_guess_button.disabled = false;
        this.play_again_button.hidden = true;
        this.message_display.innerText = "";
        this.num_guess_display.innerText = "0";
        this.guess_display.innerText = "";
    }
}

let game = new GMM_Game();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => game.onReady());
} else {
    game.onReady();
}