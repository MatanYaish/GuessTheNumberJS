const number = generateRandomNumber();
console.log(number);
var score = 10;
var highScore = 0;

let btnCheck = document.querySelector('.check');
let labelMessage = document.querySelector('.message');
let labelScore = document.querySelector('.score');

btnCheck.addEventListener('click', function () {
  let guess = document.getElementById('currentnumber').value;
  if (guess == '') {
    labelMessage.textContent = 'Please write a number';
  } else {
    checkGuess(Number(guess));
  }
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 29 + 1);
}

function checkGuess(userGuess) {
  if (userGuess === number) {
    handleGuess('correct');
  } else if (userGuess < number) {
    handleGuess('small');
  } else {
    handleGuess('big');
  }
}

function handleGuess(action) {
  switch (action) {
    case 'correct':
      userWon();
      break;
    case 'small':
      handleScore();
      break;
    case 'big':
      handleScore();
      break;
  }
}

function userWon() {
  document
    .querySelector('.game-details-box')
    .classList.replace('right', 'right-correct');
  btnCheck.classList.add('non-display-element');
  labelMessage.textContent = 'Correct Number!';
  handleHighScore();
}

function handleScore() {
  score--;
  labelScore.textContent = score;
}

function handleHighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}
