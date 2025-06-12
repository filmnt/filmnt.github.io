function toggleFullScreen() {
  try {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.webkitRequestFullscreen) {
        try {
          docEl.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } catch (e) {
          docEl.webkitRequestFullscreen();
        }
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  } catch (error) {
    console.error('Error in toggleFullScreen:', error);
  }
}

function sharebtn() {
  try {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  } catch (error) {
    console.error('Error in sharebtn:', error);
  }
}

window.onclick = function(event) {
  try {
    if (!event || !event.target || !event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown && openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } catch (error) {
    console.error('Error in window.onclick:', error);
  }
}
