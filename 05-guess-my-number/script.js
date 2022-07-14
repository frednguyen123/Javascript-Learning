'use strict';

// text of the .message html class
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

// Secret Number to compare 
// Math.random() gives a number between 0 and 1
// Multiply by 20 to get a number between 0 and 20
// Math.trunc to truncate the number
let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// We can use functions to get rid of repetitive code
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// addEventListener for event handler 
// Only called when event happens, 'click' in this case
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //document.querySelector('.message').textContent = 'Correct Number!';

    // No Input
    if(!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
    }
    // Player wins
    else if (guess === hiddenNumber) {
        document.querySelector('.number').textContent = hiddenNumber;
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== hiddenNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = 
            // guess > hiddenNumber ? 'Too High!' : 'Too Low!';
            displayMessage(guess > hiddenNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent = 'You lost this game!';
            displayMessage('You lost this game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > hiddenNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You lost this game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < hiddenNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You lost this game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})


///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function() {
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.guess').value = '';
    // Input of a value is always a string
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
})
