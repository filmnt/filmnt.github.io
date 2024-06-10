---
title: Home
tags:
  - contents
---
%% jQuery script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
%% Webcam script %%
<script src="script/cam.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% Link %%
<style>h1{margin-top:-20px;margin-bottom:-2px}h3{margin-top:-15px}#TopBtn,#DownBtn,#threedots{display:none}</style>
%% home navbar %%
<button id="navbar" style="position:fixed;bottom: 30px;float:right;right: 28px;width: 40px;height:40px;opacity:0.3;z-index:1" onclick="openNavbar()"><i class="fa-solid fa-bars fa-xl"></i></button>
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
%% home-poup  script %%
<script src="script/swipe.js"></script>



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
<style>#food-container {height:100%;min-height:120px}
.get_meal {position:absolute;bottom:0;right:0;background-color: #007BFF;color: #fff;padding: 10px 20px; border: none; border-radius: 5px;cursor: pointer;transition: background-color 0.3s;}  
.get_meal:hover {background-color: #0056b3;}.row {display: flex;}.column {flex: 50%;padding:4px;}</style>
<div id="food-container">
<div id="meal" class="meal"></div><button class="get_meal" id="get_meal">Get Meal 🍔</button></div></div>
<script src="script/meal.js"></script>


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

%% WhiteNoise Script %%
<script type="text/javascript" src="script/WN.js"></script>

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


<style>
.preview-container {width:100%;margin-top:20px;}.box {position: relative;width: 100%;}
.box-header {display: block;;position: relative;border-bottom: 1px solid #646464;margin-bottom: 10px;}
.box-tools {position: absolute;right: 0px;top: 10px;}.dropzone-wrapper {border: 1.5px dashed;position: relative;height: 150px;}
.dropzone-desc {position: absolute;margin: 0 auto;left: 5%;right: 0;text-align: center;width: 100%;top: 50%}
.dropzone,.dropzone:focus {position: absolute;outline: none !important;width: 100%;height: 150px;cursor: pointer;opacity: 0;}
.preview-zone {text-align: center;}.preview-zone .box {box-shadow: none;border-radius: 0;margin-bottom: 0;}
.remove-preview {float:right;height:30px;display:inline;background-color: #007BFF;color: #fff; border: none; border-radius: 5px;cursor: pointer;transition: background-color 0.3s;}
.remove-preview:hover {background-color: #0056b3;}

#preview-dialog{--_no-shadow: 0 0 32px rgba(0, 0, 0, 0);--_shadow: 0 0 60px rgba(0, 0, 0, .5);
width: 100%;max-width: unset;margin: 0 0 0 auto;top: 0;overflow: auto;border: none;box-shadow: var(--_no-shadow);
transition: box-shadow .2s;animation-fill-mode: forwards;}
#preview-dialog > *{display: grid;grid-template-rows: auto 1fr auto;height: 100vh;}
#preview-dialog::backdrop{background: unset;}
#preview-dialog:modal,#preview-dialog:-internal-dialog-in-top-layer {max-height: 100vh;}
#preview-dialog[open] {-webkit-animation: float-in-right 0.2s ease normal;box-shadow: var(--_shadow);}
#preview-dialog.closing {-webkit-animation: float-out-right 0.2s ease normal;}
</style>

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
<h1>Study with me</h1>
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














