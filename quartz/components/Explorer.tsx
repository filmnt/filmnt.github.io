import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import explorerStyle from "./styles/explorer.scss"

// @ts-ignore
import script from "./scripts/explorer.inline"
import { ExplorerNode, FileNode, Options } from "./ExplorerNode"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

// Options interface defined in `ExplorerNode` to avoid circular dependency
const defaultOptions = {
  folderClickBehavior: "collapse",
  folderDefaultState: "collapsed",
  useSavedState: true,
  mapFn: (node) => {
    return node
  },
  sortFn: (a, b) => {
    // Sort order: folders first, then files. Sort folders and files alphabetically
    if ((!a.file && !b.file) || (a.file && b.file)) {
      // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
      // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    if (a.file && !b.file) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node) => node.name !== "tags",
  order: ["filter", "map", "sort"],
} satisfies Options

export default ((userOpts?: Partial<Options>) => {
  // Parse config
  const opts: Options = { ...defaultOptions, ...userOpts }

  // memoized
  let fileTree: FileNode
  let jsonTree: string

  function constructFileTree(allFiles: QuartzPluginData[]) {
    if (fileTree) {
      return
    }

    // Construct tree from allFiles
    fileTree = new FileNode("")
    allFiles.forEach((file) => fileTree.add(file))

    // Execute all functions (sort, filter, map) that were provided (if none were provided, only default "sort" is applied)
    if (opts.order) {
      // Order is important, use loop with index instead of order.map()
      for (let i = 0; i < opts.order.length; i++) {
        const functionName = opts.order[i]
        if (functionName === "map") {
          fileTree.map(opts.mapFn)
        } else if (functionName === "sort") {
          fileTree.sort(opts.sortFn)
        } else if (functionName === "filter") {
          fileTree.filter(opts.filterFn)
        }
      }
    }

    // Get all folders of tree. Initialize with collapsed state
    // Stringify to pass json tree as data attribute ([data-tree])
    const folders = fileTree.getFolderPaths(opts.folderDefaultState === "collapsed")
    jsonTree = JSON.stringify(folders)
  }

  const Explorer: QuartzComponent = ({
    cfg,
    allFiles,
    displayClass,
    fileData,
  }: QuartzComponentProps) => {
    constructFileTree(allFiles)
    return (
      <div style="margin-top:-35px;margin-left:0;margin-right:auto;" class={classNames(displayClass, "explorer")}>

<button style="height:30px;margin-right:4px;width:40px" id="camtoggle" onclick="cameraonoff()"><i class="fa-solid fa-video fa-xl"></i></button>

<button style="height:30px;margin-right:4px;width:40px" id="md-toggle" onclick="mdonoff()"><i class="fa-regular fa-note-sticky fa-xl"></i></button> 

<div style="display:inline-block;margin-right:4px">
<select style="height:30px;width:75px;"  id="tts-lang" >
        <option data-lang="ko-KR" selected>Voices</option>
        <option data-lang="ja-JP">日本語</option>
        <option data-lang="en-AU">AU English</option>
        <option data-lang="en-ZA">SA English</option>
        <option data-lang="en-GB">UK English</option>
        <option data-lang="en-US">US English</option>
        <option data-lang="de-DE">Deutsch</option>
        <option data-lang="es-ES">español</option>
        <option data-lang="fr-FR">français</option>
        <option data-lang="hr-BA">Hrvatski jezični</option>
        <option data-lang="hi-IN">हिन्दी Hindi</option>
        <option data-lang="id-ID">Bahasa Indonesia</option>
        <option data-lang="it-IT">italiano</option>
        <option data-lang="nl-NL">Nederlands</option>
        <option data-lang="pl-PL">polski</option>
        <option data-lang="pt-BR">português do Brasil</option>
        <option data-lang="ru-RU">русский</option>
        <option data-lang="zh-CN">普通话(中国大陆)</option>
        <option data-lang="zh-HK">​粤語(香港)</option>
        <option data-lang="zh-TW">國語(臺灣)</option>
        <option data-lang="sv-SE">svenska</option>
        <option data-lang="vi-VN">Tiếng Việt</option>
        <option data-lang="ar-EG">مَصْرِِي</option>
        <option data-lang="hu-HU">Magyar nyelv</option>
        <option data-lang="ro-RO">Limba română</option>
        <option data-lang="uk-UA">українська мова</option>
        <option data-lang="nb-NO">norsk</option>
        <option data-lang="sk-SK">slovenčina</option>
        <option data-lang="tr-TR">Türkçe</option>
</select></div>
<div style="display:inline-block;">
  <button style="height:30px;margin-right:4px;width:40px" id="tts-toggle" onclick="keyonoff()"><i class="fa-regular fa-keyboard fa-xl"></i></button>  
  <button style="height:30px;width:40px" id="TTS-btn"><i class="fa-solid fa-microphone-lines fa-xl"></i></button>
</div>
<br></br>

        <div id="tts-keyboard" style="display:none;  margin-top:4px">
        <textarea id="tts-input" style="border:none;border-radius:4px;width:248px" rows="1" placeholder='Write your text here for tts...'></textarea>
        </div>

        <div style="margin-top:4px;"><video controls muted id="webcam" style="display:none"  autoplay></video></div>

        <div style="background-color:white;margin-top:4px;display:none" id="markdown-editor"><textarea id="mkd" ></textarea></div>





        <dialog id="navbar-dialog" style="margin-top:-15px">
        <h2 id="navclock" onload="showTime()" style="font-size:21px;"> </h2>
        <span><br></br>
        <button onclick="openSchedule()" style="float:left;height:29px;margin-top:0;margin-right:4px;"><i class="fa-regular fa-calendar-check fa-xl"></i> Schedule</button>
        <form style="float:left;"  action="https://duckduckgo.com/" method="post" target="_blank"  onsubmit="this.submit(); this.reset(); return false;" novalidate>
        <label><input style="width:220px"  type="search" name="q" placeholder="Web Search🦆" /></label></form>
        <select id="links" style="float:left;width:50px;margin-left:4px;margin-top:0px;height:29px">
        <option value="" >Link</option>
        <option value="https://filmnt.github.io/Scheduler/">Schedule</option>
        <option value="https://betterdiscord.app/">Better Discord</option>
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
        <span><iframe src="https://excalidraw.com/" style="margin-top:-20px;top:0x; left:0; width:100%;height:100%;position:absolute;border:0;" allowfullscreen></iframe></span>
        </dialog>


        <dialog id="preview-dialog" style="width:380px;">
        <div id="previewdiv">
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


















      
        <button
          type="button"
          id="explorer"
          data-behavior={opts.folderClickBehavior}
          data-collapsed={opts.folderDefaultState}
          data-savestate={opts.useSavedState}
          data-tree={jsonTree}
        >
          <h1>{opts.title ?? i18n(cfg.locale).components.explorer.title}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div id="explorer-content">
          <ul class="overflow" id="explorer-ul">
            <ExplorerNode node={fileTree} opts={opts} fileData={fileData} />
            <li id="explorer-end" />
          </ul>
        </div>
    </div>


      
    )
  }

  Explorer.css = explorerStyle
  Explorer.afterDOMLoaded = script
  return Explorer
}) satisfies QuartzComponentConstructor
