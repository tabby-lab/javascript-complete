'use strict';

const secretNumber = Math.trunc(Math.random()*20) +1;
document.querySelector('.number').textContent = secretNumber;


let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';

        //when player wins
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'yay correct number!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        //when guess is too high
    }else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }

        //when guess is too low
    }else if(guess < secretNumber){
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
       
    }

});
//test
