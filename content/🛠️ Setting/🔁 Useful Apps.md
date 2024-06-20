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
%% md-editor script %%
<script src="script/simplemde.min.js"></script>
<script src="script/md-editor.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% discord popup %%
<script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
        server: '1231921110811934840', // Filmnt 
        channel: '1240125504036540477', // #setting
        notifications: false,})
</script>
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
%% share&fullcreen button script %%
<script src="script/full-share.js"></script>
%% WhiteNoise Script %%
<script type="text/javascript" src="script/WN.js"></script>
%% Preview Script %%
<script src="script/preview.js"></script>
%% Excalidraw Script %%
<script src="script/excalidraw.js"></script>
%% Excalidraw Script %%
<script src="script/graph.js"></script>
%% Study with me Script %%
<script src="script/study.js"></script>
%% Food Script %%
<script src="script/meal.js"></script>
%% Schedule Script %%
<script src="script/scheduler.js"></script>
%% Navigation bar Script %%
<script src="script/navbar.js"></script>






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

















[^1]: Don't download Windows from microsoft homepage.
[^2]: It’s Free, but low performance on apple silicon