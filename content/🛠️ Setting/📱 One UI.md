---
tags:
  - Setting
  - contents
---
%% jQuery script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
%% html2canvas script %%
<script src="script/html2canvas.js"></script>
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







> <h3>This post is for the Galaxy Tab S series (One UI 6.1 ⬆️)</h3> 

![[OH.png]]

---

# Apps
## F-Droid or Github

- Just… <a href="https://f-droid.org/en/packages/com.polar.mirror/" target="_blank" >Mirror</a>
- Revanced <a href="https://github.com/revanced-apks/build-apps/releases" target="_blank" >Releases</a>
    - See `Assets`
    - Use <a href="https://github.com/ReVanced/GmsCore/releases" target="_blank" >MicroG</a> for `YouTube` and `Music`
-  Calendar Alternative <a href="https://github.com/mhss1/MyBrain/releases" target="_blank" >My Brain</a>
- Gallery <a href="https://f-droid.org/packages/deckers.thibault.aves.libre/" target="_blank" >Aves Libre</a>
- 2FA <a href="https://f-droid.org/en/packages/com.beemdevelopment.aegis/" target="_blank" >Aegis Authenticator</a>
- Twitch Player <a href="https://f-droid.org/en/packages/com.github.andreyasadchy.xtra/" target="_blank" >Xtra</a>
- Nintendo Switch emulator <a href="https://github.com/sudachi-emu/sudachi/releases" target="_blank" >Sudachi</a>
    - Mesa Turnip drivers <a href="https://github.com/K11MCH1/AdrenoToolsDrivers/releases" target="_blank" >AdrenoToolsDrivers</a>
- Proton <a href="https://f-droid.org/en/packages/ch.protonvpn.android/" target="_blank" >VPN</a>
- Remote Desktop <a href="https://github.com/rustdesk/rustdesk/releases" target="_blank" >Rustdesk</a>
- VNC Client <a href="https://f-droid.org/en/packages/com.gaurav.avnc/" target="_blank" >AVNC</a>

## Play Store

-  Web Browser <a href="https://play.google.com/store/apps/details?id=net.waterfox.android.release" target="_blank" >Waterfox</a>
    - Add-ons
        - <a href="https://addons.mozilla.org/en-US/android/addon/ublock-origin/" target="_blank" >uBlock Origin</a>
        - <a href="https://addons.mozilla.org/en-US/android/addon/video-background-play-fix/" target="_blank" >Video Background Play Fix</a>
-  Headphone specific EQ <a href="https://play.google.com/store/apps/details?id=com.pittvandewitt.wavelet" target="_blank" >Wavelet</a>
    - Disable `Dolby Atmos` and `Equailzer` → `Normal` in `Settings`
    - Enable `Legacy mode` 
    - `Limiter` 
        - `Threshold` → `-10dB` and Disable `Automatic post-gain`
    - Use `your favorite EQ` in `Graphic equalizer`
    - Over-ear & In-ear Headphones <a href="https://github.com/jaakkopasanen/AutoEq/blob/master/results/RANKING.md" target="_blank" >Ranking</a>
-  Identify Music <a href="https://play.google.com/store/apps/details?id=com.shazam.android" target="_blank" >Shazam</a>
    - Add to `Quick Panel`
-  PDF Editor <a href="https://play.google.com/store/apps/details?id=com.xodo.pdf.reader" target="_blank" >Xodo</a>
-  Microsoft <a href="https://play.google.com/store/apps/details?id=com.microsoft.translator" target="_blank" >Translator</a>
-  AdBlocker <a href="https://play.google.com/store/apps/details?id=com.adguard.android.contentblocker" target="_blank" >Adguard</a>
    - Buy <a href="https://www.stacksocial.com/search?utf8=%E2%9C%93&query=adguard" target="_blank" >Here </a> (Stacksocial)
-  Password Manager <a href="https://play.google.com/store/apps/details?id=com.x8bit.bitwarden" target="_blank" >Bitwarden</a>
-  Cloud Storage <a href="https://play.google.com/store/apps/details?id=io.filen.app" target="_blank" >Filen</a>
    - See <button id=”Link” onclick="window.open('https://filmnt.github.io/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%94%81-Useful-Apps','_blank' )"  >🔁&nbsp;Useful Apps</button>
-  File Sync <a href="https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid" target="_blank" >Syncthing</a>
-  Note-taking <a href="https://play.google.com/store/apps/details?id=md.obsidian" target="_blank" >Obsidian</a>
    - See <button id=”Link” onclick="window.open('https://filmnt.github.io/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%92%A0-Obsidian', '_blank')" >💠&nbsp;Obsidian</button>
