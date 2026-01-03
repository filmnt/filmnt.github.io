const timerElement = document.querySelector("p.js-time");

let timer = 0;
try {
  const timerRaw = localStorage.getItem("timer");
  timer = timerRaw ? JSON.parse(timerRaw) : 0;
} catch (e) {
  timer = 0;
}

let startTime = timer ? Date.now() - timer : null;

const numberFormat = new Intl.NumberFormat("en-GB", { minimumIntegerDigits: 3 }).format;

if (timerElement) updateTimerElement();

let buttonState = localStorage.getItem("buttonState");

const goButton = document.querySelector("button.js-go-button");
if (goButton) goButton.addEventListener("click", handleGoButtonClick);

let interval;

if (timer && buttonState !== "Start") handleGoButtonClick();

const addLapButton = document.querySelector("button.js-add-lap-button");
const lapList = document.querySelector("ol.js-lap-list");

if (addLapButton) addLapButton.addEventListener("click", addLap);

const resetButton = document.querySelector("button.js-reset-button");
if (resetButton) resetButton.addEventListener("click", showResetConfirmation);

const confirmationContainer = document.querySelector("div.js-confirmation-container");

function handleGoButtonClick() {
	if (goButton.innerHTML === "Start") {
		startTime = Date.now() - timer;
		if (!interval) interval = setInterval(updateTimerElement, 100);
		goButton.innerHTML = "Pause";
		localStorage.setItem("buttonState", "Pause");
		buttonState = "Pause";
	} else {
		clearInterval(interval);
		interval = null;
		goButton.innerHTML = "Start";
		localStorage.setItem("buttonState", "Start");
		buttonState = "Start";
	}
}

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
	if (timerElement) {
		timerElement.innerHTML = formatTime();
	}
}

function addLap() {
	var date = new Date();
	const week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var w = week[date.getDay()];
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	var month = monthNames[date.getMonth()];
	var d = date.getDate();
	var y = date.getFullYear();
	var time = date.toTimeString().slice(0, 8) + " - " + w + ", " + month + " " + d + ", " + y;
	if (lapList) {
		lapList.innerHTML = `<h3 style="margin-left:-40px;margin-top:-15px;margin-bottom:4px">${time}</h3>`;
		lapList.innerHTML += `<cite style="margin-left:-40px" class="lap-item"><i class="fa-solid fa-certificate"></i> StudyTime ${formatTime(timer)}</cite>`;
	}
}

function resetTimer() {
	clearInterval(interval);
	interval = null;
	startTime = null;
	timer = 0;
	updateTimerElement();
	if (buttonState === "Pause") handleGoButtonClick();
	if (lapList) lapList.innerHTML = "";
}

function showResetConfirmation() {
	if (!confirmationContainer) return;
	confirmationContainer.innerHTML = `
	<div>Are you sure?
	<button class="yes-button js-yes-button">Yes</button>
	<button class="no-button js-no-button">No</button>
	</div>
	`;
	const noButton = document.querySelector("button.js-no-button");
	if (noButton) noButton.addEventListener("click", clearConfirmation);
	const yesButton = document.querySelector("button.js-yes-button");
	if (yesButton) yesButton.addEventListener("click", () => {
		const listcontainer = document.getElementById("list-container");
		if (listcontainer) listcontainer.innerHTML = "";
		clearConfirmation();
		savedata();
		resetTimer();
		addLap();
	});
}

function clearConfirmation() {
	if (confirmationContainer) confirmationContainer.innerHTML = "";
}

function addZeroBefore(n) {
	return (n < 10 ? "0" : "") + n;
}

addLap();

const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
	if (!inputbox || !listcontainer) return;
	if (inputbox.value === "") {
		alert("Write something...");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputbox.value;
		li.setAttribute("style", "margin-bottom: 2px; padding-bottom: 2px;"); 
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

if (listcontainer) {
	listcontainer.addEventListener("click", function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			savedata();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			savedata();
		}
	}, false);
}

