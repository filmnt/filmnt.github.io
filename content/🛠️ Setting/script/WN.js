const audioContext = new AudioContext();
const bufferSize = audioContext.sampleRate * 10;
const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
const data = buffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
let gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);
let noiseSource = null;

function start() {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  noiseSource = audioContext.createBufferSource();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;
  gainNode.gain.value = 0.02;
  noiseSource.connect(gainNode);
  noiseSource.start();
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
}

function pause() {
  if (noiseSource) {
    noiseSource.stop();
    noiseSource.disconnect();
    noiseSource = null;
  }
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
}