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

button, input, textarea, select{height:30px}

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




#study-dialog h1 {margin-top:-15px;margin-bottom:-2px}
#study-dialog h3 {font-size:16px}
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
  height: auto;
}

#study-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
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


.todo-container {
    width: 100%;
    position:fixed;
    top:70px;
}

.todo-app {
    width: 340px;
    padding: 10px 20px 0px 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 25px 5px rgba(110, 104, 104, 0.7);

}

.todo-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding-left: 20px;
}

#input-box {
    height:28px;
    margin-top:4px;
    width:247px;
}

#add {
    border: none;
    outline: none;
    height:30px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
    width:80px
}

.todo-btn {
    border: none;
    outline: none;
    height:30px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
    width:40px
}

.todo-container ul li {
    padding: 12px 8px 12px;
    list-style-type: circle;
    user-select: none;
    cursor: pointer;
    position: relative;
    margin-top:-15px;
}

.todo-container ul li.checked {
    text-decoration: line-through;
}

.todo-container ul li.checked::before {
    height: 50px;
    width: 50px;
    margin-top: -8px;
    margin-left: -10px;
}

.todo-container ul li span {
    position: absolute;
    right: 0;
    top: 5px;
    width: 40px;
    height: 40px;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
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




#food-dialog h1 {margin-top:-20px;margin-bottom:-2px}
#food-container {height:100%;min-height:120px}
.get_meal {background-color: #007BFF;color: #fff;padding: 10px 20px; border: none; border-radius: 5px;cursor: pointer;transition: background-color 0.3s;height:40px}  
.get_meal:hover {background-color: #0056b3;}.row {display: flex;}.column {flex: 50%;padding:4px;}

#food-dialog{
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

#food-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100%;
}

#food-dialog::backdrop{
    background: unset;
}

#food-dialog:modal, 
#food-dialog:-internal-dialog-in-top-layer {
  max-height: 100%;
}


#food-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#food-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}


/* -------- dialog inner element stling -------- */
#food-dialog::-webkit-scrollbar {
	width: 0;
}

#food-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#food-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #food-dialog {
    max-width: 380px;
  }
}








#schedule-dialog{
  --_no-shadow: 0 0 32px rgba(0, 0, 0, 0);
  --_shadow: 0 0 60px rgba(0, 0, 0, .5);
  width: 100%;
  max-width: unset;
  margin: 0 0 0 auto;
  top: 0;
  overflow: auto;
  position: fixed;
  border: none;
  box-shadow: var(--_no-shadow);
  transition: box-shadow .2s;
  animation-fill-mode: forwards;
}

#schedule-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
  overflow: hidden;
	height: 100vh;

  
}

#schedule-dialog::backdrop{
    background: unset;
}

#schedule-dialog:modal, 
#schedule-dialog:-internal-dialog-in-top-layer {
  max-height: 100%;
}


#schedule-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#schedule-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}


/* -------- dialog inner element stling -------- */
#schedule-dialog::-webkit-scrollbar {
	width: 0;
  display:none;
}

#schedule-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#schedule-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #schedule-dialog {
    max-width: 380px;
  }
}






#graph-dialog{
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

#graph-dialog > *{
  display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
}

#graph-dialog::backdrop{
    background: unset;
}

#graph-dialog:modal, 
#graph-dialog:-internal-dialog-in-top-layer {
  max-height: 100vh;
}


#graph-dialog[open] {
  -webkit-animation: float-in-right 0.2s ease normal;
    box-shadow: var(--_shadow);
}

#graph-dialog.closing {
  -webkit-animation: float-out-right 0.2s ease normal;
}



/* -------- dialog inner element stling -------- */
#graph-dialog::-webkit-scrollbar {
	width: 0;
}

#graph-dialog::-webkit-scrollbar-track {
	border-radius: 0;
}

#graph-dialog::-webkit-scrollbar-thumb {
	border-radius: 0;
}