$("#input-box").keypress(function (e) {
	if (e.keyCode == 13) {
		addTask();
	}
});

function savedata() {
	if (listcontainer) {
		localStorage.setItem("todo-data", listcontainer.innerHTML);
	}
}

function showlist() {
	if (listcontainer) {
		listcontainer.innerHTML = localStorage.getItem("todo-data");
	}
}

showlist();

function applyInlineFontColor(element, color) {
	element.style.color = color;
	Array.from(element.children).forEach(child => applyInlineFontColor(child, color));
}

function cloneForScreenshot(original, fontColor) {
	const clone = original.cloneNode(true);
	applyInlineFontColor(clone, fontColor);
	clone.style.position = "fixed";
	clone.style.left = "-10000px";
	clone.style.top = "0";
	clone.style.zIndex = "-1";
	clone.style.backgroundColor = "#F9F6EF";
	clone.style.paddingBottom = "0";
	clone.style.marginBottom = "0";
	clone.style.overflow = "hidden";

	const downloadWrapper = clone.querySelector(".todo-app.download-container");
	if (downloadWrapper) {
		downloadWrapper.style.marginBottom = "0";
		downloadWrapper.style.paddingBottom = "0";
	}

	const listContainer = clone.querySelector("#list-container");
	if (listContainer) {
		listContainer.style.marginBottom = "0";
		listContainer.style.paddingBottom = "0";
	}

	document.body.appendChild(clone);
	return clone;
}

function removeClone(clone) {
	if (clone && clone.parentNode) {
		clone.parentNode.removeChild(clone);
	}
}

function getFormattedFilename() {
	const date = new Date();
	const yyyy = String(date.getFullYear());
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');

	const lapItem = document.querySelector('.lap-item');
	let time = "00-00";

	if (lapItem) {
		time = lapItem.textContent.trim().replace(/:/g, "-");
	}

	return `[${yyyy}-${mm}-${dd}]${time}.png`;
}

$(document).ready(function () {
	function saveScreenshot(canvas) {
		const downloadLink = document.createElement("a");
		downloadLink.download = getFormattedFilename();
		canvas.toBlob(function (blob) {
			downloadLink.href = URL.createObjectURL(blob);
			downloadLink.click();
		}, 'image/png', 1.0);
	}

	$(".download-btn").on("click", function (e) {
		e.preventDefault();
		const original = document.querySelector(".todo-app.download-container");
		const clone = cloneForScreenshot(original, "#2A2A2A");
		const width = original.offsetWidth;
		const height = original.scrollHeight;

		html2canvas(clone, {
			backgroundColor: "#F9F6EF",
			scrollX: 0,
			scrollY: 0,
			scale: 3,
			width: width,
			height: height
		}).then(function (canvas) {
			removeClone(clone);
			saveScreenshot(canvas);
		});
	});
});

function toJSONLocal(date) {
	var local = new Date(date);
	local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
}

function openStudy() {
	var modal = document.getElementById("study-dialog");
	var closeBtn = modal ? modal.previousElementSibling : null;
	if (!modal || !closeBtn) return;
	modal.style.display = "block";
	closeBtn.style.display = "block";
	let openDialogs = JSON.parse(localStorage.getItem("openDialogs")) || [];
	if (!openDialogs.includes("study-dialog")) {
		openDialogs.push("study-dialog");
		localStorage.setItem("openDialogs", JSON.stringify(openDialogs));
	}
}

function closeStudy() {
	var modal = document.getElementById("study-dialog");
	var closeBtn = modal ? modal.previousElementSibling : null;
	if (!modal || !closeBtn) return;
	modal.style.display = "none";
	closeBtn.style.display = "none";
	let openDialogs = JSON.parse(localStorage.getItem("openDialogs")) || [];
	openDialogs = openDialogs.filter((id) => id !== "study-dialog");
	localStorage.setItem("openDialogs", JSON.stringify(openDialogs));
}
