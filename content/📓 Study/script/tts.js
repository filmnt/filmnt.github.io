const btns = document.querySelectorAll('button');

btns.forEach((el) => {
el.addEventListener('click', e => {
const msg = new SpeechSynthesisUtterance();
const txt = window.getSelection();
const lang = $("#tts-lang").find(':selected').attr('data-lang');     
const langCode = lang.split('-')[0]

let s = setSpeech();
s.then((voices) => {
  msg.voice = voices[voices.findIndex(a => a.lang == langCode)];
  msg.text = txt;
  msg.lang = lang;
  msg.volume = 1;
  msg.voiceURI = "native";
  msg.rate = 0.9;

  if (window.speechSynthesis.speaking) {window.speechSynthesis.cancel();}
    else{window.speechSynthesis.speak(msg);}
});})})

function setSpeech() {
  return new Promise(
function (resolve, reject) {
  let synth = window.speechSynthesis;
  let id;

  id = setInterval(() => {
    if (synth.getVoices().length !== 0) {
      resolve(synth.getVoices());
      clearInterval(id);
    }}, 10);
})}

$('#tts-lang').prop('selectedIndex',0);