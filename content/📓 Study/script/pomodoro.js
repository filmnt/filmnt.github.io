let timeLeft = 25 * 60; // seconds
let timerInterval;
let currentInterval = 'pomodoro';

const timeLeftEl = document.getElementById('time-left');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');
const pomodoroIntervalBtn = document.getElementById('pomodoro-interval-btn');
const shortBreakIntervalBtn = document.getElementById('short-break-interval-btn');
const longBreakIntervalBtn = document.getElementById('long-break-interval-btn');
const skyline = document.getElementById('skyline');
const ios = document.getElementById('ios');

pomodoroIntervalBtn.addEventListener('click', () => {
    currentInterval = 'pomodoro';
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    timeLeft = 25 * 60;
    updateTimeLeftTextContent();
});

shortBreakIntervalBtn.addEventListener('click', () => {
    currentInterval = 'short-break';
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    timeLeft = 5 * 60;
    updateTimeLeftTextContent();
});

longBreakIntervalBtn.addEventListener('click', () => {
    currentInterval = 'long-break';
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    timeLeft = 15 * 60;
    updateTimeLeftTextContent();
});

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        skyline.play();
        startTimer();
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    }
});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimeLeftTextContent();
        if (timeLeft === 0) {
            ios.play();
            clearInterval(timerInterval);
                if (currentInterval === 'pomodoro') {
                    timeLeft = 5 * 60; 
                    currentInterval = 'short-break';
                    startTimer();
                } 
            else {
                    timeLeft = 25 * 60;
                    currentInterval = 'pomodoro';
                    startStopBtn.textContent = 'Start';
                }
        }
    }, 1000);
}

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    if (currentInterval === 'pomodoro') {
        clearInterval(timerInterval);
        timeLeft = 25 * 60;
    } else if (currentInterval === 'short-break') {
        clearInterval(timerInterval);
        timeLeft = 5 * 60;
    } else {
        clearInterval(timerInterval);
        timeLeft = 15 * 60;
    }
    updateTimeLeftTextContent();
    startStopBtn.textContent = 'Start';
});

function updateTimeLeftTextContent() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeLeftEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}