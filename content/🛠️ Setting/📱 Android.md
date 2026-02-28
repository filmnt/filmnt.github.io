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



> <h3>This post is for Tablets (Android 14 ⬆️)</h3> 

![[OH.png]]

---

# Notifications & Ringtones
  - <a href="https://mega.nz/file/iQlGDAxZ#qrlApy8mFvFlcvTZzLwpvl9nK24UbgmMXcwG950-EdI" target="_blank" >Notifications</a> (162kb)
  - <a href="https://mega.nz/file/GRtAGCrD#rrLpNI7pmk-uYPe5DTmHcD_bQGGVS3TvGYbwdhEZJu8" target="_blank" >Ringtones</a> (2.3mb)
  - Move to `Notifications` & `Ringtones` Folder
      - Create Folder if it doesn’t exist
  - `Settings`→ `Sounds and vibration`→ `Ringtone`/`Notification sound` → `Custom`

---

# Apps
## Github or Website

- Just… <a href="https://github.com/0xf104a/Mirror/releases" target="_blank" >Mirror</a>
- Web Browser <a href="https://www.mozilla.org/en-US/firefox/all/mobile-release/" target="_blank" >Firefox</a>
    - Add-ons
        - <a href="https://addons.mozilla.org/en-US/android/addon/ublock-origin/" target="_blank" >uBlock Origin</a> (Ad-Block)
            - <a href="https://mega.nz/file/nJ8CSKBJ#hlmq-LlgwAKosmM5k0iWO2zWPQW7bIqi5E7w3H7zQ9U" target="_blank" >ublock-backup</a>
        - <a href="https://addons.mozilla.org/en-US/android/addon/video-background-play-fix/" target="_blank" >Video Background Play Fix</a> (Background Play)
    - about:config
      - chrome://geckoview/content/config.xhtml -> general.aboutConfig.enabled -> `true`
      - pdfjs.ignoreDestinationZoom -> `true` 
- File Sync <a href="https://github.com/researchxxl/syncthing-android/releases" target="_blank" >Syncthing (Fork)</a>
- Note-taking <a href="https://github.com/obsidianmd/obsidian-releases/releases" target="_blank" >Obsidian</a>
    - See <button id=”Link” onclick="window.open('/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%92%A0-Obsidian', '_blank')" >💠&nbsp;Obsidian</button>
- Notion Alternatives <a href="https://github.com/anyproto/anytype-kotlin/releases" target="_blank" >Anytype</a>
- Image manipulation <a href="https://github.com/T8RIN/ImageToolbox/releases" target="_blank" >Image Toolbox</a>
- Cleaning Tool <a href="https://github.com/d4rken-org/sdmaid-se/releases" target="_blank" >SD Maid</a>
- YouTube music player & downloader <a href="https://ymusic.io/" target="_blank" >YMusic</a>
- Firefox Alternatives <a href="https://f-droid.org/packages/org.mozilla.fennec_fdroid/" target="_blank" >Fennec</a>
- 2FA <a href="https://github.com/beemdevelopment/Aegis/releases" target="_blank" >Aegis Authenticator</a>
- Twitch Player <a href="https://github.com/crackededed/Xtra/releases" target="_blank" >Xtra</a>
- CPDT <a href="https://maxim-saplin.github.io/cpdt_results/?download" target="_blank" >Benchmark</a>
- Fake <a href="https://github.com/mcastillof/FakeTraveler/releases" target="_blank" >Traveler</a>
- Mesh Network for SMB or Share <a href="https://tailscale.com/download/android" target="_blank" >Tailscale</a>
- DNS + Firewall + VPN <a href="https://github.com/celzero/rethink-app/releases" target="_blank" >Rethink</a>
  - <a href="https://adguard-dns.io/kb/general/dns-providers/" target="_blank" >Known DNS Providers</a>
  - <a href="https://ipleak.net/" target="_blank" >IP leak test</a>
- Revanced <a href="https://github.com/ReVanced/revanced-manager/releases/" target="_blank" >Manager</a>  
- VNC Client <a href="https://github.com/gujjwal00/avnc/releases" target="_blank" >AVNC</a>
- FOSS <a href="https://github.com/f-droid/fdroidclient/releases" target="_blank" >F-Droid</a>
- Get Updates from Website <a href="https://github.com/ImranR98/Obtainium/releases" target="_blank" >Obtainium</a>
## Play Store
- Live <a href="https://play.google.com/store/apps/details?id=io.wallpaperengine.weclient" target="_blank" >Wallpaper Engine</a>
- PDF Annotation <a href="https://play.google.com/store/apps/details?id=com.orion.notein.global" target="_blank" >Notein</a>
- PDF Viewer <a href="https://play.google.com/store/apps/details?id=com.xodo.pdf.reader" target="_blank" >Xodo</a>
- Mic To <a href="https://play.google.com/store/apps/details?id=com.yd4011439.mic.to.speaker.and.bluetooth" target="_blank" >Speaker & Bluetooth</a>
- odt Viewer <a href="https://play.google.com/store/apps/details?id=com.collabora.libreoffice" target="_blank" >Collabora Office</a>
- Stock <a href="https://play.google.com/store/apps/details?id=app.stockevents.android" target="_blank" >Widget</a>
- iOS <a href="https://play.google.com/store/apps/details?id=com.inova.ios_14_iconpack" target="_blank" >Icon Pack</a>
- File <a href="https://play.google.com/store/apps/details?id=com.alphainventor.filemanager" target="_blank" >Manager</a>

