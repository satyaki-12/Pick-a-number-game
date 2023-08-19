'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`no number`); // when there is no input
  } else if (secret === guess) {
    displayMessage(`correct guess`);
    document.querySelector(`.number`).textContent = secret; // when input equals secret number
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      guess < secret ? displayMessage(`Too low`) : displayMessage(`too high`);
      score--;
      document.querySelector(`.score`).textContent = score; // when input not equals secret number
    } else {
      document.querySelector(`.message`).textContent = `you lost`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secret = Math.trunc(Math.random() * 20) + 1; // reseting to initial condition
  displayMessage(`start guessing..`);
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
