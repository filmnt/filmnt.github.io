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



<button style="height:30px;margin-right:1px;width:35px" id="camtoggle" onclick="cameraonoff()"><i class="fa fa-video-camera" ></i></button>

<div style="display:inline-block;margin-right:1px">
<select style="height:30px;width:145px"  id="tts-lang" >
        <option data-lang="ko-KR" selected>Text-to-Speech</option>
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
</select></div>
<div style="display:inline-block;">
  <button style="height:30px;margin-right:1px;width:35px" id="tts-toggle" onclick="keyonoff()"><i class="fa-regular fa-keyboard"></i></button>  
  <button style="height:30px;width:34px" id="TTS-btn"><i class="fa fa-microphone"></i></button>
</div>
<br></br>

        <div id="tts-keyboard" style="display:none;  margin-top:4px">
        <textarea id="tts-input" style="border:none;border-radius:4px;width:248px" rows="2" placeholder='Write your text here'></textarea>
        </div>

        <div style="margin-top:4px;"><video controls muted id="webcam" style="display:none"  autoplay></video></div>


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
