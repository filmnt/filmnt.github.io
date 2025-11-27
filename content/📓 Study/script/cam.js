var videoElem=document.getElementById("webcam");
var btnElm=document.getElementById("camtoggle");
var isPlaying=!!videoElem.srcObject;
btnElm.onclick=cameraonoff;

function cameraonoff(){
  if(!videoElem.srcObject){cameraon();}else{cameraoff();}
}
function cameraon(){
  if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
      videoElem.srcObject=stream;
      videoElem.style.display='block';
      videoElem.style.transform='scale(1.5)';
      videoElem.style.transformOrigin='center';
      return videoElem.play();
    }).catch(err=>{
      if(err.name==='NotAllowedError')alert("Webcam access was denied.");
      else if(err.name==='NotFoundError')alert("No webcam device found.");
      else alert("Webcam unavailable.");
    });
  }
}
function cameraoff(){
  const stream=videoElem.srcObject;
  if(stream){
    stream.getTracks().forEach(track=>track.stop());
    videoElem.style.display='none';
    videoElem.style.transform='scale(1)';
    videoElem.srcObject=null;
  }
}