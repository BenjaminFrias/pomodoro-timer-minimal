const startBtn = document.querySelector(".start-pause-btn");
const restartBtn = document.querySelector(".reset-btn");

const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");

// Global variables
let minutes;
let duration;
let seconds;
let interval;

// Pomodoro times
let breakTime = 5;
let pomodoroTime = 25;
let longBreakTime = 15;

// Buttons listeners for pomodoro timers
startBtn.addEventListener("click", () => {
    startPomodoro(pomodoroTime);
});

// Restart button
restartBtn.addEventListener("click", () => {
    restartPomodoro(pomodoroTime);
});

function startPomodoro(minutes=20) {
    // Restart from the minutes
    clearInterval(interval);

    // Get the duration in seconds
    duration = minutes * 60;
    minutes = duration / 60;
    seconds = 0;

    // Start in the right second
    timer();
    interval = setInterval(timer, 1000);
}

function timer() {
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
        clearInterval(interval);
    }
}

function restartPomodoro(minutes) {
    clearInterval(interval);
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = '00';
}