---

# Termux (Linux on Android)
![[Linux.png]]
- Could be needed later...
    - <a href="https://www.xfce-look.org/s/XFCE/p/1403328/" target="_blank" >WhiteSur-Dark.tar.xz</a> (0.20mb)
    - <a href="https://www.xfce-look.org/p/1648124" target="_blank" >macOS-Monterey.tar.gz</a> (3.94mb)
    - <a href="https://www.xfce-look.org/p/1400021/" target="_blank" >Mkos-Big-Sur.tar.xz</a> (21.04mb)
> `Dimensity` or `Exynos` could leave you in trouble…
- (<font color="#ff0000">Not Optional</font>) `Error Solutions`:  Process completed (signal 9) - press Enter
    - Install `LADB` from <a href="https://github.com/hyperio546/ladb-builds/releases" target="_blank" >Here</a> (`app-debug.apk`)  
        - There are many ADB tools…
    - Connect `Wifi` and Enable `Wireless debugging` in `Developer options` 
        - (Developer options) `Settings` → `About tablet` → `Software information` → Tap `Build number` several times→ Back to `Settings` 
    - Get `port number`+`pairing code` and Enter both those values into `LADB`
        - Use multitasking options (`Split screen view` or `Pop-up view`)
        - <a href="https://youtu.be/6UO5tb_eKxY?feature=shared&t=194" target="_blank" >YouTube Guide</a>
            - See 3:14-5:40
    - Confirm connection
        - `adb devices`
    - Run the following commands
        - `adb shell "/system/bin/device_config set_sync_disabled_for_tests persistent"`
        - `adb shell "/system/bin/device_config put activity_manager max_phantom_processes 2147483647"`
        - `adb shell settings put global settings_enable_monitor_phantom_procs false`
        - `adb shell pm grant com.termux.x11 android.permission.WRITE_SECURE_SETTINGS`
    - Exit `LADB` and Disable `Wireless debugging`
     - You may need this…
        - `...` → `More` → `Restart` 
> - If You want to reinstall, `Termux` → `App info` → `Storage` → `Clear data` and <font color="#ff0000">Wait</font> for a while
 >   - No need to repeat the above process
- Install <a href="https://github.com/termux/termux-app/releases/download/v0.118.3/termux-app_v0.118.3+github-debug_arm64-v8a.apk" target="_blank" >Termux</a> (Ver 0.118.3) and <a href="https://github.com/termux/termux-api/releases" target="_blank" >Termux-API</a>
    - Allow permissions as following
            ![[TM-1.png]]
            ![[TM-2.png]]
- Install <a href="https://github.com/termux/termux-x11/releases" target="_blank" >X-11</a> 
    - Click `app-arm64-v8a-debug.apk`
- Open `Termux` and Run the commands
  - It takes 10-30 minutes (varies by speed)
  - For More Information, <a href="https://github.com/sabamdarif/termux-desktop" target="_blank" >Termux-Desktop</a>
    ```shell
    bash <(curl -Lf https://raw.githubusercontent.com/sabamdarif/termux-desktop/main/setup-termux-desktop) && pkg install -y fcitx5* && wget https://raw.githubusercontent.com/sabamdarif/Termux-AppStore/refs/heads/src/appstore && chmod +x appstore && ./appstore --install && pkg install xdg-utils && xdg-mime default thunar.desktop inode/directory
    ```
  -  `Generic (with hardware acceleration)`
  -  `XFCE` - `Stock`
  - `Username`

> After Installation, Enter `exit` and Open `Termux:X11` - `Preferences` (Not `Termux`)
        ![[X11-1.png]]
        ![[X11-2.png]]
![[X11-3.png]]
![[X11-4.png]]
- `Back` Key = `Keyboard`, `Ctrl + C` = `Cancel`, `exit` = exit
  - `tx11start` = Run termux-desktop
- (Recommend) Fix Sound Error
    - Open `/data/data/com.termux/files/usr/etc/pulse/default.pa` and Modify `Last Line` as below
    ```shell
    load-module module-aaudio-sink
    ```
- (Optional) For Korean…
    - Keyboard 
        - `Settings` - `Fcitx 5 Configuration` → Add `Hangul` to the left
         - Modify `Trigger Input Method` in `Global Options` tab
     - Fonts
         - `Terminal` → `debian` → `sudo apt install fonts-nanum fonts-noto fonts-roboto -y` → `exit`
> [!NOTE] S Pen Compatibility
> - You can use `S Pen Button` as `Right-Click`
> - Use `S Pen Button` with `Gesturefy` on Firefox
>     - See <button id="Link" onclick="location.href='%F0%9F%94%A5-Firefox'">🔥&nbsp;Firefox</button>  Add-ons

> <font color="#ff0000">`Live-streaming` or `Termux on DeX` can consume battery even when using a high-power charger</font>


%% sticky notes %%
<div id="sticky-container" class="sticky-container"></div>