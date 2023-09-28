let countdown;
const timerDisplay = document.getElementById('timer');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('startButton');

function startTimer() {
    const minutes = parseInt(minutesInput.value || 0);
    const seconds = parseInt(secondsInput.value || 0);
    const totalTime = (minutes * 60) + seconds;

    if (totalTime <= 0 || isNaN(totalTime)) {
        alert('Please enter a valid time.');
        return;
    }

    let timeLeft = totalTime;
    
    countdown = setInterval(function () {
        const minutesLeft = Math.floor(timeLeft / 60);
        const secondsLeft = timeLeft % 60;

        timerDisplay.textContent = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

        if (timeLeft === 0) {
            clearInterval(countdown);
            alert('Time is up!');
        } else {
            timeLeft--;
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);
