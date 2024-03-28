const startBtn = document.querySelector('.start-pause-btn');
const timerMinutes = document.querySelector('.timer-minutes');
const timerSeconds = document.querySelector('.timer-seconds');

startBtn.addEventListener('click', startPomodoro);

// Global variables
let minutes = 25;
let duration = minutes * 60;
let seconds = 0;

function startPomodoro() {
    let interval = setInterval(pomodoro, 1000);
}

function pomodoro() {
    // Get minutes and seconds
    minutes = parseInt(duration / 60);
    seconds = parseInt(duration % 60);

    // Put a 0 if minutes or seconds is less than 0
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Change min and sec in DOM
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;

    duration--;
    if (duration < 0) {
        clearInterval(interval)
    }
}
