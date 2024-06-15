// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <div style="margin-left:auto;margin-right:0;" class={classNames(displayClass, "darkmode")}>
      <input class="toggle" id="darkmode-toggle" type="checkbox" tabIndex={-1} />
      <label id="toggle-label-light" for="darkmode-toggle" tabIndex={-1}>
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
        >
          <title>{i18n(cfg.locale).components.themeToggle.darkMode}</title>
          <path d="M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5    S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5    C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6    C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9    c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44    l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5    c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06    L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z     M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2    C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29    c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7    C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5    c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z"></path>
        </svg>
      </label>
      <label id="toggle-label-dark" for="darkmode-toggle" tabIndex={-1}>
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
        >
          <title>{i18n(cfg.locale).components.themeToggle.lightMode}</title>
          <path d="M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571  C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23  c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369  c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65  c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z"></path>
        </svg>
      </label>


                <div style="display:inline-block;margin-top:4px;float:left">
                <object type="application/x-shockwave-flash" width="30" height="25" data="https://www.youtube.com/v/jfKfPfyJRdk"></object>
                </div>


                <div style="display:inline-block;margin-left:1px;float:right">
                <div class="progress-container"><div class="progress"><div class="bar"></div></div><div class="value"></div></div>
                </div>             
                   








        <button class="needfade" id="threedots" style="position:fixed;bottom: 85px;left:calc(100% - 68px);width: 40px;height:40px;opacity:0.3;z-index:1" onclick="openNavbar()"><i class="fa-solid fa-bars fa-xl"></i></button>


        <dialog id="navbar-dialog" style="margin-top:-15px">
        <h2 id="navclock" onload="showTime()" style="font-size:21px;"> </h2>
        <span><br></br>
        <button onclick="openSchedule()" style="float:left;height:29px;margin-top:0;margin-right:4px;"><i class="fa-regular fa-calendar-check"></i> Schedule</button>
        <form style="float:left;"  action="https://duckduckgo.com/" method="post" target="_blank"  onsubmit="this.submit(); this.reset(); return false;" novalidate>
        <label><input style="width:220px"  type="search" name="q" placeholder="Web Search🦆" /></label></form>
        <select id="links" style="float:left;width:50px;margin-left:4px;margin-top:0px;height:29px">
        <option value="" >Link</option>
        <option value="https://filmnt.github.io/Scheduler/">Schedule</option>
        <option value="https://date.nager.at/">Worldwide Public Holiday</option>
        <option value="https://worldradiomap.com/">World Radio Map</option>
        <option value="http://szimek.github.io/signature_pad/">Signature Pad</option>
        <option value="https://silverweed.github.io/tiers/">Tierlist Maker</option>
        <option value="https://redketchup.io/color-picker">RedKetchup</option>
        <option value="https://paintmaps.com/">Paint Maps</option>
        <option value="https://www.desmos.com/calculator">Desmos</option>
        <option value="https://github.com/lukas-blecher/LaTeX-OCR">LaTeX-OCR (Advanced)</option>
        <option value="https://vscode.dev/">VS Code</option>
        <option value="https://hancomdocs.com/home">Hancom Docs (Need Sign-In)</option>
        <option value="https://r1.community.samsung.com/">Samsung Members</option>
        </select>
        <div style="float:left;margin-bottom:-3px;">
        <div id="google_translate_element" style="float:left;margin-right:4px;"></div>
        <a id="resbtn" onclick="ResetTranslate()" style="margin-right:4px;"><button>Restore</button></a>
        <span></span>
        <button id="start" onclick="start()">White</button>
        <span></span>
        <button disabled id="stop" onclick="pause()">Noise</button>
        </div>
        <span style="float:left">
        <button onclick="openStudy();" style="margin-right:4px;">Study with me…</button>
        <span></span>
        <button onclick="openFood();" style="margin-right:4px;">Food…?</button>
        <span></span>
        <button class="open-excal" onclick="openExcal()" style="margin-right:4px;">Excalidraw</button>
        <span></span>
        <button class="open-preview" onclick="openPreview()">Preview</button>
        </span></span>
        </dialog>




        <dialog id="schedule-dialog">
        <span><iframe src="https://filmnt.github.io/Scheduler/" style="margin-top:-20px;top:0x; left:0; width:100%;height:100%;position:absolute;border:0;" allowfullscreen></iframe></span>
        </dialog>

        <dialog id="study-dialog">
        <span><h1>Study with me…</h1>
        <span style="margin-bottom:0px"><p class="time js-time" style="display:inline;font-size:20px;font-style: italic;margin-right:4px"></p><span class="button-container">
        <button class="go-button js-go-button" style="margin-right:4px">Start</button>
        <button class="reset-button js-reset-button" style="margin-right:4px">Reset</button>
        <button class="add-lap-button js-add-lap-button">Timestamp</button>
        <div class="confirmation-container js-confirmation-container" style="float:right;margin-top:-15px;position:relative;z-index:1;margin-right:5px" ></div></span></span>
        <div class="todo-container" style="margin-top:4px;">
        <div class="todo-app download-container"><div class="laps-list-wrapper"><ol class="laps-list js-lap-list"></ol></div>
        <ul id="list-container"></ul><div class="todo-row"></div></div>
        <div><button class="download-btn todo-btn" style="margin-right:4px"><i class="fa-solid fa-download"></i></button>
        <input type="text" style="margin-right:4px" id="input-box" placeholder=" Add your task..."/>
        <button onclick="addTask()" id="add" >Add</button></div>
        </div>
        </span></dialog>


        <dialog id="food-dialog">
        <span>
        <div id="food-container">
        <div id="meal" class="meal"></div><button class="get_meal" id="get_meal" style="float:right;">Get Meal 🍔</button></div>
        </span>
        </dialog>


        <dialog id="excal-dialog">
        <span><button onclick="closeExcal();closeNavbar()" style="position:fixed;top:10px;right:420px;width:40px;height:40px;opacity:0.3;z-index:1"><i class="fa-solid fa-xmark fa-xl"></i></button><iframe src="https://excalidraw.com/" style="margin-top:-20px;top:0x; left:0; width:100%;height:100%;position:absolute;border:0;" allowfullscreen></iframe></span>
        </dialog>


        <dialog id="preview-dialog" style="width:380px;">
        <div id="previewdiv"><button onclick="closePreview();closeNavbar()" style="position:fixed;top:10px;right:420px;width:40px;height:40px;opacity:0.3;z-index:1"><i class="fa-solid fa-xmark fa-xl"></i></button>
        <section>
        <form action="" method="POST" enctype="multipart/form-data">
        <div class="preview-container"><div><div class="col-md-12"><div class="form-group">
        <div class="preview-zone hidden"><div class="box box-solid"><div class="box-header with-border"><button type="button" class="remove-preview">Reset</button>
        <div><h1 style="text-align:left;margin-left:4px;margin-top:-20px;margin-bottom:-2px">Preview</h1></div><div class="box-tools pull-right"></div></div>
        <div class="box-body"></div></div></div>
        <div class="dropzone-wrapper"><div class="dropzone-desc"><h1>Drag and Drop</h1></div>
        <input type="file" name="img_logo" class="dropzone"/></div></div></div></div></div></form>
        </section>
        </div>
        </dialog>

















    </div>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor
