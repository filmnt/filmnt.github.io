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






## Add-ons
- <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" target="_blank" >Ublock-origin</a>
    - <a href="https://drive.filen.io/d/79bab8e3-3973-446c-86d1-6a0fc080713e#YOo12kRFlmxCLZ5U1xTSGseIoAAzFUaY" target="_blank" >ublock-backup</a>
        - List-KR filter (for korean)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/gesturefy/" target="_blank" >Gesturefy</a>
    -  <a href="https://drive.filen.io/d/53763a3e-f84d-42fa-975f-d28aba234926#QC118haumed0C3FcjgWMWSU5jwceMMXS" target="_blank" >gesturefy-backup</a> (language: korean)
    - Modify `Open custom URL`
- <a href="https://addons.mozilla.org/firefox/addon/youtube-nonstop/" target="_blank" >YouTube NonStop</a>
- <a href="https://addons.mozilla.org/firefox/addon/fireshot/" target="_blank" >FireShot</a>
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

## Multi-Profiles for privacy 
- Create New profile in `about:profiles`
    - (Optional) Open `Root Directory` and copy&paste used files to new profile folder 
- `Set as default profile` and Restart browser
    - (Optional) Delete bookmarks and History in New profile (Cookies, Caches, Logins, etc)
- Select a profile according to the purpose of use in `about:profiles`

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












