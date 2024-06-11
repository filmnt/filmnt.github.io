---
tags:
  - Setting
  - contents
---
%% jQuery script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
%% html2canvas script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.js"></script>
%% Webcam script %%
<script src="script/cam.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% discord popup %%
<script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
        server: '1231921110811934840', // Filmnt 
        channel: '1240125504036540477', // #setting
        notifications: false,})
</script>
%% WhiteNoise Script %%
<script type="text/javascript" src="script/WN.js"></script>
%% progressbar script %%
<script>
function getCurrentProgress(){
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return ((((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(1);}
function updateUI() {const percent = getCurrentProgress();
  const barItem = document.getElementsByClassName('bar')[0];barItem.style.width = `${percent}%`;
  const counterItem = document.getElementsByClassName('value')[0];counterItem.textContent = `${percent}%`;}
setInterval(function() {updateUI();return arguments.callee;}(), 1000);
</script>
%% Links script %%
<script type="text/javascript">
var url = document.getElementById( 'linkshare' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#linkshare').prop('selectedIndex',0);};
</script>
%% Translator script%%
<script>window.ResetTranslate = () => jQuery('#\\:1\\.container').contents().find('#\\:1\\.restore').click();</script>
<script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'},'google_translate_element');}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
%% Navigation bar script %%
<script src="script/nav-full-share.js"></script>
%% swipe  script %%
<script src="script/swipe.js"></script>






# Cloud Storage and Sync
## Filen (Storage)
- Free Storage `Up to 50GB`
    - Create account with <a href="https://filen.io/r/93ddc37b7610c42c321975e537bef1e5" target="_blank" >invite link</a> (10GB → 20GB)
    - Use `your invite link` 3times (20GB → 50GB)
        - `invite`→ `create`→ `delete`
    - (Optional) There are several pricing plans 

## Syncthing (Sync)
- Continuous file synchronization program (`free`)
    - Mac $\leftrightarrow$ Android $\leftrightarrow$ Win
- <a href="https://syncthing.net/downloads/" target="_blank" >Download Syncthing</a>

---

# E-mail
## [Proton](https://proton.me/mail)
- Encrypted email
## [Tuta](https://tuta.com/)
- Encrypted email 
    - Unable to use as Samsung account

---

# Mac Apps
## [Scrcpy](https://github.com/Genymobile/scrcpy)
- Mirror `Android` devices on Desktop
    - USB 3.0 ⬆️
    - Enable `USB Debugging` in `Developer options` for use
    - Enter the command `scrcpy` in `terminal`
    - <a href="https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md" target="_blank" >Shortcuts</a>
    - <a href="https://github.com/Genymobile/scrcpy/blob/master/doc/connection.md" target="_blank" >Wireless Connection</a>
- (Recommend) OTG Mode: `scrcpy --otg -s <Android-Serial-Number> --always-on-top --no-audio`
    - Control your devices using mouse and keyboard
    - `Cmd` to switch
    - Only works if the device is connected over USB
    - <a href="https://drive.filen.io/d/ae3befb5-fe30-437c-a71f-e3055504e6cb#kGwPfoJpacb7cI49ICTekOgkPnGUixcY" target="_blank" >script file</a> (for Mac OS)
        - Modify script and Save as  `application`  and Move to `application folder` 

## [NearDrop](https://github.com/grishka/NearDrop/releases)
- An unofficial Google Nearby Share app for macOS
    - `Android` → `Mac` (Only)

## [Paralles Desktop](https://www.parallels.com/products/desktop/)
- Run Windows on Mac
    - Expensive but high performance
    - Use `Windows Pro Key` and `Paralles Windows Image` [^1]
    - <a href="https://github.com/kellwinr/galaxybook_mask" target="_blank" >Galaxybook Mask for Samsung Apps</a>
- (Other Options) <a href="https://www.vmware.com/products/fusion.html" target="_blank" >VMware</a> [^2],  <a href="https://github.com/Whisky-App/Whisky" target="_blank" >Whisky</a>, <a href="https://www.codeweavers.com/crossover" target="_blank" >CrossOver</a>, QEMU, VirtualBox, … 

## [Adguard](https://adguard.com/)
- ad Blocker
- Buy <a href="https://www.stacksocial.com/search?utf8=%E2%9C%93&query=adguard" target="_blank" >Here </a> (Stacksocial)

## [eqMac](https://eqmac.app/)
- System Audio processing
- <a href="https://github.com/jaakkopasanen/AutoEq/blob/master/results/RANKING.md" target="_blank" >Ranking</a> - `Over-ear` and `In-ear` headphones 

## [BudsManager](https://github.com/ThePBone/GalaxyBudsClient/releases)
-  An unofficial manager for the Buds, Buds+, Buds Live and Buds Pro

## [Shazam](https://www.shazam.com/apps)
- Identify Songs


## [RustDesk](https://github.com/rustdesk/rustdesk/releases)
- An open-source remote desktop, and alternative to TeamViewer

## [Krabiner](https://karabiner-elements.pqrs.org/)
- A powerful and stable keyboard customizer
    - For `Paralles` and `VNC` language switcher
-  <a href="https://drive.filen.io/d/f99fc97e-87ff-4ea5-8c63-ecbb8fff4343#ECqevoRfyOVJTSDRrlNUGbhwAX1sMDhb" target="_blank" >setting file</a> (for Korean)
    - source: <a href="https://blog.naver.com/hankboy/221200885234" target="_blank" >blog.naver.com/hankboy/221200885234</a>
        - <a href="https://archive.is/yxigT" target="_blank" >mirror </a> (archive) 

## [KeyboardCleanTool](https://folivora.ai/keyboardcleantool/)
- Block all Keyboard and TouchBar input

## [LinearMouse](https://linearmouse.app/)
- Customize Mouse and Trackpad


## [Pock](https://pock.app/) 
- Widgets manager for MacBook `Touch Bar`

## [Hiddenbar](https://github.com/dwarvesf/hidden)
- Hide menu bar items

## [Runcat](https://kyome.io/runcat/index.html)
- System Info in menu bar

## [Macs Fan Control](https://crystalidea.com/macs-fan-control/download)
-  Monitor and control fans `Not for Macbook Air`


## [Monitor Control](https://github.com/MonitorControl/MonitorControl)
- Controls your external display brightness and volume and shows native OSD

## [Rectangle](https://rectangleapp.com/)
- Move and resize windows in macOS using keyboard shortcuts or snap areas

## [CCleaner](https://www.ccleaner.com/ccleaner-mac/download)
- Clean up Software

## [Appcleaner](https://www.macupdate.com/app/mac/25276/appcleaner)
- Uninstall your apps easily

## [MakeMKV](https://www.makemkv.com/download/)
- For Ripping Blu-ray or DVD to MKV

## [Handbrake](https://handbrake.fr/)
- The open source video transcoder
    - Use this with MakeMKV

## [Inkscape](https://inkscape.org/)
- Converter for `.svg` → `.pdf`





%% Preview %%
<dialog id="preview-dialog" style="width:380px;">
<div id="previewdiv">
<section>
<form action="" method="POST" enctype="multipart/form-data">
<div class="preview-container"><div><div class="col-md-12"><div class="form-group">
<div class="preview-zone hidden"><div class="box box-solid"><div class="box-header with-border"><button type="button" class="remove-preview">Reset</button>
<div><h1 style="text-align:left;margin-left:4px;margin-top:-20px;margin-bottom:-2px">Preview</h1></div><div class="box-tools pull-right"></div></div>
<div class="box-body"></div></div></div>
<div class="dropzone-wrapper"><div class="dropzone-desc"><h1>Drag and Drop</h1></div>
<input type="file" name="img_logo" class="dropzone"></div></div></div></div></div></form>
</section>
</div>
</dialog>

<script>
// Function to open the dialog
function openPreview() {
  var dialog = document.getElementById('preview-dialog');
  dialog.showModal();
}

// Function to close the dialog with animation
function closePreview() {
  var dialog = document.getElementById('preview-dialog');
  
  // Add a class to trigger the closing animation
  dialog.classList.add('closing');

  // Listen for animation end event
  dialog.addEventListener('animationend', function() {
    // After animation completes, close the dialog
    dialog.close();
    
    // Remove the closing class to reset for next time
    dialog.classList.remove('closing');
  }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
}

// Add event listener to the dialog's backdrop
document.getElementById('preview-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closePreview();
  }
});
</script>
<script src="script/preview.js"></script>

%% Excalidraw %%
<dialog id="excal-dialog">
<span><iframe src="https://excalidraw.com/" style="margin-top:-20px;top:0x; left:0; width:100%;height:100%;position:absolute;border:0;" allowfullscreen></iframe></span>
</dialog>

<script>
// Function to open the dialog
function openExcal() {
  var dialog = document.getElementById('excal-dialog');
  dialog.showModal();
}

// Function to close the dialog with animation
function closeExcal() {
  var dialog = document.getElementById('excal-dialog');
  
  // Add a class to trigger the closing animation
  dialog.classList.add('closing');

  // Listen for animation end event
  dialog.addEventListener('animationend', function() {
    // After animation completes, close the dialog
    dialog.close();
    
    // Remove the closing class to reset for next time
    dialog.classList.remove('closing');
  }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
}

// Add event listener to the dialog's backdrop
document.getElementById('excal-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeExcal();
  }
});
</script>

%% Preview %%
<dialog id="preview-dialog" style="width:380px;">
<div id="previewdiv">
<section>
<form action="" method="POST" enctype="multipart/form-data">
<div class="preview-container"><div><div class="col-md-12"><div class="form-group">
<div class="preview-zone hidden"><div class="box box-solid"><div class="box-header with-border"><button type="button" class="remove-preview">Reset</button>
<div><h1 style="text-align:left;margin-left:4px;margin-top:-20px;margin-bottom:-2px">Preview</h1></div><div class="box-tools pull-right"></div></div>
<div class="box-body"></div></div></div>
<div class="dropzone-wrapper"><div class="dropzone-desc"><h1>Drag and Drop</h1></div>
<input type="file" name="img_logo" class="dropzone"></div></div></div></div></div></form>
</section>
</div>
</dialog>

<script>
// Function to open the dialog
function openPreview() {
  var dialog = document.getElementById('preview-dialog');
  dialog.showModal();
}

// Function to close the dialog with animation
function closePreview() {
  var dialog = document.getElementById('preview-dialog');
  
  // Add a class to trigger the closing animation
  dialog.classList.add('closing');

  // Listen for animation end event
  dialog.addEventListener('animationend', function() {
    // After animation completes, close the dialog
    dialog.close();
    
    // Remove the closing class to reset for next time
    dialog.classList.remove('closing');
  }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
}

// Add event listener to the dialog's backdrop
document.getElementById('preview-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closePreview();
  }
});
</script>
<script src="script/preview.js"></script>

%% dillinger %%
<dialog id="dillinger-dialog">
<span><iframe src="https://dillinger.io/" style="margin-top:-20px;top:0x; left:0; width:100%;height:100%;position:absolute;border:0;" allowfullscreen></iframe></span>
</dialog>

<script>
// Function to open the dialog
function openDillinger() {
  var dialog = document.getElementById('dillinger-dialog');
  dialog.showModal();
}

// Function to close the dialog with animation
function closeDillinger() {
  var dialog = document.getElementById('dillinger-dialog');
  
  // Add a class to trigger the closing animation
  dialog.classList.add('closing');

  // Listen for animation end event
  dialog.addEventListener('animationend', function() {
    // After animation completes, close the dialog
    dialog.close();
    
    // Remove the closing class to reset for next time
    dialog.classList.remove('closing');
  }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
}

// Add event listener to the dialog's backdrop
document.getElementById('dillinger-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeDillinger();
  }
});
</script>

%% Study with me %%
<dialog id="study-dialog">
<span><h1>Study with me…</h1>
<span style="margin-bottom:0px"><p class="time js-time" style="display:inline"></p><span class="button-container">
<button class="go-button js-go-button">Start</button>
<button class="reset-button js-reset-button">Reset</button>
<button class="add-lap-button js-add-lap-button">Timestamp</button>
<div class="confirmation-container js-confirmation-container" style="float:right;margin-top:5px;position:relative;z-index:1;margin-right:5px" ></div></span></span>
<div class="todo-container ">
<div class="todo-app download-container"><div class="laps-list-wrapper"><ol class="laps-list js-lap-list"></ol></div>
<ul id="list-container"></ul><div class="todo-row"></div></div>
<div><button class="download-btn todo-btn"><i class="fa-solid fa-download"></i></button>
<input type="text" id="input-box" placeholder=" Add your task...">
<button onclick="addTask()" id="add" >Add</button></div>
</div>
</span></dialog>
<script src="script/study.js"></script>

<script>
// Function to open the dialog
function openStudy() {
  var dialog = document.getElementById('study-dialog');
  dialog.showModal();
}

// Function to close the dialog with animation
function closeStudy() {
  var dialog = document.getElementById('study-dialog');
  
  // Add a class to trigger the closing animation
  dialog.classList.add('closing');

  // Listen for animation end event
  dialog.addEventListener('animationend', function() {
    // After animation completes, close the dialog
    dialog.close();
    
    // Remove the closing class to reset for next time
    dialog.classList.remove('closing');
  }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
}

// Add event listener to the dialog's backdrop
document.getElementById('study-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeStudy();
  }
});
</script>

