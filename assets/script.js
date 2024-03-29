const startBtn = document.querySelector(".start-pause-btn");
const restartBtn = document.querySelector(".reset-btn");

const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");

const focusBtn = document.querySelector(".focus-btn");
const shortBreakBtn = document.querySelector(".short-break-btn");
const longBreakBtn = document.querySelector(".long-break-btn");

// Global variables
let minutes;
let duration;
let seconds;
let interval;
let isRunning = false;

// Pomodoro times
let breakTime = 5;
let pomodoroTime = 25;
let longBreakTime = 15;
let currentTime = pomodoroTime; 

// Buttons listeners for pomodoro timers
startBtn.addEventListener("click", () => {
    startPomodoro(currentTime);
});

// Restart button
restartBtn.addEventListener("click", () => {
    restartPomodoro(pomodoroTime);
});

// Focus button
focusBtn.addEventListener("click", () => {
    currentTime = pomodoroTime;
    restartPomodoro(currentTime);
});

// break button
shortBreakBtn.addEventListener("click", () => {
    currentTime = breakTime;
    restartPomodoro(breakTime);
});

// long break button
longBreakBtn.addEventListener("click", () => {
    currentTime = longBreakTime;
    restartPomodoro(longBreakTime);
});


function startPomodoro(minutes=25) {
    // Restart from the minutes
    clearInterval(interval);

    // Get the duration in seconds
    duration = minutes * 60;
    minutes = duration / 60;
    seconds = 0;

    // Start in the right second
    isRunning = true;
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
        isRunning = false;
    }
}

function restartPomodoro(minutes) {
    clearInterval(interval);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerMinutes.textContent = minutes;
    timerSeconds.textContent = '00';
}

// Set intial time
restartPomodoro(pomodoroTime);