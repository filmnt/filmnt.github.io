
var videoElem = document.getElementById("webcam");
var btnElm = document.getElementById("camtoggle");
var isPlaying = !!videoElem.srcObject;

function cameraonoff() {
if (!isPlaying) {
cameraon();
} else {
cameraoff();
}}
  
function cameraon() {
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
navigator.mediaDevices
.getUserMedia({
video: true
})
.then(function (stream) {
videoElem.srcObject = stream;
videoElem.style.display='block';
videoElem.play();
})
.then(() => {
isPlaying = true;
});
}}

function cameraoff() {
const stream = videoElem.srcObject;
if (stream) {
const tracks = stream.getTracks();
tracks.forEach(function (track) {
track.stop();
});
videoElem.style.display='none';
videoElem.srcObject = null;
isPlaying = false;
}}