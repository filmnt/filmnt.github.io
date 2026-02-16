import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <div style="margin-left:auto;margin-right:0;width:140px" class={classNames(displayClass, "darkmode")}>
      <div style="display:inline-block;margin-left:1px;float:right">
        <div title="Year Progress" class="progress-container"><div class="progress"><div class="bar"></div></div><div class="value"></div></div>
      </div>      
      <div style="display:inline-block; margin-top:4px;float:right">
       <i id="toggleContainer" class="fa-regular fa-note-sticky fa-xl" style="margin-right:5px;margin-top:12px;"></i>
      </div>
      <button class={classNames(displayClass, "darkmode")} id="darkmode" style="float:right;height:35px;margin-right:8px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="dayIcon"
          x="0px"
          y="0px"
          viewBox="0 0 35 35"
          style="enable-background:new 0 0 35 35"
          xmlSpace="preserve"
          aria-label={i18n(cfg.locale).components.themeToggle.darkMode}
        >
          <title>{i18n(cfg.locale).components.themeToggle.darkMode}</title>
          <path d="M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5    S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5    C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6    C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9    c0.414,0,0.789-0.168,1.06-0.439l-2,2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44    l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5    c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06    L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z     M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2    C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29    c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7    C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5    c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="nightIcon"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          style="enable-background:new 0 0 100 100"
          xmlSpace="preserve"
          aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
        >
          <title>{i18n(cfg.locale).components.themeToggle.lightMode}</title>
          <path d="M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571  C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23  c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369  c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65  c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z"></path>
        </svg>
      </button>
<button class="needfade" id="TopBtn" onclick="document.documentElement.scrollTop=0;" style="position:fixed;bottom:130px;left:calc(100% - 68px);width: 40px;height:40px;opacity:0.3;z-index:1" ><i class="fa-solid fa-chevron-up"></i></button>
<button class="needfade" id="DownBtn" onclick="window.scrollTo(0, document.body.scrollHeight);" style="position: fixed;bottom: 85px;left:calc(100% - 68px);;width: 40px;height:40px;opacity:0.3;z-index:1" ><i class="fa-solid fa-chevron-down"></i></button>
<div id="navbar-dialog" style="display:none;position:fixed;top:0;right:0;width:100%;max-width:380px;height:100vh;flex-direction:column;background-color:var(--background);z-index:20000;overflow:hidden;">
    <h2 id="navclock" onload="showTime()" style="font-size:18px;margin:0;padding-bottom:4px;"> </h2>
    <span>
      <div style="display:flex;align-items:center;gap:4px;margin:4px 0;flex-wrap:nowrap;">
        <button onclick="openSchedule()" style="height:30px;margin:0;display:flex;align-items:center;gap:4px;">
          <i class="fa-regular fa-calendar-check"></i> Schedule
        </button>
        <form action="https://duckduckgo.com/" method="post" target="_blank" onsubmit="this.submit(); this.reset(); return false;" novalidate>
          <label><input style="width:200px" type="search" name="q" placeholder="Web Search🦆" /></label>
        </form>
        <select id="links" style="width:50px;margin:0;height:29px;">
          <option value="">Link</option>
          <option value="https://filmnt.github.io/qrcode/">QR Code Generator</option>
          <option value="https://lazygyu.github.io/roulette/">Marble Roulette</option>
          <option value="https://monkeytype.com/">Monkeytype</option>    
          <option value="https://itch.io/">itch.io</option>    
          <option value="https://gamenative.app/">GameNative</option>
          <option value="https://date.nager.at/">Worldwide Public Holiday</option>
          <option value="https://screenfly.org/">Screenfly</option>
          <option value="https://www.flightradar24.com/">Flightradar</option>
          <option value="https://worldradiomap.com/">World Radio Map</option>
          <option value="https://alternativeto.net/">AlternativeTo</option>
          <option value="https://szimek.github.io/signature_pad/">Signature Pad</option>
          <option value="https://redketchup.io/color-picker">RedKetchup</option>
          <option value="https://paintmaps.com/">Paint Maps</option>
          <option value="https://www.desmos.com/calculator">Desmos</option>
          <option value="https://pyodide.org/en/stable/console.html">Pyodide</option>
          <option value="https://notebook.basthon.fr/">basthon</option>
          <option value="https://github.com/lukas-blecher/LaTeX-OCR">LaTeX-OCR (Advanced)</option>
          <option value="https://vscode.dev/">VS Code</option>
          <option value="https://pastebin.com/">PasteBin</option>
          <option value="https://arxiv.org/">arXiv</option>
          <option value="https://armrepo.ver.lt/">Windows ARM software</option>
          <option value="https://github.com/ocrmypdf/OCRmyPDF">OCRmyPDF</option>
          <option value="https://imgur.com/">imgur</option>
          <option value="https://exiftool.org/">ExifTool</option>
          <option value="https://duckduckgo.com/email/">DuckDuckGo Email Protection</option>
          <option value="http://slither.com/io">slither.io</option>
          <option value="https://www.gamesaien.com/game/fruit_box_a/">FruitBox</option>
          <option value="https://github.com/yt-dlp/yt-dlp">yt-dlp</option>
          <option value="https://github.com/streamlink/streamlink">Streamlink</option>
        </select>
      </div>
      <div style="margin-top:-4px;display:flex;gap:4px;flex-wrap:nowrap;">
        <div id="google_translate_element"></div>
        <a id="resbtn" onclick="ResetTranslate()" style="margin-right:4px;white-space:nowrap;"><button>Restore</button></a>
        <button id="start" onclick="start()" style="margin-left:-4px;margin-right:-2px;">White</button>
        <button disabled id="stop" onclick="pause()" style="margin-left:-2px;">Noise</button>
        <button onclick="openFood();">Food…?</button>
      </div>
      <div style="margin-top:-4px;display:flex;gap:4px;flex-wrap:nowrap;">
        <button onclick="openStudy();">Study with me…</button>
        <button class="open-excal" onclick="openExcal()">Excalidraw</button>
        <button class="open-preview" onclick="openPreview()">Preview</button>
        <button class="open-graph" onclick="openGraph()">Graph</button>
      </div>
    </span>
