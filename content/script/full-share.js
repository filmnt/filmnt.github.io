function toggleFullScreen() {
  const doc = document;
  const docEl = doc.documentElement;
  try {
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitCancelFullScreen) {
        doc.webkitCancelFullScreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      }
    }
  } catch (e) {
    console.error('Error in toggleFullScreen:', e);
  }
}

function sharebtn() {
  const dropdown = document.getElementById("myDropdown");
  if (dropdown) dropdown.classList.toggle("show");
}

window.addEventListener("click", function(event) {
  const isButton = event?.target?.closest('.dropbtn');
  if (!isButton) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
});