@media only screen and (min-width: 380px) {
  #graph-dialog {
    max-width: 380px;
  }
}














.preview-container {width:100%;margin-top:20px;}.box {position: relative;width: 100%;}
.box-header {display: block;;position: relative;border-bottom: 1px solid #646464;margin-bottom: 10px;}
.box-tools {position: absolute;right: 0px;top: 10px;}.dropzone-wrapper {border: 1.5px dashed;position: relative;height: 150px;}
.dropzone-desc {position: absolute;margin: 0 auto;left: 5%;right: 0;text-align: center;width: 100%;top: 50%}
.dropzone,.dropzone:focus {position: absolute;outline: none !important;width: 100%;height: 150px;cursor: pointer;opacity: 0;}
.preview-zone {text-align: center;}.preview-zone .box {box-shadow: none;border-radius: 0;margin-bottom: 0;}
.remove-preview {float:right;height:30px;display:inline;background-color: #007BFF;color: #fff; border: none; border-radius: 5px;cursor: pointer;transition: background-color 0.3s;}
.remove-preview:hover {background-color: #0056b3;}

#preview-dialog h1 {text-align:center;margin-left:-40px;margin-top:-20px;margin-bottom:-2px}
#preview-dialog{--_no-shadow: 0 0 32px rgba(0, 0, 0, 0);--_shadow: 0 0 60px rgba(0, 0, 0, .5);
width: 100%;max-width: unset;margin: 0 0 0 auto;top: 0;overflow: auto;border: none;box-shadow: var(--_no-shadow);
transition: box-shadow .2s;animation-fill-mode: forwards;}
#preview-dialog > *{display: grid;grid-template-rows: auto 1fr auto;height: 100vh;}
#preview-dialog::backdrop{background: unset;}
#preview-dialog:modal,#preview-dialog:-internal-dialog-in-top-layer {max-height: 100vh;}
#preview-dialog[open] {-webkit-animation: float-in-right 0.2s ease normal;box-shadow: var(--_shadow);}
#preview-dialog.closing {-webkit-animation: float-out-right 0.2s ease normal;}






#markdown-editor *{background-color:white;color:black}.separator{display:none;visibility:hidden;width:0;height:0}.CodeMirror,.CodeMirror-scroll {max-height: 250px !important;min-height: 250px !important;}


 .CodeMirror{color:#000}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-ruler{border-left:1px solid #ccc;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important;-webkit-user-select:none;-moz-user-select:none;user-select:none}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:none;font-variant-ligatures:none}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}.CodeMirror-code{outline:0}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected,.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background:#ffa;background:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:0 0}.CodeMirror{height:auto;min-height:300px;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1}.CodeMirror-scroll{min-height:300px}.CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9}.CodeMirror-sided{width:50%!important}.editor-toolbar{position:relative;opacity:.6;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}.editor-toolbar:after,.editor-toolbar:before{display:block;content:' ';height:1px}.editor-toolbar:before{margin-bottom:8px}.editor-toolbar:after{margin-top:8px}.editor-toolbar:hover,.editor-wrapper input.title:focus,.editor-wrapper input.title:hover{opacity:.8}.editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}.editor-toolbar.fullscreen::before{width:20px;height:50px;background:-moz-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,0)));background:-webkit-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:-o-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);background:linear-gradient(to right,rgba(255,255,255,1) 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}.editor-toolbar.fullscreen::after{width:20px;height:50px;background:-moz-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(100%,rgba(255,255,255,1)));background:-webkit-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:-o-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:-ms-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);position:fixed;top:0;right:0;margin:0;padding:0}.editor-toolbar a{display:inline-block;text-align:center;text-decoration:none!important;color:#2c3e50!important;width:30px;height:30px;margin:0;border:1px solid transparent;border-radius:3px;cursor:pointer}.editor-toolbar a.active,.editor-toolbar a:hover{background:#fcfcfc;border-color:#95a5a6}.editor-toolbar a:before{line-height:30px}.editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}.editor-toolbar a.fa-header-x:after{font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}.editor-toolbar a.fa-header-1:after{content:"1"}.editor-toolbar a.fa-header-2:after{content:"2"}.editor-toolbar a.fa-header-3:after{content:"3"}.editor-toolbar a.fa-header-bigger:after{content:"▲"}.editor-toolbar a.fa-header-smaller:after{content:"▼"}.editor-toolbar.disabled-for-preview a:not(.no-disable){pointer-events:none;background:#fff;border-color:transparent;text-shadow:inherit}@media only screen and (max-width:700px){.editor-toolbar a.no-mobile{display:none}}.editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}.editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}.editor-preview,.editor-preview-side{padding:10px;background:#fafafa;overflow:auto;display:none;box-sizing:border-box}.editor-statusbar .lines:before{content:'lines: '}.editor-statusbar .words:before{content:'words: '}.editor-statusbar .characters:before{content:'characters: '}.editor-preview{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7}.editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;border:1px solid #ddd}.editor-preview-active,.editor-preview-active-side{display:block}.editor-preview-side>p,.editor-preview>p{margin-top:0}.editor-preview pre,.editor-preview-side pre{background:#eee;margin-bottom:10px}.editor-preview table td,.editor-preview table th,.editor-preview-side table td,.editor-preview-side table th{border:1px solid #ddd;padding:5px}.CodeMirror .CodeMirror-code .cm-tag{color:#63a35c}.CodeMirror .CodeMirror-code .cm-attribute{color:#795da3}.CodeMirror .CodeMirror-code .cm-string{color:#183691}.CodeMirror .CodeMirror-selected{background:#d9d9d9}.CodeMirror .CodeMirror-code .cm-header-1{font-size:200%;line-height:200%}.CodeMirror .CodeMirror-code .cm-header-2{font-size:160%;line-height:160%}.CodeMirror .CodeMirror-code .cm-header-3{font-size:125%;line-height:125%}.CodeMirror .CodeMirror-code .cm-header-4{font-size:110%;line-height:110%}.CodeMirror .CodeMirror-code .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}.CodeMirror .CodeMirror-code .cm-link{color:#7f8c8d}.CodeMirror .CodeMirror-code .cm-url{color:#aab2b3}.CodeMirror .CodeMirror-code .cm-strikethrough{text-decoration:line-through}.CodeMirror .CodeMirror-placeholder{opacity:.5}.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}









.timeline{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.timeline *,.timeline :after,.timeline :before{-webkit-box-sizing:inherit;box-sizing:inherit}.timeline:not(.timeline--horizontal):before{bottom:0;content:'';left:50%;margin-left:-2px;position:absolute;top:0;width:4px;z-index:1}.timeline__wrap{overflow:hidden;position:relative;z-index:2}.timeline__item{font-size:16px;font-size:1rem;padding:.625rem 2.5rem .625rem 0;position:relative;width:50%;z-index:2}.timeline__item:after{border:4px solid #ddd;border-radius:50%;content:'';height:20px;position:absolute;right:-10px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;width:20px;z-index:1}.timeline__item.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;opacity:0}.timeline__item.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.timeline__item--left{left:0}.timeline__item--right{left:50%;padding:.625rem 0 .625rem 2.5rem}.timeline__item--right:after{left:-10px}.timeline__item--right .timeline__content:before{border-bottom:10px solid transparent;border-right:12px solid #ccc;border-left:none;border-top:10px solid transparent;left:-12px}.timeline__item--right .timeline__content:after{border-bottom:9px solid transparent;border-right:11px solid #fff;border-left:none;border-top:9px solid transparent;left:-10px}.timeline__content{border:1px solid #ccc;border-radius:10px;display:block;padding:1.25rem;position:relative}.timeline__content:after,.timeline__content:before{content:'';height:0;position:absolute;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;width:0}.timeline__content:before{border-bottom:10px solid transparent;border-left:12px solid #ccc;border-top:10px solid transparent;right:-12px;z-index:1}.timeline__content:after{border-bottom:9px solid transparent;border-left:11px solid #fff;border-top:9px solid transparent;right:-10px;z-index:2}.timeline__content h2{font-size:1.25rem;font-weight:700;margin:0 0 .625rem}.timeline__content p{font-size:.9375rem;line-height:1.5;margin-bottom:10px}.timeline--horizontal{font-size:0;padding:0 3.125rem;overflow:hidden;white-space:nowrap}.timeline--horizontal .timeline-divider{display:block;height:4px;left:40px;position:absolute;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:40px;z-index:1}.timeline--horizontal .timeline__items{-webkit-transition:all .8s;-o-transition:all .8s;transition:all .8s;will-change:transform}.timeline--horizontal .timeline__item{display:inline-block;left:0;padding:0 0 2.5rem;position:relative;-webkit-transition:none;-o-transition:none;transition:none;vertical-align:top;white-space:normal}.timeline--horizontal .timeline__item:after{left:50%;right:auto;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:100%}.timeline--horizontal .timeline__item .timeline__item__inner{display:table;height:100%;width:100%}.timeline--horizontal .timeline__item .timeline__content__wrap{display:table-cell;margin:0;padding:0;vertical-align:bottom}.timeline--horizontal .timeline__item .timeline__content:before{border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid #ccc;left:50%;right:auto;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:100%}.timeline--horizontal .timeline__item .timeline__content:after{border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #fff;left:50%;right:auto;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:100%}.timeline--horizontal .timeline__item--bottom{padding:2.5rem 0 0}.timeline--horizontal .timeline__item--bottom:after{top:0}.timeline--horizontal .timeline__item--bottom .timeline__content__wrap{vertical-align:top}.timeline--horizontal .timeline__item--bottom .timeline__content:before{border-bottom:12px solid #ccc;border-left:12px solid transparent;border-right:12px solid transparent;border-top:none;bottom:100%;top:auto}.timeline--horizontal .timeline__item--bottom .timeline__content:after{border-bottom:10px solid #fff;border-left:10px solid transparent;border-right:10px solid transparent;border-top:none;bottom:100%;top:auto}.timeline-nav-button{border:2px solid #ddd;border-radius:50px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;display:block;height:40px;outline:0;position:absolute;text-indent:-9999px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;width:40px;z-index:10}.timeline-nav-button:disabled{opacity:.5;pointer-events:none}.timeline-nav-button:before{background-position:center center;background-repeat:no-repeat;content:'';display:block;height:14px;left:50%;position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);top:50%;width:8px}.timeline-nav-button--prev{left:0}.timeline-nav-button--prev:before{background-image:url(../images/arrow-left.svg)}.timeline-nav-button--next{right:0}.timeline-nav-button--next:before{background-image:url(../images/arrow-right.svg)}.timeline--mobile{padding:0}.timeline--mobile:before{left:10px!important;margin:0!important}.timeline--mobile .timeline__item{left:0;padding-left:40px;padding-right:0;width:100%}.timeline--mobile .timeline__item:after{left:2px;margin:0}.timeline--mobile .timeline__item .timeline__content:before{left:-12px;border-bottom:12px solid transparent;border-right:12px solid #ccc;border-left:none;border-top:12px solid transparent}.timeline--mobile .timeline__item .timeline__content:after{left:-10px;border-bottom:10px solid transparent;border-right:10px solid #fff;border-left:none;border-top:10px solid transparent}@-webkit-keyframes fadeIn{0%{opacity:0;top:70px}100%{opacity:1;top:0}}@keyframes fadeIn{0%{opacity:0;top:70px}100%{opacity:1;top:0}}@-webkit-keyframes liftUp{0%{top:0}100%{top:-15px}}@keyframes liftUp{0%{top:0}100%{top:-15px}}



button:hover{font-size:101%;cursor:pointer}




`

export default (() => Header) satisfies QuartzComponentConstructor
