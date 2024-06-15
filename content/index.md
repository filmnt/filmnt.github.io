---
title: Home
tags:
  - contents
---
<title>Filmnt</title>
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

%% Link %%
<style>h1{margin-top:-20px;margin-bottom:-2px}h3{margin-top:-15px}#TopBtn,#DownBtn,#threedots{display:none}</style>
%% home navbar icon %%
<button title="Navigation" id="navbar" style="position:fixed;bottom: 30px;float:right;right: 28px;width: 40px;height:40px;opacity:0.3;z-index:1" onclick="openNavbar()"><i class="fa-solid fa-bars fa-xl"></i></button>
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
%% Study with me Script %%
<script src="script/study.js"></script>
%% Food Script %%
<script src="script/meal.js"></script>
%% Schedule Script %%
<script src="script/scheduler.js"></script>
%% Navigation bar Script %%
<script src="script/home-navbar.js"></script>




%% ip address & city %%
<h3 ><span id="hello"></span><span id='browser'>Disable AdBlock for greetings… 📛</span></h3>
<script src='script/agent.js'></script>

<h1 id="ClockWidget" onload="showTime()" > </h1> 
<script src="script/clock.js"></script>

%% weather & link button 1 %% 
<span>
<select id="switchLocation" style="width:80px !important">
            <option value=””>Weather</option>
            <option value=”37d57126d98/seoul/”>서울</option>
            <option value=”35d69139d69/tokyo/”>東京</option>
            <option value=”39d90116d41/beijing/”>北京</option>
            <option value="36d78n119d42/california/">California</option>
            <option value="40d71n74d01/new-york/">New York</option>
            <option value="51d51n0d13/london/">London</option>
            <option value="48d862d35/paris/">Paris</option>
            <option value="52d5213d40/berlin/">Berlin</option>
            <option value="n33d87151d21/sydney/">Sydney</option>
            <option value="49d28n123d12/vancouver/">Vancouver</option>
            <option value="40d42n3d70/madrid/">Madrid</option>
            <option value="0d54116d42/east-kalimantan/">Kalimantan</option>
            <option value="24d4554d38/abu-dhabi/">أَبُو ظَبْيٍ</option>
            <option value="28d6177d21/new-delhi/">नई दिल्ली</option>
            <option value="52d2321d01/warsaw/">Warszawa</option>
            <option value="46d957d45/bern/">Bärn</option>
            <option value="45d8215d98/zagreb/">Zagreb</option>
            <option value="21d03105d83/hanoi/">Hà Nội</option>
            <option value="59d3318d07/stockholm/">Stockholm</option>
            <option value="19d25n99d10/mexico-city/">Ciudad de México</option>
            <option value="30d0431d24/cairo/">القاهرة</option>
            <option value="1d35103d82/singapore/">Singapore</option>
            <option value="11d80n15d18/guinea-bissau/">Bissau</option>
            <option value="36d8110d18/tunis/">تونس</option>
            <option value="5d60n0d19/accra/">Accra</option>
            <option value="14d72n17d47/dakar/">Dakar</option>
            <option value="n15d3928d32/lusaka/">Lusaka</option>
            <option value="36d703d06/algiers-province/">الجزائر</option>
            <option value="11d8342d59/djibouti/">Djibouti</option>
            <option value="n13d9633d77/lilongwe/">Lilongwe</option>
            <option value="12d1315d06/ndjamena/">N'Djamena</option>
            <option value="47d5019d04/budapest/">Budapest</option>
            <option value="44d4326d10/bucharest/">Bucureşti</option>
            <option value="50d4530d52/kiev/">Київ</option>
            <option value="59d9110d75/oslo/">Oslo</option>
            <option value="48d1517d11/bratislava/">Bratislava</option>    
            <option value="37d9658d33/ashgabat/">Aşgabat</option>    
            <option value="51d1671d47/astana/">Астана</option>    
            <option value="40d7368d10/toshkent/">Тошкент</option>    
            
</select>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%93%93-Study/%E2%8C%9B-%EA%B5%90%EC%9C%A1%ED%95%99'" >⌛&nbsp;교육학</button>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%93%93-Study/%E2%9A%A0%EF%B8%8F-%EB%82%B4%EC%9A%A9%ED%95%99'"  >⚠️&nbsp;내용학</button>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%93%93-Study/%F0%9F%9A%A7-%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9%E1%84%87%E1%85%A7%E1%86%AF-%E1%84%80%E1%85%B5%E1%84%8E%E1%85%AE%E1%86%AF'"  >🚧&nbsp;연도별 기출</button>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%93%93-Study/%F0%9F%9A%AB-Download'"  >🚫&nbsp;Download</button>
<span></span>
</span>
<br>

%% weather & link button 2 %% 
<span>
<button data-cal-link="filmnt">✉️&nbsp;Contact</button><script type="text/javascript" src="script/contact.js"></script>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%92%A0-Obsidian'" >💠&nbsp;Obsidian</button>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%93%B1-One-UI'"  >📱&nbsp;One&nbsp;UI</button>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%94%81-Useful-Apps'" >🔁&nbsp;Useful Apps</button>
<span></span>
<button id=”Link” onclick="location.href='https://filmnt.github.io/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%94%A5-Firefox'"  >🔥&nbsp;Firefox</button>
<span></span>
</span>

%% Carousel (Weather, Map, Stock %%
<style>
.slideshow-container {position: relative;margin: auto;display:block;height:100%;width:100%;margin-top:6px;margin-bottom:-10px;}
.prev, .next {cursor: pointer;position: absolute;top: 35%;width: auto;padding: 5px;color:#646464;font-weight: bold;font-size: 20px;transition: 0.6s ease;border-radius: 0 3px 3px 0; user-select: none;}
.next {right: 0;border-radius: 3px 0 0 3px;}
</style>

<div class="slideshow-container" >
<div class="Slides">
<a class="weatherwidget-io" href="https://forecast7.com/en/37d57126d98/seoul/" data-label_1="서울" data-label_2="WEATHER" data-font="Noto Sans" data-icons="Climacons Animated" data-theme="weather_one" target=”_blank”> </a>
</div>

<div class="Slides">
<div id="mapping"></div>
</div>

<div class="Slides">
<iframe width="100%" height="450" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface" frameborder="0"></iframe>
</div>

<a class="prev" onclick="plusSlides(-1)"><i class="fa-solid fa-chevron-left fa-xl"></i></a>
<a class="next" onclick="plusSlides(1)"><i class="fa-solid fa-chevron-right fa-xl"></i></a>
</div>

<script src="script/carousel.js"></script>
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js'); setInterval('__weatherwidget_init()', 900000);

document.getElementById('switchLocation').addEventListener('change', function(){
      var widget = document.querySelector('.weatherwidget-io');
      widget.href = 'https://forecast7.com/en/'+this.value;
      widget.dataset.label_1 = this.options[this.selectedIndex].text;
      __weatherwidget_init();  
});

document.getElementById( 'switchLocation' ).onchange = function() {$('#switchLocation').prop('selectedIndex',0);};
</script>


%% discord embed %%
> <widgetbot server="1231921110811934840" channel="1231921110811934843" width="100%" height="600" ></widgetbot> <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>

