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




## Add-ons
- <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" target="_blank" >Ublock-origin</a>
    - <a href="https://mega.nz/file/nJ8CSKBJ#hlmq-LlgwAKosmM5k0iWO2zWPQW7bIqi5E7w3H7zQ9U" target="_blank" >ublock-backup</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/gesturefy/" target="_blank" >Gesturefy</a>
    -  <a href="https://mega.nz/file/eZdmSJaL#47SP05Cs5ihQvZCk6rL1FfJij-9PskmYkBlyedQ0fYQ" target="_blank" >gesturefy-backup</a> 
    - Modify `Open custom URL`
- <a href="https://addons.mozilla.org/en-US/firefox/addon/search_by_image" target="_blank" >Search by Image</a>
- <a href="https://addons.mozilla.org/firefox/addon/web-marker-draw-on-websites/" target="_blank" >Web Marker</a>
- <a href="https://addons.mozilla.org/firefox/addon/youtube-nonstop/" target="_blank" >YouTube NonStop</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/open-bookmarks-in-a-new-tab/" target="_blank" >Open bookmarks in a new tab</a>
  - Or... `about:config` -> `browser.tabs.loadBookmarksInTabs` -> `true`
- <a href="https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/" target="_blank" >Duckduckgo</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/" target="_blank" >TWP</a> 
    - <a href="https://mega.nz/file/SAEC2LCZ#zg6nFKiRhs8Hn2NWCMcp58mlaoQHTZLFLmHbcHYNaRQ" target="_blank" >twp-backup</a> (language: korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/simple-translate/" target="_blank" >Simple translate</a> 
    - <a href="https://mega.nz/file/KFkCUYgR#mMEvBiSCrjXbm5xhH-l5ZFxKPtEQqMfBgCCdYYlRBjU" target="_blank" >simpletranslate-backup</a> (language: korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/previews-for-ttv/" target="_blank" >Previews TTV</a> 
- <a href="https://addons.mozilla.org/en-US/firefox/addon/video-downloadhelper/" target="_blank" >Video Download Helper</a> 
- <a href="https://addons.mozilla.org/firefox/addon/pwas-for-firefox/" target="_blank" >PWAs</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/" target="_blank" >Bitwarden</a>
- <a href="https://addons.mozilla.org/en-US/firefox/addon/dcrefresher-reborn/" target="_blank" >DCRefresher Reborn</a>(For Korean)



%% sticky notes %%
<div id="sticky-container" class="sticky-container"></div>