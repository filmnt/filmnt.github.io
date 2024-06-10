---
tags:
  - Setting
  - contents
---
%% jQuery script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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







## Broswsers based on Firefox 
- <a href="https://mullvad.net/en/download/browser/windows" target="_blank" >Mullvad Browser</a> [^1] 
- <a href="https://librewolf.net/" target="_blank" >Librewolf</a> [^1]
- <a href="https://www.waterfox.net/" target="_blank" >Waterfox</a>


---

## Add-ons
- <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" target="_blank" >Ublock-origin</a>
    - <a href="https://drive.filen.io/d/79bab8e3-3973-446c-86d1-6a0fc080713e#YOo12kRFlmxCLZ5U1xTSGseIoAAzFUaY" target="_blank" >ublock-backup</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/gesturefy/" target="_blank" >Gesturefy</a>
    -  <a href="https://drive.filen.io/d/53763a3e-f84d-42fa-975f-d28aba234926#QC118haumed0C3FcjgWMWSU5jwceMMXS" target="_blank" >gesturefy-backup</a> (language: korean)
    - Modify `Open custom URL`
- <a href="https://addons.mozilla.org/firefox/addon/fireshot/" target="_blank" >FireShot</a>
- <a href="https://addons.mozilla.org/firefox/addon/popup-tab/" target="_blank" >Popup Tab</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/open-bookmarks-in-a-new-tab/" target="_blank" >Open bookmarks in a new tab</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/" target="_blank" >Duckduckgo</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/" target="_blank" >Bitwarden</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/" target="_blank" >TWP</a> 
    - <a href="https://drive.filen.io/d/033d6f3f-2fec-4ddc-be7c-78848c2daebd#3zSLdErIAklQLfTgdUOAbQABpZ0KZIJ7" target="_blank" >twp-backup</a> (language: korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/simple-translate/" target="_blank" >Simple translate</a> 
    - <a href="https://drive.filen.io/d/1ae8280f-7c22-4201-b2ab-09b303d546b8#aDrPFJbN9wGaJ1DdTWUGj5RaqCJD6Pkl" target="_blank" >simpletranslate-backup</a> (language: korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/bitly-shorten/" target="_blank" >Bitly</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/view-page-archive/" target="_blank" >WebArchives</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/previews-for-ttv/" target="_blank" >Previews TTV</a> 
    -  <a href="https://drive.filen.io/d/01bd43e4-40e5-4d41-84c8-720a1ad3d57a#GNvydUkHICZ2rFvDKvGMr8Cp3ZIsihgF" target="_blank" >previews-backup</a> (language: korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/chzzk-pip/" target="_blank" >Chzzk-PIP</a>(For Korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/dc-refresher/" target="_blank" >DC Refresher</a>(For Korean)
- (Advanced) <a href="https://mullvad.net/en/download/browser/extension" target="_blank" >Mullvad Browser Extension</a> 
    - <a href="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls" target="_blank" >DoH Setting</a>
    - <a href="https://adguard-dns.io/kb/general/dns-providers/" target="_blank" >Known DNS Providers</a>
    - <a href="https://www.dnscheck.tools/" target="_blank" >DNS Check Tools</a>


---

## Multi-Profiles for privacy (Firefox or Waterfox)
- Create New profile in `about:profiles`
    - (Optional) Open `Root Directory` and copy&paste used files to new profile folder 
- `Set as default profile` and Restart browser
    - (Optional) Delete bookmarks and History in New profile (Cookies, Caches, Logins, etc)
- Select a profile according to the purpose of use in `about:profiles`
- (Advanced) Download `user.js` and move to `new profile-Root Directory`
    -  <a href="https://github.com/yokoffing/BetterFox" target="_blank" >BetterFox</a>
        -  `user.js` (this includes others) [^2]
        - `Fastfox.js`
        - `Securefox.js`
        - `Peskyfox.js`
        - `Smoothfox.js`
        - For more privacy, security and anti-tracking…
            - <a href="https://github.com/arkenfox/user.js/" target="_blank" >ArkenFox (user.js)</a>
><font color="#ff0000"> If you're annoyed, just use `Mullvad browser`  or `Librewolf`</font>
- (<font color="#ff0000">Caution</font>) Deleting `user.js` does not initialize `about:config` setting
    - You can customize `about:config`

---

## Browser Setting (Waterfox)

![[Pasted image 20240413050513.png]]
![[Pasted image 20240413050548.png]]
![[Pasted image 20240413050625.png]]
![[Pasted image 20240413050715.png]]
![[Pasted image 20240413050735.png]]
![[Pasted image 20240413050756.png]]
![[Pasted image 20240413050819.png]]
![[Pasted image 20240413050847.png]]
![[Pasted image 20240413050914.png]]

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

%% Study Timer %%
<dialog id="study-dialog">
<span>
<h1 style="margin-top:-20px;margin-bottom:-2px">Study with me</h1>
<span style="margin-bottom:0px"><p class="time js-time" style="display:inline"></p><span class="button-container">
<button class="go-button js-go-button">Start</button>
<button class="reset-button js-reset-button">Reset</button>
<button class="add-lap-button js-add-lap-button">Timestamp</button>
</span></span>
<div class="confirmation-container js-confirmation-container"></div>
<div class="laps-list-wrapper"><ol class="laps-list js-lap-list"></ol></div>
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











[^1]: Need additional setting in `about:config` (<font color="#ff0000">Do It Yourself…</font>) regarding fingerprinting
[^2]: See `Common Overrides`and Use `VS Code`