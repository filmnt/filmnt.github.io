---
title: 𝐹𝑖𝑙𝑚𝑛𝑡
tags:
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

%% Link %%
<style>#ClockWidget{margin-top:-25px;margin-bottom:-2px;font-size:1.7em;}
h3{margin-top:-15px}#TopBtn,#DownBtn,#threedots{display:none}</style>
%% Links script %%
<script type="text/javascript">
var url = document.getElementById( 'linkshare' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#linkshare').prop('selectedIndex',0);};
</script>
%% Translator script %%
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
%% Graph Script %%
<script src="script/graph.js"></script>
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
<script src="script/navbar.js"></script>
<script src="script/resize-dialog.js"></script>
%% Stock Widget Script %%
<script src="script/home-stock.js"></script>
%% Sticky Notes Script %%
<script src="script/sticky-script.js"></script>
%% Calculator Script %%
<script src="script/calc.js"></script>

%% ip address & city %%
<h3 id="greeting" style="white-space: nowrap !important; display: inline-block; line-height: 1.2 !important; max-width: 100%; margin: -19px 0 4px 0 !important;"><span id="hello" style="margin: 0 !important; padding: 0 !important; white-space: nowrap; font-size: inherit; display: inline-block;"></span><span id="browser" style="white-space: nowrap; font-size: inherit; display: inline-block;">Loading greetings... ⏳</span></h3>
<script src='script/home-agent.js'></script>

<div><h1 style="display: inline-block;white-space: nowrap;font-size: 26px; margin: -5px 0 0 0; line-height: 1.2 !important;" id="ClockWidget" onload="showTime()"></h1></div>
<script src="script/clock.js"></script>

%% weather & link button 1 %% 
<div id="quick-menu-container">
  <span id="quick-menu">
    <select id="switchLocation">
      <option value="" disabled selected>☀️</option>
      <option value="en/37d57126d98/seoul/">서울</option>
      <option value="en/35d18129d08/busan/">부산</option>
      <option value="en/35d87128d60/daegu/">대구</option>
      <option value="en/37d46126d71/incheon/">인천</option>
      <option value="en/35d16126d85/gwangju/">광주</option>
      <option value="en/36d35127d38/daejeon/">대전</option>
      <option value="en/35d54129d31/ulsan/">울산</option>
      <option value="en/36d56127d26/sejong-si/">세종</option>
      <option value="en/33d49126d50/jeju-do/">제주</option>
      <option value="ja/35d69139d69/tokyo/">東京</option>
      <option value="zh/39d90116d41/beijing/">北京</option>
      <option value="en/36d78n119d42/california/">California</option>
      <option value="en/40d71n74d01/new-york/">New York</option>
      <option value="en/51d51n0d13/london/">London</option>
      <option value="fr/48d862d35/paris/">Paris</option>
      <option value="de/52d5213d40/berlin/">Berlin</option>
      <option value="en/n33d87151d21/sydney/">Sydney</option>
      <option value="en/49d28n123d12/vancouver/">Vancouver</option>
      <option value="es/40d42n3d70/madrid/">Madrid</option>
      <option value="en/0d54116d42/east-kalimantan/">Kalimantan</option>
      <option value="ar/24d4554d38/abu-dhabi/">أَبُو ظَبْيٍ</option>
      <option value="en/28d6177d21/new-delhi/">नई दिल्ली</option>
      <option value="pl/52d2321d01/warsaw/">Warszawa</option>
      <option value="de/46d957d45/bern/">Bärn</option>
      <option value="en/45d8215d98/zagreb/">Zagreb</option>
      <option value="en/47d89106d91/ulaanbaatar/">Улаанбаатар</option>
      <option value="en/21d03105d83/hanoi/">Hà Nội</option>
      <option value="sv/59d3318d07/stockholm/">Stockholm</option>
      <option value="es/19d25n99d10/mexico-city/">Ciudad de México</option>
      <option value="ar/30d0431d24/cairo/">القاهرة</option>
      <option value="en/1d35103d82/singapore/">Singapore</option>
      <option value="en/11d80n15d18/guinea-bissau/">Bissau</option>
      <option value="ar/36d8110d18/tunis/">تونس</option>
      <option value="en/5d60n0d19/accra/">Accra</option>
      <option value="fr/14d72n17d47/dakar/">Dakar</option>
      <option value="en/n15d3928d32/lusaka/">Lusaka</option>
      <option value="ar/36d703d06/algiers-province/">الجزائر</option>
      <option value="fr/11d8342d59/djibouti/">Djibouti</option>
      <option value="en/n13d9633d77/lilongwe/">Lilongwe</option>
      <option value="fr/12d1315d06/ndjamena/">N'Djamena</option>
      <option value="hu/47d5019d04/budapest/">Budapest</option>
      <option value="ro/44d4326d10/bucharest/">Bucureşti</option>
      <option value="uk/50d4530d52/kiev/">Київ</option>
      <option value="no/59d9110d75/oslo/">Oslo</option>
      <option value="sk/48d1517d11/bratislava/">Bratislava</option>
      <option value="en/37d9658d33/ashgabat/">Aşgabat</option>
      <option value="ru/51d1671d47/astana/">Астана</option>
      <option value="ru/40d7368d10/toshkent/">Тошкент</option>
      <option value="en/n25d7528d23/pretoria/">Pretoria</option>
      <option value="zh/22d40114d11/hong-kong/">香港</option>
      <option value="zh/25d03121d57/taipei/">台北</option>
      <option value="ar/24d7146d68/riyadh/">الرياض</option>
      <option value="pt/n15d83n47d92/brasilia/">Brasília</option>
      <option value="ru/55d7637d62/moscow/">Москва</option>
      <option value="it/41d9012d50/rome/">Rome</option>
      <option value="nl/52d374d90/amsterdam/">Amsterdam</option>
      <option value="tr/39d9332d86/ankara/">Ankara</option>
      <option value="en/13d76100d50/bangkok/">กรุงเทพมหานคร</option>
      <option value="en/45d42n75d70/ottawa/">Ottawa</option>
      <option value="en/n6d21106d85/jakarta/">Jakarta</option>
      <option value="da/55d6812d57/copenhagen/">København</option>
      <option value="en/60d1724d94/helsinki/">Helsinki</option>
      <option value="el/37d9823d73/athens/">Αθήνα</option>
      <option value="en/46d0614d51/ljubljana/">Ljubljana</option>
    </select>
    <span></span>
    <button class="quick-button" onclick="location.href='/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%92%A0-Obsidian'">💠 Obsidian</button>
    <span></span>
    <button class="quick-button" onclick="location.href='/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%93%B1-Android'">📱 Android</button>
    <span></span>
    <button class="quick-button" onclick="location.href='/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%94%81-Mac-Apps'">🔁 Mac Apps</button>
    <span></span>
    <button class="quick-button" onclick="location.href='/%F0%9F%9B%A0%EF%B8%8F-Setting/%F0%9F%94%A5-Firefox'">🔥 Firefox</button>
    <span></span>
    <br>
    <button class="quick-button" onclick="window.open('https://github.com/filmnt', '_blank')">
      <i class="fab fa-github"></i> GitHub
    </button>
    <span></span>
    <button class="quick-button" onclick="location.href='./📓-Study/⌛-교육학'">⌛ 교육학</button>
    <span></span>
    <button class="quick-button" onclick="location.href='./📓-Study/⚠️-내용학'">⚠️ 내용학</button>
    <span></span>
    <button class="quick-button" onclick="location.href='%F0%9F%93%93-Study/%F0%9F%9A%A7-%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9%E1%84%87%E1%85%A7%E1%86%AF-%E1%84%80%E1%85%B5%E1%84%8E%E1%85%AE%E1%86%AF'">🚧 연도별 기출</button>
    <span></span>
    <button class="quick-button" onclick="location.href='./📓-Study/🚫-Download'">🚫 Download</button>
    <span></span>
  </span>
</div>
<span></span>

%% Stock Widget %%
<div class="tradingview-widget-container"><iframe id="tradingview-widget" width="100%" height="45" frameborder="0" scrolling="no" style="box-sizing: border-box;"></iframe></div>

%% Carousel (Weather, Map, Stock) %%
<style>
.slideshow-container {position: relative; margin: auto; display: block; height: 100%; width: 100%; margin-bottom: -10px;margin-top:-15px} .Slides {display: none; width: 100%; height: 100%;} .prev, .next {cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; color: #646464; font-weight: bold; font-size: 20px; transition: 0.6s ease; border-radius: 0; user-select: none; z-index: 0; display: none; align-items: center; justify-content: center; background: transparent;} .prev {left: 0;} .next {right: 0;} .prev::before, .next::before {content: ""; position: absolute; top: -20px; bottom: -20px; left: -20px; right: -20px; background: transparent;}
</style>

<div class="slideshow-container" >
<div class="Slides">
<a class="weatherwidget-io" href="https://forecast7.com/en/37d57126d98/seoul/" data-label_1="서울" data-label_2="WEATHER" data-font="Noto Sans" data-icons="Climacons Animated" data-theme="weather_one" target="_blank"> </a>
</div>

<div class="Slides">
<div id="mapping"></div>
</div>

<div class="Slides">
<iframe width="100%" height="450" src="https://embed.windy.com/embed.html?type=map&location=auto&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface" frameborder="0" sandbox="allow-scripts allow-same-origin"></iframe>
</div>

<a class="prev" onclick="plusSlides(-1)"><i class="fa-solid fa-chevron-left fa-xl"></i></a>
<a class="next" onclick="plusSlides(1)"><i class="fa-solid fa-chevron-right fa-xl"></i></a>
</div>
%% Weather Widget / Carousel Script %%
<script src="script/home-weather.js"></script>
<script src="script/home-carousel.js"></script>

%% chat embed %%
<div class="home-container">
  <div class="home-content-area">
    <div class="home-content home-left-content" style="display: none;">
      <div class="home-youtube-wrapper"></div>
    </div>
    <div class="home-content home-center-content">
      <iframe id="home-filmnt-chat-thread" src="https://chat.filmnt.workers.dev/" frameborder="0" loading="eager"></iframe>
    </div>
    <div class="home-content home-right-content" style="display: none;">
      <div class="home-youtube-wrapper"></div>
    </div>
  </div>

  <div class="home-pagination" style="display: none;">
    <div class="home-dot home-left-dot" tabindex="0"></div>
    <div class="home-dot home-center-dot home-active" tabindex="0"></div>
    <div class="home-dot home-right-dot" tabindex="0"></div>
  </div>
</div>

<script>
const homeDots = {
  left: document.querySelector('.home-left-dot'),
  center: document.querySelector('.home-center-dot'),
  right: document.querySelector('.home-right-dot')
};

const homeContents = {
  left: document.querySelector('.home-left-content'),
  center: document.querySelector('.home-center-content'),
  right: document.querySelector('.home-right-content')
};

const iframeSrcs = {
  left: 'https://www.youtube.com/embed/gFRtAAmiFbE?vq=hd1080&rel=0&modestbranding=1&playsinline=1',
  right: 'https://www.youtube.com/embed/rnXIjl_Rzy4?vq=hd1080&rel=0&modestbranding=1&playsinline=1'
};

function createIframe(src) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  return iframe;
}

function homeSetActive(target) {
  Object.keys(homeDots).forEach(key => {
    homeDots[key].classList.toggle('home-active', key === target);
    homeContents[key].style.display = key === target ? 'block' : 'none';

    if (key !== 'center') {
      const wrapper = homeContents[key].querySelector('.home-youtube-wrapper');
      wrapper.innerHTML = ''; 
      if (key === target) {
        wrapper.appendChild(createIframe(iframeSrcs[key])); 
      }
    }
  });
}

Object.values(homeDots).forEach(dot => {
  dot.addEventListener('click', () => {
    const target = Object.keys(homeDots).find(key => homeDots[key] === dot);
    homeSetActive(target);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const pagination = document.querySelector('.home-pagination');
  const centerIframe = document.querySelector('#home-filmnt-chat-thread');

  homeContents.left.querySelector('.home-youtube-wrapper').innerHTML = '';
  homeContents.right.querySelector('.home-youtube-wrapper').innerHTML = '';

  if (centerIframe) {
    centerIframe.addEventListener('load', () => {
      pagination.style.display = 'flex';
    }, { once: true });
    setTimeout(() => {
      pagination.style.display = 'flex';
    }, 3000);
  } else {
    pagination.style.display = 'flex';
  }
});
</script>

%% sticky notes %%
<div id="sticky-container" class="sticky-container"></div>