%% Navigation bar contents %%
<dialog id="navbar-dialog">
<h2 id="navclock" onload="showTime()" > </h2>
<span><br>
<input type="date" style="width:22px;float:left;margin-right:4px;margin-top:1px">
<form style="float:left;"  action="https://duckduckgo.com/" method="post" target="_blank"  onsubmit="this.submit(); this.reset(); return false;" novalidate><label><input style="width:280px"  type="search" name="q" placeholder="Web Search🦆" ></label></form>
<select id="links"  style="float:left;width:50px;margin-left:4px;margin-top:1px;">
<option value="">Link</option>
<option value="https://betterdiscord.app/">Better Discord</option>
<option value="https://date.nager.at/">Worldwide Public Holiday</option>
<option value="https://worldradiomap.com/">World Radio Map</option>
<option value="http://szimek.github.io/signature_pad/">Signature Pad</option>
<option value="https://silverweed.github.io/tiers/">Tierlist Maker</option>
<option value="https://redketchup.io/color-picker">RedKetchup</option>
<option value="https://paintmaps.com/">Paint Maps</option>
<option value="https://www.desmos.com/calculator">Desmos</option>
<option value="https://vscode.dev/">VS Code</option>
<option value="https://hancomdocs.com/home">Hancom Docs (Need Sign-In)</option>
<option value="https://r1.community.samsung.com/">Samsung Members</option>
</select>
<div style="float:left;margin-bottom:-3px;">
<div id="google_translate_element" style="float:left;margin-right:4px;"></div>
<a id="resbtn" onclick="ResetTranslate()"><button>Restore</button></a>
<span></span>
<button id="start" onclick="start()">White</button>
<span></span>
<button disabled id="stop" onclick="pause()">Noise</button>
</div>
<span style="float:left">
<button onclick="openStudy()">Study with me</button>
<span></span>
<button class="open-excal" onclick="openExcal()">Excalidraw</button>
<span></span>
<button class="open-preview" onclick="openPreview()">Preview</button>
<span></span>
<button class="open-dillinger" onclick="openDillinger()">Dillinger</button>
</span></span>
</dialog>

<script>
// Function to open the dialog
function openNavbar() {
  var dialog = document.getElementById('navbar-dialog');
  dialog.showModal();
}

// Function to close the dialog with animation
function closeNavbar() {
  var dialog = document.getElementById('navbar-dialog');
  
  // Add a class to trigger the closing animation
  dialog.classList.add('closing');

  // Listen for animation end event
  dialog.addEventListener('animationend', function() {
    // After animation completes, close the dialog
    dialog.close();
    
    // Remove the closing class to reset for next time
    dialog.classList.remove('closing');
  }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
}

// Add event listener to the dialog's backdrop
document.getElementById('navbar-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeNavbar();
  }
});

document.getElementById('preview-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeNavbar();
  }
});

document.getElementById('excal-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeNavbar();
  }
});

document.getElementById('dillinger-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeNavbar();
  }
});

document.getElementById('study-dialog').addEventListener('click', function(event) {
  if (event.target === this) {
    closeNavbar();
  }
});

</script>
<script src="script/navclock.js"></script>
<script src="script/nav-link.js"></script>














[^1]: Don't download Windows from microsoft homepage.
[^2]: It’s Free, but low performance on apple silicon