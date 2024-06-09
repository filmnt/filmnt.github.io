// Create an AudioContext object to handle audio processing
const audioContext = new AudioContext();

// Create an AudioBuffer to store the noise data
// bufferSize is the size of the buffer in samples, which is the product of the sample rate and the duration in seconds
const bufferSize = audioContext.sampleRate * 10; // 10 seconds of sound
const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);

// Fill the buffer with random values to create white noise
const data = buffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
data[i] = Math.random() * 2 - 1;
}

// Create a GainNode to control the volume of the noise
let gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

// Function to start playing the noise
function start() {
// Create an AudioBufferSourceNode to play the noise
noiseSource = audioContext.createBufferSource();
noiseSource.buffer = buffer;
noiseSource.loop = true; // loop the noise

gainNode.gain.value = '0.02'; // set the volume level, between 0 and 1
noiseSource.connect(gainNode);
noiseSource.start();

// Disable and enable buttons as necessary
document.getElementById('start').disabled=true;
document.getElementById('stop').disabled=false;

}

// Function to stop playing the noise
function pause() {
noiseSource.stop();
noiseSource.disconnect();
noiseSource.buffer = null;

// Disable and enable buttons as necessary
document.getElementById('start').disabled=false;
document.getElementById('stop').disabled=true;
}

