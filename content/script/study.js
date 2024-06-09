// @ts-nocheck
/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
const timerElement = document.querySelector("p.js-time");

let timer = JSON.parse(localStorage.getItem("timer")) ?? 0;
let startTime = timer ? Date.now() - timer : null;

const numberFormat = new Intl.NumberFormat("en-GB", {minimumIntegerDigits: 3})
	.format;

updateTimerElement();

let buttonState = localStorage.getItem("buttonState");

const goButton = document.querySelector("button.js-go-button");
goButton.addEventListener("click", handleGoButtonClick);

let interval;

if (timer && buttonState !== "Start") handleGoButtonClick();

const addLapButton = document.querySelector("button.js-add-lap-button");
const lapList = document.querySelector("ol.js-lap-list");

addLapButton.addEventListener("click", addLap);

const resetButton = document.querySelector("button.js-reset-button");

resetButton.addEventListener("click", showResetConfirmation);

const confirmationContainer = document.querySelector(
	"div.js-confirmation-container",
);

function handleGoButtonClick() {
	if (goButton.innerHTML === "Start") {
		startTime = Date.now() - timer;

		interval = setInterval(updateTimerElement, 0);

		goButton.innerHTML = "Stop";
		localStorage.setItem("buttonState", "Stop");
		buttonState = "Stop";
	} else {
		clearInterval(interval);
		interval = null;

		goButton.innerHTML = "Start";
		localStorage.setItem("buttonState", "Start");
		buttonState = "Start";
	}
}

/**
 * Formats a number of milliseconds into hours, minutes, seconds and milliseconds.
 * @param {Number?} time The time to format. If none is specified, then the timer time will be used.
 * @returns {String} The formatted time in hours, minutes, seconds and milliseconds.
 */
function formatTime(time) {
	let ms = time ?? (startTime ? Date.now() - startTime : 0);

	timer = ms;
	localStorage.setItem("timer", JSON.stringify(timer));

	let s = ms / 1000;
	ms = Math.floor(ms % 1000);
	let m = s / 60;
	s = Math.floor(s % 60);
	const h = Math.floor(m / 60);
	m = Math.floor(m % 60);

	return `${("0"+h).slice(-2)}:${("0"+m).slice(-2)}:${("0"+s).slice(-2)}`;
}

function updateTimerElement() {
	timerElement.innerHTML = formatTime();
}

function addLap() {
    var date = new Date();
  
    const week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var w  = week[date.getDay()];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = monthNames[date.getMonth()];

    var d = date.getDate();
    var y = date.getFullYear();
  
    var time =date.toTimeString().slice(0,8)+ " - " + w + ", " + month + " " + d + ", " + y ;

	lapList.innerHTML = `<hr style="margin-left:-40px; margin-top:-4px"/><h3 style="margin-left:-40px;margin-top:-15px;">${time}</h3>`;
	lapList.innerHTML += `<cite style="margin-left:-40px" class="lap-item">StudyTime ${formatTime(timer)}</cite>`;
}

function resetTimer() {
	clearInterval(interval);
	interval = null;

	startTime = null;
	timer = 0;

	updateTimerElement();
	if (buttonState === "Stop") handleGoButtonClick();
	lapList.innerHTML = "";
}

function showResetConfirmation() {
	confirmationContainer.innerHTML = `

	<span>Are you sure?
	<button class="yes-button js-yes-button">Yes</button>
	<button class="no-button js-no-button">No</button>
	</span>
	`;

	const noButton = document.querySelector("button.js-no-button");

	noButton.addEventListener("click", clearConfirmation);

	const yesButton = document.querySelector("button.js-yes-button");

	yesButton.addEventListener("click", () => {
		clearConfirmation();

		resetTimer();
	});
}

function clearConfirmation() {
	confirmationContainer.innerHTML = "";
}