- Notion Alternatives <a href="https://download.anytype.io/" target="_blank" >Anytype</a>
-  iOS <a href="https://play.google.com/store/apps/details?id=com.inova.ios_14_iconpack" target="_blank" >Icon Pack</a>
-  LED <a href="https://play.google.com/store/apps/details?id=com.bitdance.ledbanner.flash.ledbanner" target="_blank" >Banner</a>
-  For `Widgets pop-up` <a href="https://play.google.com/store/apps/details?id=com.stock.widget" target="_blank" >Stock Widget</a>
    - See `One Hand Operation +`

> Use `Secure Folder`(Samsung App) for Privacy.

---

# Settings 
- Notifications & Ringtones
    - <a href="https://drive.filen.io/d/8d452965-d5f3-42e8-998a-03224e799c53#1NwGBkkkpnRaLyqfjsS8fdHPmJyMlZPV" target="_blank" >Notifications</a>
    - <a href="https://drive.filen.io/d/842314c9-4817-4a76-9a97-8f52e62e19ef#PlyV9reymGgmMRYcFhbURMAABuYaOY9j" target="_blank" >Ringtones</a>
    - Move to `Notifications` & `Ringtones` Folder
        - Create Folder if it doesn’t exist
    - `Settings`→ `Sounds and vibration`→ `Ringtone`/`Notification sound` → `Custom`
        - Default Ringtone: `Over the horizon`
        - Default Notification Sound: `Spaceline`
- Connections (DNS-over-HTTPS)
    - `Settings`→ `Connections`→ `More connection settings`→ `Private DNS` → `Private DNS provider hostname`
        - Set `dns.mullvad.net` (Recommend)
        - There are many DNS providers…
            - <a href="https://adguard-dns.io/kb/general/dns-providers/" target="_blank" >Known DNS Providers</a>
- `Developer options`
    - (Developer options) `Settings` → `About tablet` → `Software information` → Tap `Build number` several times→ Back to `Settings` 
    - `Window animation scale` → `.5x` 
    - `Transition animation scale` → `.5x`
    - `Animator duration scale` → `.5x`
    - `Minimum width`
        - 11’’ → `950dp`
        - 12.4’’ or 14.6’’ → `1200dp`
        - `Fold` → `450dp`
        - `Restore`: `Settings` → `Display` → `Screen zoom`
    - (Optional) Enable `Stay awake`
        - Screen will never sleep while charging


---
# Hide Status & Navigation bar
- Install `LADB` from `PlayStore` or <a href="https://github.com/hyperio546/ladb-builds/releases" target="_blank" >Here</a> (`app-debug.apk`)
    - There are many ADB tools…
- Disable `AdGuard`(adblocker) and `VPN`
- Connect `Wifi` and Enable `Wireless debugging` in `Developer options` 
    - (Developer options) `Settings` → `About tablet` → `Software information` → Tap `Build number` several times→ Back to `Settings` 
- Get `port number`+`pairing code` and Enter both those values into `LADB`
    - Use multitasking options (`Split screen view` or `Pop-up view`)
    - Confirmation of connection: `adb devices`
    - <a href="https://youtu.be/6UO5tb_eKxY?feature=shared&t=194" target="_blank" >YouTube Guide</a>
        - See 3:14-5:40
- Choose the options you want from the following on `LADB`
    - Hide status bar: `adb shell settings put global policy_control immersive.status=* `
    - Hide navigation bar: `adb shell settings put global policy_control immersive.navigation=* `
    - Hide Both: `adb shell settings put global policy_control immersive.full=*`
    - Restore: `adb shell settings put global policy_control null*`
- Exit `LADB` and Disable `Wireless debugging`
> [!NOTE] 
> - If you are using `Taskbar` or `Button-Navigation bar`, this option may not work well…
> - I'm not a sadist, I don't want to hurt you…

---

# Termux (Linux on Galaxy)
![[Linux.png]]
- <a href="https://drive.filen.io/d/5433cbfe-15b1-4d96-8b9d-df6a3d5131e2#aTjjmgGLn3krSzAdakLyblMHTjWWLttr" target="_blank" >Wallpaper</a>
- (<font color="#ff0000">Not Optional</font>) `Error Solutions`:  Process completed (signal 9) - press Enter
    - See `Hide Status & Navigation bar` (ToC)
    - Run the following commands on `LADB`
        - `adb shell "/system/bin/device_config set_sync_disabled_for_tests persistent"`
        - `adb shell "/system/bin/device_config put activity_manager max_phantom_processes 2147483647"`
        - `adb shell settings put global settings_enable_monitor_phantom_procs false`
