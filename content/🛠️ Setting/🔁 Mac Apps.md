---
tags:
  - Setting
  - contents
---
%% jQuery & qr script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="script/qrcode.js"></script>
%% html2canvas script %%
<script src="script/html2canvas.js"></script>
%% Webcam script %%
<script src="script/cam.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% progressbar script %%
<script>
function getCurrentProgress(){
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return ((((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(1);}
function updateUI() {const percent = getCurrentProgress();
  const barItem = document.getElementsByClassName('bar')[0];barItem.style.width = `${percent}%`;
  const counterItem = document.getElementsByClassName('value')[0];
  if (percent>100){counterItem.textContent = `100%`}else{counterItem.textContent = `${percent}%`;}}
updateUI();setInterval(updateUI, 1000);
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
<script src="script/resize-dialog.js"></script>
%% Sticky Notes Script %%
<script src="script/sticky-script.js"></script>
%% Calculator Script %%
<script src="script/calc.js"></script>





# [Scrcpy](https://github.com/Genymobile/scrcpy)
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
    - <a href="https://mega.nz/file/LV9lAKJL#WJHIe4iPei38H7_mZ2De0G2a0GwZ7gjuMZYWtbzr4jE" target="_blank" >script file</a> (for Mac OS)
        - Modify script and Export as  `application`  and Move to `application folder` 

# [macUSB](https://github.com/Kruszoneq/macUSB/releases)
- Create bootable drives
  - Download `Installer` with <a href="https://github.com/ninxsoft/Mist/releases" target="_blank" >Mist</a>


# [Syncthing](https://syncthing.net/downloads/)
- Continuous file synchronization program (`free`)
    - Mac $\leftrightarrow$ Android $\leftrightarrow$ Win

# [Ferdium](https://github.com/ferdium/ferdium-app/releases)
- All your services in one place, built by the community

# [DeskPad](https://github.com/Stengo/DeskPad/releases)
- A virtual monitor for screen sharing

# [Launchie](https://github.com/nick-friedrich/launchie-launchpad-replacement-mac-os/releases)
- The Launchpad Replacement macOS 26 Deserves 

# [Paralles Desktop](https://www.parallels.com/products/desktop/)
- Run Windows on Mac
    - Expensive but high performance
    - Use `Windows Pro Key` and `Paralles Windows Image` [^1]
  
# [Adguard](https://adguard.com/)
- ad Blocker

# [Annotate](https://github.com/epilande/Annotate/releases)
- Annotation tool for macOS 

# [Flameshot](https://github.com/flameshot-org/flameshot)
- Powerful yet simple to use screenshot software

# [Tailscale](https://tailscale.com/download)
- Mesh Network for SMB or Share

# [Amphetamine](https://apps.apple.com/app/amphetamine/id937984704)
- Keep-awake Utility

# [CPDT Benchmark](https://maxim-saplin.github.io/cpdt_results/?download)
- Diskmark

# [NeoHtop](https://github.com/Abdenasser/neohtop/releases)
- System monitoring on steroids

# [eqMac](https://eqmac.app/)
- System Audio processing
- <a href="https://github.com/jaakkopasanen/AutoEq/blob/master/results/RANKING.md" target="_blank" >Ranking</a> - `Over-ear` and `In-ear` headphones 

# [BudsManager](https://github.com/ThePBone/GalaxyBudsClient/releases)
-  An unofficial manager for the Buds, Buds+, Buds Live and Buds Pro

# [Karabiner](https://karabiner-elements.pqrs.org/)
- A powerful and stable keyboard customizer
    - For `Paralles` and `VNC` language switcher
    - source: <a href="https://blog.naver.com/hankboy/221200885234" target="_blank" >blog.naver.com/hankboy/221200885234</a>
        - <a href="https://archive.is/yxigT" target="_blank" >mirror </a> (archive) 

# [KeyboardCleanTool](https://folivora.ai/keyboardcleantool/)
- Block all Keyboard and TouchBar input

# [LinearMouse](https://linearmouse.app/)
- Customize Mouse and Trackpad


# [Pock](https://pock.app/) 
- Widgets manager for MacBook `Touch Bar`


# [Runcat](https://kyome.io/runcat/index.html)
- System Info in menu bar

# [Coconut Battery](https://coconut-flavour.com/coconutbattery/)
- Battery Info

# [Macs Fan Control](https://crystalidea.com/macs-fan-control/download)
-  Monitor and control fans `Not for Macbook Air`


# [Monitor Control](https://github.com/MonitorControl/MonitorControl)
- Controls your external display brightness and volume and shows native OSD

# [Rectangle](https://rectangleapp.com/)
- Move and resize windows in macOS using keyboard shortcuts or snap areas

# [CCleaner](https://www.ccleaner.com/ccleaner-mac/download)
- Clean up Software

# [Appcleaner](https://www.macupdate.com/app/mac/25276/appcleaner)
- Uninstall your apps easily

# [MakeMKV](https://www.makemkv.com/download/)
- For Ripping Blu-ray or DVD to MKV

# [Handbrake](https://handbrake.fr/)
- The open source video transcoder
    - Use this with MakeMKV

# [Inkscape](https://inkscape.org/)
- Converter for `.svg` → `.pdf`

# [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- A feature-rich command-line audio/video downloader 

# [ExifTool](https://github.com/exiftool/exiftool)
- ExifTool meta information reader/writer

# [qpdf](https://github.com/qpdf/qpdf)
- A content-preserving PDF document transformer 




%% sticky notes %%
<div id="sticky-container" class="sticky-container"></div>






[^1]: Don't download Windows from microsoft homepage.
[^2]: It’s Free, but low performance on apple silicon