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

	return `${addZeroBefore(h)}:${addZeroBefore(m)}:${addZeroBefore(s)}`;
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

	lapList.innerHTML = `<h3 style="margin-left:-40px;margin-top:-15px;margin-bottom:4px">${time}</h3>`;
	lapList.innerHTML += `<cite style="margin-left:-40px" class="lap-item"><i class="fa-solid fa-certificate"></i> StudyTime ${formatTime(timer)}</cite>`;
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

	<div>Are you sure?
	<button class="yes-button js-yes-button">Yes</button>
	<button class="no-button js-no-button">No</button>
	</div>
	`;

	const noButton = document.querySelector("button.js-no-button");

	noButton.addEventListener("click", clearConfirmation);

	const yesButton = document.querySelector("button.js-yes-button");

	yesButton.addEventListener("click", () => {
		const listcontainer = document.getElementById('list-container');
		listcontainer.innerHTML='';
		clearConfirmation();
		savedata();

		resetTimer();
		addLap();
	});
}

function clearConfirmation() {
	confirmationContainer.innerHTML = "";
}


function addZeroBefore(n) {
	return (n < 10 ? '0' : '') + n;
  }

addLap();


// Timestamp
const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTask() {
    if (inputbox.value === '') {
        alert("Write something...");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.setAttribute("data-html2canvas-ignore", "true");
        li.appendChild(span);
    }
    inputbox.value = "";
    inputbox.focus();
    savedata();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);


$("#input-box").keypress(function(e){
	if (event.keyCode == 13){
		addTask();
	}
  });



function savedata() {
    localStorage.setItem("todo-data", listcontainer.innerHTML);
}

function showlist() {
    listcontainer.innerHTML = localStorage.getItem("todo-data");
}

showlist();



// Download Timestamp
$(document).ready(function() {
  
	function saveScreenshot(canvas) {
	  var downloadLink = document.createElement('a');
	  var date = new Date();
	  downloadLink.download = `[${toJSONLocal(date)}] Study Timestamp`;
	  canvas.toBlob(function(blob) {
		downloadLink.href = URL.createObjectURL(blob)
		downloadLink.click();
	  });
	}
  
  
	$(".download-btn").on("click", function(e) {
	  e.preventDefault();
	  html2canvas(document.querySelector(".download-container"), {
		  backgroundColor: '#9CCEF6',
		  scrollX: 0,
		  scrollY: 0
		}).then(function(canvas) {
		  saveScreenshot(canvas);
		});
	});
  });

  function toJSONLocal(date) {
	var local = new Date(date);
	local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
  }



// Function to open the dialog
function openStudy() {
	var dialog = document.getElementById('study-dialog');
	dialog.showModal();
  }
  
  // Function to close the dialog with animation
  function closeStudy() {
	var dialog = document.getElementById('study-dialog');
	
	// Add a class to trigger the closing animation
	dialog.classList.add('closing');
  
	// Listen for animation end event
	dialog.addEventListener('animationend', function() {
	  // After animation completes, close the dialog
	  dialog.close();
	  
	  // Remove the closing class to reset for next time
	  dialog.classList.remove('closing');
	}, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
  }
  
  // Add event listener to the dialog's backdrop
  document.getElementById('study-dialog').addEventListener('click', function(event) {
	if (event.target === this) {
	  closeStudy();
	}
  });
  
  document.getElementById('study-dialog').addEventListener('click', function(event) {
	if (event.target === this) {
	  closeNavbar();
	}
  });