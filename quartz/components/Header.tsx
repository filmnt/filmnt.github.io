import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}

button,select{text-align:center;border:none;border-radius: 4px;outline: none;font-size:15px;margin-top:4px;}
input {border:none;border-radius: 4px;outline: none;width:100px;font-size:15px} 
select{font-size:15px} 
form{display:inline;font-size:15px}

.progress-container {display:flex;align-items:center;justify-content:center;margin-top:4px;}
.progress {display:flex;align-items:center;width: 50px;height:25px;background-color:#adadad;border-radius:5px;}
.progress .bar {display:flex;align-items:center;justify-content:center;border-radius:5px 0px 0px 5px;background-color:#6ad058;height:25px;background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size: 1rem 1rem;animation-duration: 5s;animation-timing-function: linear;animation-delay: 0s;
animation-iteration-count: infinite;animation-direction: normal;animation-fill-mode: none;animation-play-state: running;animation-name: progress-bar-stripes;}
.progress-container .value {color:#fff;position:absolute;}
@-webkit-keyframes progress-bar-stripes {from  {background-position:100px 0;}to{background-position: 0 0; }}

.VIpgJd-ZVi9od-ORHb-OEVmcd {display: none;}
.goog-logo-link {display:none !important;font-size:0px !important;} 
.goog-te-gadget{color: transparent !important;font-size:0px !important;}
.goog-te-combo{width:120px !important}
.VIpgJd-ZVi9od-l4eHX-hSRGPd, .VIpgJd-ZVi9od-l4eHX-hSRGPd:link, .VIpgJd-ZVi9od-l4eHX-hSRGPd:visited, .VIpgJd-ZVi9od-l4eHX-hSRGPd:hover, .VIpgJd-ZVi9od-l4eHX-hSRGPd:active {display: none;}
.goog-te-banner-frame.skiptranslate { display: none !important;} 
#goog-gt-tt{display: none !important; top: 0px !important; } 
.goog-tooltip skiptranslate{display: none !important; top: 0px !important; } 
.goog-tooltip:hover {display: none !important;}
.goog-text-highlight {background-color: transparent !important;border: none !important;box-shadow: none !important;}


div.right.sidebar{padding:0;width:360px}
.dropdown-content {display: none;}
.show {display: block;}


#excal-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#excal-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
}

#excal-dialog::backdrop{
    background: unset;
}

#excal-dialog:modal, 
#excal-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#excal-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#excal-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}

/* -------- Dialog animations -------- */

/* Keyframes for sliding in an element from the right */
@keyframes float-in-right {
  /* Start off-screen to the right */
	from {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
  /* Move to the initial position (0%) */
	to {
		-webkit-transform: translate(0%); 
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
}

/* Vendor-prefixed keyframes for sliding in an element from the right (WebKit browsers) */
@-webkit-keyframes float-in-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
}

/* Keyframes for sliding out an element to the right */
@keyframes float-out-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
}

/* Vendor-prefixed keyframes for sliding out an element to the right (WebKit browsers) */
@-webkit-keyframes float-out-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
}

/* -------- dialog inner element stling -------- */
#excal-dialog::-webkit-scrollbar {
	width: 0;
}

#excal-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#excal-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #excal-dialog {
    max-width: 380px;
  }
}





.notes-btn {float:right;background-color: #007BFF;color: #fff;padding: 10px 20px; border: none; border-radius: 5px;cursor: pointer;transition: background-color 0.3s;}  
.notes-btn:hover {background-color: #0056b3;}
#addTxt:placeholder-shown{font-style:italic;}

#notes-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#notes-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
}

#notes-dialog::backdrop{
    background: unset;
}

#notes-dialog:modal, 
#notes-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#notes-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#notes-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}

/* -------- Dialog animations -------- */

/* Keyframes for sliding in an element from the right */
@keyframes float-in-right {
  /* Start off-screen to the right */
	from {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
  /* Move to the initial position (0%) */
	to {
		-webkit-transform: translate(0%); 
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
}

/* Vendor-prefixed keyframes for sliding in an element from the right (WebKit browsers) */
@-webkit-keyframes float-in-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
}

/* Keyframes for sliding out an element to the right */
@keyframes float-out-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
}

