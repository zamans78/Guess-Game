'use strict';

let score = 20;
let highscore = 0;
document.querySelector('.score').value = score;
document.querySelector('.message').textContent = 'Start Guessing...';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //when user gives no value or 0.
  if (!guess) {
    //0 is a falsy value.
    document.querySelector('.message').textContent = '😒 No Number!!';
  } //when user gives more then the Secret Number.
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🌚 Too High!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😑GAME OVER';
      document.querySelector('.score').textContent = '0';
    }
    //when user gives less then the Secret Number.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙂 Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😑GAME OVER';
      document.querySelector('.score').textContent = '0';
    }
    //when user gets it correct.
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '😎 You Win!!';
    document.querySelector('body').style.backgroundColor = '#007200';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#03045e';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
