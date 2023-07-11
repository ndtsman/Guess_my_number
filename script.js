'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 27;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.btn.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let highScore = 0;

  console.log(typeof guess, guess);
  if (!guess) {
    displayMessage('⛔️No number!');
  } else if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too high!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too low!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15ram';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// let highScore = 0;
// if (guess === secretNumber) {
//   console.log(555);
// }

// document.querySelector('.highscore').textContent;
