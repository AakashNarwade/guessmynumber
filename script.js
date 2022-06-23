'use strict';
// console.log(document.querySelector('.message').textContent)
// var message = document.querySelector('.message');
// message.textContent = '🏆 Correct number ';

// document.querySelector('.number').textContent=13;

// var score = document.querySelector('.score');
// console.log(score.textContent)
// score.textContent=15;

// var highScore = document.querySelector('.highscore');
// console.log(highScore.textContent)
// highScore.textContent=19;

// var valueTyped = document.querySelector('.guess');
// valueTyped.value= 23;

let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
let score = 20;
let highScore = 0;
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = number => {
  document.querySelector('.number').textContent = number;
};
// document.querySelector('.number').textContent = secretNumber;

// var score = document.querySelector('.score').textContent;
// console.log(score.textContent)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    var message = document.querySelector('.message');
    message.textContent = '⛔ No number';

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    displaySecretNumber(secretNumber);
    // document.querySelector('.message').textContent = '✅ Correct number';
    displayMessage('✅ Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.body.style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // document.querySelector('.number').textContent = '?';
    displaySecretNumber('?');
    document.querySelector('.number').style.width = '15rem';
    document.body.style.backgroundColor = '#222';
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ?  '📈 Too high number' : '📉 Too low number';
      //   score--;
      displayMessage(
        guess > secretNumber ? '📈 Too high number' : '📉 Too low number'
      );
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     '💥 You lost the game mate';
      displayMessage('💥 You lost the game mate');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//  When player enters high number
//   else if (guess > secretNumber) {
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.number').style.width = '15rem';
//     document.body.style.backgroundColor = '#222';
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high number';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '💥 You lost the game mate';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //   When player enters low number
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low number';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '💥 You lost the game mate';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
  // document.querySelector('.message').textContent = 'Start guessing..';
  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  // document.querySelector('.number').textContent = '?';
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