<iframe 
  id="chat-iframe" 
  src="https://chat.filmnt.workers.dev/" 
  style="width:100%;border:0;margin-top:6px;"
></iframe>
</div>

      <button onclick="closeSchedule()" style="display:none;position:fixed;bottom:40px;left:calc(100% - 120px);width:40px;height:40px;opacity:0.3;z-index:20001"><i class="fa-solid fa-xmark fa-xl"></i></button>
<div id="schedule-dialog" style="display:none;position:fixed;top:0;right:0;width:100%;min-width:380px;height:100vh;background-color:var(--background);z-index:20000;overflow:hidden;opacity:1;padding:0 !important;margin:0 !important;box-sizing:border-box !important;">
  <div id="calendar-container" style="position:relative;width:100%;height:100%;margin:0 !important;padding:0 !important;overflow:hidden;box-sizing:border-box !important;"></div>
</div>
      <button onclick="closeStudy()" style="display:none;position:fixed;bottom:40px;left:calc(100% - 120px);width:40px;height:40px;opacity:0.3;z-index:20001"><i class="fa-solid fa-xmark fa-xl"></i></button>
      <div id="study-dialog" style="display:none;position:fixed;top:0;right:0;width:100%;max-width:380px;height:100vh;background-color: var(--background);z-index:20000;overflow-y:hidden;opacity:1">
        <div style="padding:10px;background-color: var(--background);opacity:1;">
          <span>
            <h1>Study with me…</h1>
            <span style="margin-bottom:0px">
              <p class="time js-time" style="display:inline;font-size:20px;font-style:italic;margin-right:4px"></p>
              <span class="button-container">
                <button class="go-button js-go-button" style="margin-right:4px">Start</button>
                <button class="reset-button js-reset-button" style="margin-right:4px">Reset</button>
                <button class="add-lap-button js-add-lap-button">Timestamp</button>
                <div class="confirmation-container js-confirmation-container" style="float:right;margin-top:-15px;position:relative;z-index:1;margin-right:5px"></div>
              </span>
            </span>
            <div class="todo-container" style="margin-top:20px;">
              <div class="todo-app download-container">
                <div class="laps-list-wrapper"><ol class="laps-list js-lap-list"></ol></div>
                <ul id="list-container"></ul>
                <div class="todo-row"></div>
              </div>
              <div>
                <button class="download-btn todo-btn" style="margin-right:4px"><i class="fa-solid fa-download"></i></button>
                <input type="text" id="input-box" placeholder="Add your task..."/>
                <button onclick="addTask()" id="add">Add</button>
              </div>
            </div>
          </span>
        </div>
      </div>
      <button onclick="closeFood()" style="display:none;position:fixed;bottom:40px;left:calc(100% - 120px);width:40px;height:40px;opacity:0.3;z-index:20001"><i class="fa-solid fa-xmark fa-xl"></i></button>
      <div id="food-dialog" style="display:none;position:fixed;top:0px;right:0;width:100%;max-width:380px;min-height:80px;background-color: var(--background);z-index:20000;overflow-y:hidden;opacity:1">
        <div style="padding:10px;background-color: var(--background);opacity:1;">
          <span>
            <div id="food-container">
              <div id="meal" class="meal"></div>
              <button class="get_meal" id="get_meal" style="float:right;">Get Meal 🍔</button>
            </div>
          </span>
        </div>
      </div>
      <button onclick="closeExcal()" style="display:none;position:fixed;bottom:40px;left:calc(100% - 120px);width:40px;height:40px;opacity:0.3;z-index:20001"><i class="fa-solid fa-xmark fa-xl"></i></button>
