"use strict";

let slideIndex = 1;

function showSlides(n) {
  if (typeof n !== "number" || isNaN(n)) return;
  let slides = document.getElementsByClassName("Slides");
  if (!slides || slides.length === 0) return;
  if (n > slides.length) slideIndex = 1;
  else if (n < 1) slideIndex = slides.length;
  else slideIndex = n;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i] && slides[i].style) slides[i].style.display = "none";
  }
  if (slides[slideIndex - 1] && slides[slideIndex - 1].style) {
    slides[slideIndex - 1].style.display = "block";
  }
}

function plusSlides(n) {
  if (typeof n !== "number" || isNaN(n)) return;
  showSlides(slideIndex + n);
}

function toggleButtons(display) {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  if (prevBtn && prevBtn.style) prevBtn.style.display = display;
  if (nextBtn && nextBtn.style) nextBtn.style.display = display;
}

function initializeCarousel() {
  const widget = document.querySelector(".weatherwidget-io");
  const switchLocation = document.getElementById("switchLocation");
  if (!widget || !switchLocation) return;

  toggleButtons("none");
  let isRendering = true;
  let buttonTimeout = null;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.removedNodes.length) {
        toggleButtons("none");
        isRendering = true;
        clearTimeout(buttonTimeout);
      }
      if (mutation.addedNodes.length) {
        const iframe = widget.querySelector(".weatherwidget-io-frame");
        if (iframe && isRendering) {
          iframe.addEventListener("load", () => {
            showSlides(slideIndex);
            clearTimeout(buttonTimeout);
            buttonTimeout = setTimeout(() => {
              toggleButtons("flex");
              isRendering = false;
            }, 1000);
          }, { once: true });
        }
      }
    });
  });

  observer.observe(widget, { childList: true });

  window.addEventListener("message", (event) => {
    if (event.origin === "https://weatherwidget.io" && event.data.wwId) {
      clearTimeout(buttonTimeout);
      buttonTimeout = setTimeout(() => {
        toggleButtons("flex");
        isRendering = false;
      }, 1000);
    }
  }, { once: false });

  switchLocation.addEventListener("change", () => {
    toggleButtons("none");
    isRendering = true;
    clearTimeout(buttonTimeout);
  });

  const initialIframe = widget.querySelector(".weatherwidget-io-frame");
  if (initialIframe) {
    initialIframe.addEventListener("load", () => {
      showSlides(slideIndex);
      clearTimeout(buttonTimeout);
      buttonTimeout = setTimeout(() => {
        toggleButtons("flex");
        isRendering = false;
      }, 1000);
    }, { once: true });
  } else {
    const checkIframe = setInterval(() => {
      const iframe = widget.querySelector(".weatherwidget-io-frame");
      if (iframe) {
        iframe.addEventListener("load", () => {
          showSlides(slideIndex);
          clearTimeout(buttonTimeout);
          buttonTimeout = setTimeout(() => {
            toggleButtons("flex");
            isRendering = false;
          }, 1000);
        }, { once: true });
        clearInterval(checkIframe);
      }
    }, 100);
    setTimeout(() => clearInterval(checkIframe), 5000);
  }
}

document.addEventListener("DOMContentLoaded", initializeCarousel);