> - If You want to reinstall, `Termux` → `App info` → `Storage` → `Clear data` and <font color="#ff0000">Wait</font> for a while
 >   - No need to repeat the above process
- Install <a href="https://f-droid.org/packages/com.termux/" target="_blank" >Termux</a> (Ver 0.118.0)
    - Click `Download APK (97Mib)`
    - Allow permissions as following
            ![[TM-1.png]]
            ![[TM-2.png]]
- Open `Termux` and Run the commands
    ```shell
    curl -sL https://raw.githubusercontent.com/phoenixbyrd/Termux_XFCE/main/install.sh -o install.sh && chmod +x install.sh && ./install.sh
    ```
- Pick your `username` and Follow the prompts (It takes 10-20 minutes)
    - After Installation, Enter `exit` and Open `Termux:X11` - `Preferences` (Not `Termux`)
        ![[X11-1.png]]
        ![[X11-2.png]]
![[X11-3.png]]

- `Sound Output`
    - Open `Termux` and Enter `start`
    - Open `File Explorer` and set location `/data/data/com.termux/`
    - Search `default.pa`(Use `Back-gesture` to use keyboard) and open `default.pa`
    - At the bottom of `default.pa`, Modify and Save as following
         ![[defaultpa-1.png]]
     - Click `Exit Button` and Restart `Termux - start`
     - Sometimes the sound won't work
         - `Termux` - `App info` - `Force stop` and `Storage` - `Clear cache` (<font color="#ff0000">Do Not Clear data</font>)
 - You can customize `Panel`, `Screensaver`, `Mouse` and `startup`
     - Try to disable `conky` in `Session and Startup`
- (Optional) Keyboard for Korean
    - Works on `Firefox`
     - Run the command `pkg install libuv` and `pkg install fcitx5*` before `start`
     - `start` and `Settings` - `Fcitx 5 Configuration` - Add `Hangul` to the left
     - Modify `Trigger Input Method` in `Global Options` tab
         - For Chinese or Japanese… See <a href="https://github.com/termux/termux-packages/issues/19788" target="_blank" > This </a> 
             - I don't know if it's going to work…

> [!NOTE] S Pen Compatibility
> - You can use `S Pen Button` as `Right-Click`
> - Use `S Pen Button` with `Gesturefy` on Firefox
>     - See <button id=”Link” onclick="location.href='https://filmnt.github.io/home/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%94%A5-Firefox'"  >🔥&nbsp;Firefox</button>  Add-ons
> - Disable `Air command` using `Modes and Routines`


> <font color="#ff0000">`Live-streaming` or `Termux on DeX` can consume battery even when using a high-power charger</font>
---

# Good Guardians
- Install from `Store`
## Galaxy App Booster
- Boost up apps performance

---
## Thermal Guardian
![[TG-1.png]]
![[TG-2.png]]

---

# Good Lock 
- Install from `Store`

## NavStar (Swipe gestures)
![[NV-1.png]]
- 👍 `Settings` → `Display` → `Navigation bar`
![[NV-2.png]]
![[NV-3.png]]

---

## One Hand Operation +            
- Enable `Auto Rotate` and Check `Touch width/Size` in `Portrait/Landscape mode`
        ![[OHO-1.png]]
        ![[OHO-2.png]]
        ![[OHO-3.png]]
        ![[OHO-4.png]]
        ![[OHO-5.png]]
        ![[OHO-6.png]]
        ![[OHO-7.png]]
---
## MultiStar
![[MS-1.png]]
![[MS-2.png]]

![[MS-3.png]]
![[MS-4.png]]

---
## Pentastic
- `Settings` → `Advanced features` → `S Pen`
    - You can disable `Air command` with `Modes and Routines`
![[PS-0.png]]
![[PS-1.png]]
![[PS-2.png]]

---
## QuickStar
![[QS-1.png]]
![[QS-2.png]]
![[QS-3.png]]
![[QS-4.png]]

---

## NotiStar
- Use `NotiStar`on `Lock Screen`
        
---

## SoundAssistant
![[SA-1.png]]
![[SA-2.png]]
![[SA-3.png]]

---

## NiceShot
![[NS-1.png]]
![[NS-2.png]]







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
<button onclick="openStudy()">Study with me…</button>
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