<div id="excal-dialog" style="display:none;position:fixed;top:0;right:0;width:100%;min-width:380px;height:100vh;background-color: var(--background);z-index:20000;overflow-y:hidden;opacity:1">
  <iframe src="https://excalidraw.com/" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
</div>
      <button onclick="closeGraph()" style="display:none;position:fixed;bottom:40px;left:calc(100% - 120px);width:40px;height:40px;opacity:0.3;z-index:20001"><i class="fa-solid fa-xmark fa-xl"></i></button>
      <div id="graph-dialog" style="display:none;position:fixed;top:0;right:0;width:100%;min-width:380px;height:100vh;background-color: var(--background);z-index:20000;overflow-y:hidden;opacity:1">
            <iframe src="https://www.geogebra.org/graphing" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>

      </div>
      <button onclick="closePreview()" style="display:none;position:fixed;bottom:40px;left:calc(100% - 120px);width:40px;height:40px;opacity:0.3;z-index:20001"><i class="fa-solid fa-xmark fa-xl"></i></button>
      <div id="preview-dialog" style="display:none;position:fixed;top:0px;right:0;width:100%;min-width:380px;height:100vh;background-color: var(--background);z-index:20000;overflow-y:hidden;opacity:1">
        <div style="padding:10px;background-color: var(--background);opacity:1;">
          <div id="previewdiv">
            <form action="" method="POST" enctype="multipart/form-data">
              <section>
                <div class="preview-container">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="preview-zone hidden">
                        <div class="box box-solid">
                          <div class="box-header with-border">
                            <button type="button" class="remove-preview">Reset</button>
                            <div><h1 style="text-align:left;margin-left:4px;margin-top:-20px;margin-bottom:-2px">Preview</h1></div>
                            <div class="box-tools pull-right"></div>
                          </div>
                          <div class="box-body"></div>
                        </div>
                      </div>
                      <div class="dropzone-wrapper">
                        <div class="dropzone-desc"><h1>Drag and Drop</h1></div>
                        <input type="file" name="img_logo" class="dropzone"/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor