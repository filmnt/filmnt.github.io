var videoElem = document.getElementById("webcam");
var btnElm = document.getElementById("camtoggle");
var videoContainer = videoElem.parentElement;
btnElm.onclick = cameraonoff;

function cameraonoff() {
  if (!videoElem.srcObject) {
    cameraon();
  } else {
    cameraoff();
  }
}

function cameraon() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    })
    .then((stream) => {
      videoElem.srcObject = stream;
      videoContainer.style.height = "260px";
      videoContainer.style.overflow = "hidden";
      videoContainer.style.transition = "height 0.3s ease";
      videoElem.style.display = "block";
      videoElem.style.width = "100%";
      videoElem.style.height = "100%";
      videoElem.style.objectFit = "contain";
      videoElem.style.transform = "scale(1.35)";
      videoElem.style.transformOrigin = "center";
      videoElem.style.paddingBottom = "40px";
      videoElem.style.boxSizing = "border-box";
      return videoElem.play();
    })
    .catch((err) => {
      if (err.name === "NotAllowedError") {
        alert("Webcam access was denied.");
      } else if (err.name === "NotFoundError") {
        alert("No webcam device found.");
      } else {
        alert("Webcam unavailable.");
      }
    });
  }
}

function cameraoff() {
  const stream = videoElem.srcObject;
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
    videoElem.style.display = "none";
    videoElem.style.transform = "scale(1)";
    videoElem.style.paddingBottom = "0";
    videoElem.srcObject = null;
    videoContainer.style.height = "0";
    videoContainer.style.overflow = "hidden";
  }
}