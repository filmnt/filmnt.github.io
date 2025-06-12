var videoElem = document.getElementById("webcam");
var btnElm = document.getElementById("camtoggle");
var isPlaying = !!videoElem.srcObject;

function cameraonoff() {
  if (!isPlaying) {
    cameraon();
  } else {
    cameraoff();
  }
}

function cameraon() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoElem.srcObject = stream;
        videoElem.style.display = 'block';
        return videoElem.play();
      })
      .then(() => {
      })
      .catch((err) => {
        if (err.name === 'NotAllowedError') {
          alert("Webcam access was denied.");
        } else if (err.name === 'NotFoundError') {
          alert("No webcam device found.");
        } else {
          alert("Webcam unavailable.");
        }
      });
  }
}

function cameraonoff() {
  if (!videoElem.srcObject) {
    cameraon();
  } else {
    cameraoff();
  }
}


function cameraoff() {
  const stream = videoElem.srcObject;
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
    videoElem.style.display = 'none';
    videoElem.srcObject = null;
    isPlaying = false;
  }
}