/* Vendor-prefixed keyframes for sliding out an element to the right (WebKit browsers) */
@-webkit-keyframes float-out-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
}

/* -------- dialog inner element stling -------- */
#notes-dialog::-webkit-scrollbar {
	width: 0;
}

#notes-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#notes-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #notes-dialog {
    max-width: 380px;
  }
}







.preview-container {width:100%;margin-top:20px;}.box {position: relative;width: 100%;}
.box-header {display: block;;position: relative;border-bottom: 1px solid #646464;margin-bottom: 10px;}
.box-tools {position: absolute;right: 0px;top: 10px;}.dropzone-wrapper {border: 1.5px dashed;position: relative;height: 150px;}
.dropzone-desc {position: absolute;margin: 0 auto;left: 5%;right: 0;text-align: center;width: 100%;top: 15%}
.dropzone,.dropzone:focus {position: absolute;outline: none !important;width: 100%;height: 150px;cursor: pointer;opacity: 0;}
.preview-zone {text-align: center;}.preview-zone .box {box-shadow: none;border-radius: 0;margin-bottom: 0;}
.remove-preview {float:right;height:30px;display:inline;background-color: #007BFF;color: #fff; border: none; border-radius: 5px;cursor: pointer;transition: background-color 0.3s;}  
.remove-preview:hover {background-color: #0056b3;}

#preview-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#preview-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
}

#preview-dialog::backdrop{
    background: unset;
}

#preview-dialog:modal, 
#preview-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#preview-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#preview-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}





/* -------- dialog inner element stling -------- */
#excal-dialog::-webkit-scrollbar {
	width: 0;
}

#excal-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#excal-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #excal-dialog {
    max-width: 380px;
  }
}


/* -------- dialog inner element stling -------- */
#excal-dialog::-webkit-scrollbar {
	width: 0;
}

#excal-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#excal-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #excal-dialog {
    max-width: 380px;
  }
}



#dillinger-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#dillinger-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
}

#dillinger-dialog::backdrop{
    background: unset;
}

#dillinger-dialog:modal, 
#dillinger-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#dillinger-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#dillinger-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}

/* -------- dialog inner element stling -------- */
#dillinger-dialog::-webkit-scrollbar {
	width: 0;
}

#dillinger-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#dillinger-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #dillinger-dialog {
    max-width: 380px;
  }
}




#navbar-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#navbar-dialog > *{
  display: inline;
}

#navbar-dialog::backdrop{
    background: unset;
}

#navbar-dialog:modal, 
#navbar-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#navbar-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#navbar-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}

/* -------- dialog inner element stling -------- */
#navbar-dialog::-webkit-scrollbar {
	width: 0;
}

#navbar-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#navbar-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #navbar-dialog {
    max-width: 380px;
  }
}





#study-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#study-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 160px;
}

#study-dialog::backdrop{
    background: unset;
}

#study-dialog:modal, 
#study-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#study-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#study-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}

/* -------- dialog inner element stling -------- */
#study-dialog::-webkit-scrollbar {
	width: 0;
}

#study-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#study-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #study-dialog {
    max-width: 380px;
  }
}






/* -------- Dialog animations -------- */

/* Keyframes for sliding in an element from the right */
@keyframes float-in-right {
  /* Start off-screen to the right */
	from {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
  /* Move to the initial position (0%) */
	to {
		-webkit-transform: translate(0%); 
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
}

/* Vendor-prefixed keyframes for sliding in an element from the right (WebKit browsers) */
@-webkit-keyframes float-in-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
}

/* Keyframes for sliding out an element to the right */
@keyframes float-out-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
}

/* Vendor-prefixed keyframes for sliding out an element to the right (WebKit browsers) */
@-webkit-keyframes float-out-right {
  /* Start from the initial position (0%) */
	from {
		-webkit-transform: translate(0%);
		-ms-transform: translate(0%);
		transform: translateX(0%);
	}
  /* Move off-screen to the right */
	to {
		-webkit-transform: translate(100%);
		-ms-transform: translate(100%);
		transform: translateX(100%);
	}
}









`

export default (() => Header) satisfies QuartzComponentConstructor
