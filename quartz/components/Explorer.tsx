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
  let lastBuildId: string = ""

  function constructFileTree(allFiles: QuartzPluginData[]) {
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
    ctx,
    cfg,
    allFiles,
    displayClass,
    fileData,
  }: QuartzComponentProps) => {
    if (ctx.buildId !== lastBuildId) {
      lastBuildId = ctx.buildId
      constructFileTree(allFiles)
    }

    return (
      <div class={classNames(displayClass, "explorer")} style="margin-top:-15px">

<div style="margin-left:0;margin-right:auto;display:inline;">
<button title="Webcam" style="height:30px;margin-right:4px;width:40px;" id="camtoggle" onclick="cameraonoff()"><i class="fa-solid fa-video fa-xl"></i></button>

<div id="calcContainer" style="margin-left:0;margin-right:auto;display:inline;"></div>
<button style="height:30px;margin-right:4px;width:40px;" id="toggleCalc"><i class="fa-solid fa-calculator fa-xl" ></i></button> 

<div style="display:inline-block;margin-right:4px">
<select style="height:30px;width:80px;"  id="tts-lang">
    <option data-lang="ko-KR" value="ko-KR" selected></option>
    <option value="ja-JP" data-lang="ja-JP">日本語</option>
    <option value="en-US" data-lang="en-US">English (United States)</option>
    <option value="en-GB" data-lang="en-GB">English (United Kingdom)</option>
    <option value="en-AU" data-lang="en-AU">English (Australia)</option>
    <option value="en-ZA" data-lang="en-ZA">English (South Africa)</option>
    <option value="zh-CN" data-lang="zh-CN">普通话</option>
    <option value="zh-HK" data-lang="zh-HK">粤语</option>
    <option value="zh-TW" data-lang="zh-TW">繁體中文</option>
    <option value="es-ES" data-lang="es-ES">español</option>
    <option value="hi-IN" data-lang="hi-IN">हिन्दी</option>
    <option value="ar-EG" data-lang="ar-EG">العربية</option>
    <option value="pt-BR" data-lang="pt-BR">português</option>
    <option value="fr-FR" data-lang="fr-FR">français</option>
    <option value="de-DE" data-lang="de-DE">Deutsch</option>
    <option value="ru-RU" data-lang="ru-RU">русский</option>
    <option value="vi-VN" data-lang="vi-VN">Tiếng Việt</option>
    <option value="it-IT" data-lang="it-IT">italiano</option>
    <option value="pl-PL" data-lang="pl-PL">polski</option>
    <option value="nl-NL" data-lang="nl-NL">Nederlands</option>
    <option value="tr-TR" data-lang="tr-TR">Türkçe</option>
    <option value="th-TH" data-lang="th-TH">ภาษาไทย</option>
    <option value="fr-CA" data-lang="fr-CA">français (Canada)</option>
    <option value="hu-HU" data-lang="hu-HU">magyar</option>
    <option value="ro-RO" data-lang="ro-RO">română</option>
    <option value="uk-UA" data-lang="uk-UA">українська</option>
    <option value="sv-SE" data-lang="sv-SE">svenska</option>
    <option value="hr-BA" data-lang="hr-BA">Hrvatski</option>
    <option value="sk-SK" data-lang="sk-SK">slovenčina</option>
    <option value="id-ID" data-lang="id-ID">Bahasa Indonesia</option>
    <option value="nb-NO" data-lang="nb-NO">norsk</option>
    <option value="ar-SA" data-lang="ar-SA">العربية (السعودية)</option>
    <option value="da-DK" data-lang="da-DK">dansk</option>
    <option value="fi-FI" data-lang="fi-FI">suomi</option>
    <option value="el-GR" data-lang="el-GR">Ελληνικά</option>
    <option value="ca-ES" data-lang="ca-ES">català</option>
    <option value="sl-SI" data-lang="sl-SI">slovenščina</option>
</select>
</div>
<div style="display:inline-block;">
  <button title="Text-to-Speech Keyboard" style="height:30px;margin-right:4px;width:40px" id="tts-toggle" onclick="keyonoff()"><i class="fa-regular fa-keyboard fa-xl"></i></button>  
  <button title="Text-to-Speech Speak" style="height:30px;width:40px" id="TTS-btn"><i class="fa-solid fa-microphone-lines fa-xl"></i></button>
</div>
<br></br>

        <div id="tts-keyboard" style="display:none;  margin-top:4px">
        <textarea id="tts-input" style="border:none;border-radius:4px;margin-left:2px;width:247px;overflow:hidden;resize:none;min-height:40px" rows="1" placeholder='Enter text here for text-to-speech...'></textarea>
        </div>

        <div style="margin-top:4px;"><video controls muted id="webcam" style="display:none"  autoplay></video></div>

        <div style="background-color:white;margin-top:4px;display:none" id="markdown-editor"><textarea id="mkd" ></textarea></div>
      
</div>

      
        <button
          type="button"
          id="explorer"
          data-behavior={opts.folderClickBehavior}
          data-collapsed={opts.folderDefaultState}
          data-savestate={opts.useSavedState}
          data-tree={jsonTree}
          aria-controls="explorer-content"
          aria-expanded={opts.folderDefaultState === "open"}
        >
          <h2>{opts.title ?? i18n(cfg.locale).components.explorer.title}</h2>
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
