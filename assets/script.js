const startBtn = document.querySelector(".start-pause-btn");

const focusBtn = document.querySelector(".focus-btn");
const shortBreakBtn = document.querySelector(".short-break-btn");
const longBreakBtn = document.querySelector(".long-break-btn");

const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");

// Global variables
let minutes;
let seconds = 60;

let interval;
let isRunning = false;

let focusDuration = 25;
let shortBreakDuration = 5;
let longBreakDuration = 15;
let currentPomodoro = focusDuration;

let duration = currentPomodoro * 60;

// Buttons listeners for pomodoro timers
startBtn.addEventListener("click", () => {
    if (!isRunning) {
        startBtn.textContent = "Pause";
        isRunning = true;
        startPomodoro();
    }
    else {
        restartPomodoro();
    }
});

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
    duration = currentPomodoro * 60;
    restartPomodoro();
});

// POMODORO OPTIONS BUTTONS
const pomodoroOptions = document.querySelector(".timer-options");
pomodoroOptions.addEventListener("click", (e) => {
    let option = e.target.dataset.option;

    if (option == "focus") {
        duration = focusDuration * 60;
        restartPomodoro();
    }
    else if (option == "long-break") {
        duration = longBreakDuration * 60;
        restartPomodoro();
    }
    else {
        duration = shortBreakDuration * 60;
        restartPomodoro();
    }
});

function startPomodoro() {
    clearInterval(interval);

    // Start in the right second
    timer();
    interval = setInterval(timer, 1000);
}

function timer() {
    displayDuration();

    duration--;
    if (duration < 0) {
        clearInterval(interval);
    }
}

function restartPomodoro() {
    isRunning = false;
    startBtn.textContent = "Start";

    clearInterval(interval);
    displayDuration();
}

function displayDuration() {
    // Get minutes and seconds
    minutes = parseInt(duration / 60);
    seconds = parseInt(duration % 60);

    // Put a 0 if minutes or seconds is less than 0
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Change min and sec in DOM
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;
}

// Set intial time
restartPomodoro();
