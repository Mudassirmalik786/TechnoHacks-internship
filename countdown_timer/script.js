let timer;
let secondsRemaining = 0;
let isRunning = false;

function updateDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  document.getElementById('display').innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

function setTime() {
  const timeInput = document.getElementById('timeInput').value;
  secondsRemaining = parseInt(timeInput, 10);
  updateDisplay();
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function() {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  secondsRemaining = 0;
  updateDisplay();
}
