"use strict";

function createWidgetConfig(element, index) {
  const config = {};
  config.id = `weatherwidget-io-${index}`;
  config.href = element.href || "";
  config.label_1 = element.getAttribute("data-label_1") || "";
  config.label_2 = element.getAttribute("data-label_2") || "";
  config.font = element.getAttribute("data-font") || "";
  config.icons = element.getAttribute("data-icons") || "";
  config.mode = element.getAttribute("data-mode") || "";
  config.days = element.getAttribute("data-days") || "";
  config.theme = element.getAttribute("data-theme") || "";
  config.basecolor = element.getAttribute("data-basecolor") || "";
  config.accent = element.getAttribute("data-accent") || "";
  config.textcolor = element.getAttribute("data-textcolor") || "";
  config.textAccent = element.getAttribute("data-textAccent") || "";
  config.highcolor = element.getAttribute("data-highcolor") || "";
  config.lowcolor = element.getAttribute("data-lowcolor") || "";
  config.suncolor = element.getAttribute("data-suncolor") || "";
  config.mooncolor = element.getAttribute("data-mooncolor") || "";
  config.cloudcolor = element.getAttribute("data-cloudcolor") || "";
  config.cloudfill = element.getAttribute("data-cloudfill") || "";
  config.raincolor = element.getAttribute("data-raincolor") || "";
  config.snowcolor = element.getAttribute("data-snowcolor") || "";
  config.windcolor = element.getAttribute("data-windcolor") || "";
  config.fogcolor = element.getAttribute("data-fogcolor") || "";
  config.thundercolor = element.getAttribute("data-thundercolor") || "";
  config.hailcolor = element.getAttribute("data-hailcolor") || "";
  config.dayscolor = element.getAttribute("data-dayscolor") || "";
  config.tempcolor = element.getAttribute("data-tempcolor") || "";
  config.desccolor = element.getAttribute("data-desccolor") || "";
  config.label1color = element.getAttribute("data-label1color") || "";
  config.label2color = element.getAttribute("data-label2color") || "";
  config.shadow = element.getAttribute("data-shadow") || "";
  config.scale = element.getAttribute("data-scale") || "";
  return config;
}

function setupIframe(config, element, iframes) {
  const existing = document.getElementById(config.id);
  if (existing) existing.remove();
  const iframe = document.createElement("iframe");
  iframe.setAttribute("id", config.id);
  iframe.setAttribute("class", "weatherwidget-io-frame");
  iframe.setAttribute("title", "Weather Widget");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("frameBorder", "0");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("src", "https://weatherwidget.io/w/");
  iframe.style.display = "block";
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.onload = () => iframe.contentWindow.postMessage(config, "https://weatherwidget.io");
  element.style.display = "block";
  element.style.position = "relative";
  element.style.height = "150px";
  element.style.padding = "0";
  element.style.overflow = "hidden";
  element.style.textAlign = "left";
  element.style.textIndent = "-299rem";
  element.appendChild(iframe);
  iframes[config.id] = iframe;
}

function initWidgets() {
  const elements = document.getElementsByClassName("weatherwidget-io");
  const iframes = {};
  if (!elements.length) return;
  const limit = Math.min(elements.length, 10);
  for (let index = 0; index < limit; index++) {
    const element = elements[index];
    if (!element) continue;
    const config = createWidgetConfig(element, index);
    setupIframe(config, element, iframes);
  }
  window.addEventListener("message", (event) => {
    if (event.origin === "https://weatherwidget.io" && event.data.wwId) {
      const iframe = iframes[event.data.wwId];
      if (iframe && iframe.parentNode) {
        iframe.style.height = `${event.data.wwHeight}px`;
        iframe.parentNode.style.height = `${event.data.wwHeight}px`;
      }
    }
  }, { once: false });
}

function updateWeather() {
  const switchLocation = document.getElementById("switchLocation");
  const widget = document.querySelector(".weatherwidget-io");
  if (!switchLocation || !widget) return;
  const selectedValue = switchLocation.value;
  const selectedText = switchLocation.options[switchLocation.selectedIndex]?.text || "서울";
  if (!selectedValue) return;
  localStorage.setItem("weatherLocation", JSON.stringify({ value: selectedValue, text: selectedText }));
  widget.href = `https://forecast7.com/${selectedValue}`;
  widget.dataset.label_1 = selectedText;
  const existingIframe = widget.querySelector(".weatherwidget-io-frame");
  if (existingIframe) existingIframe.remove();
  initWidgets();
}

function initPageWeather() {
  const switchLocation = document.getElementById("switchLocation");
  const widget = document.querySelector(".weatherwidget-io");
  if (!switchLocation || !widget) return;
  const savedLocation = localStorage.getItem("weatherLocation");
  let location = { value: "en/37d57126d98/seoul/", text: "서울" }; 
  if (savedLocation) {
    try {
      location = JSON.parse(savedLocation);
    } catch (e) {}
  }

  widget.href = `https://forecast7.com/${location.value}`;
  widget.dataset.label_1 = location.text;

  switchLocation.selectedIndex = 0;
  if (window.weatherLabel) {
    switchLocation.options[0].textContent = window.weatherLabel;
  }

  initWidgets();
}

function autoUpdateWeather() {
  const widget = document.querySelector(".weatherwidget-io");
  if (!widget) return;
  const savedLocation = localStorage.getItem("weatherLocation");
  let location = { value: "en/37d57126d98/seoul/", text: "서울" }; 
  if (savedLocation) {
    try {
      location = JSON.parse(savedLocation);
    } catch (e) {}
  }
  widget.href = `https://forecast7.com/${location.value}`;
  widget.dataset.label_1 = location.text;
  const existingIframe = widget.querySelector(".weatherwidget-io-frame");
  if (existingIframe) existingIframe.remove();
  initWidgets();
}

function initialize() {
  const switchLocation = document.getElementById("switchLocation");
  if (!switchLocation) return;

  if (window.weatherLabel) {
    switchLocation.options[0].textContent = window.weatherLabel;
  } else {
    const checkLabel = setInterval(() => {
      if (window.weatherLabel) {
        switchLocation.options[0].textContent = window.weatherLabel;
        clearInterval(checkLabel);
      }
    }, 100);
    setTimeout(() => clearInterval(checkLabel), 5000);
  }

  switchLocation.addEventListener("change", () => {
    updateWeather();
    setTimeout(() => {
      switchLocation.selectedIndex = 0;
      if (window.weatherLabel) {
        switchLocation.options[0].textContent = window.weatherLabel;
      }
    }, 500);
  });

  initPageWeather();
  setInterval(autoUpdateWeather, 15 * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", initialize);