import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import { schemeGnBu } from "d3"

interface ContentMetaOptions {
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
      }

      segments.push(
        <button data-title="Fullscreen" onclick="toggleFullScreen();" style="background-color:transparent;margin-right:10px;float:right;margin-right:-4px;position:relative;margin-top:-2px"><i class="fa-solid fa-expand fa-xl"></i></button>

      )
      segments.push(
        <button title="Navigation" class="needfade" id="threedots" style="display:block;position:fixed;bottom:40px;left:calc(100% - 68px);width:40px;height:40px;opacity:0.3;z-index:2" onclick="toggleNavbar()"><i class="fa-solid fa-layer-group fa-xl"></i></button>
        )
      segments.push(
        <button data-title="Share" class="dropdown" style="background-color:transparent;margin-right:10px;float:right;margin-top:-2px">
          <i class="dropbtn fa-solid fa-share-nodes fa-xl" onclick="sharebtn()"></i>
          <div id="myDropdown" class="dropdown-content">
            <div class="dropdown-item" onclick="navigator.clipboard.writeText(window.location.href); return false;">
              <i class="fa-regular fa-copy fa-xl"></i> Copy URL
            </div>
            <div class="dropdown-item" onclick="generateQRCode()">
              <i class="fa-solid fa-qrcode fa-xl"></i> QR Code
            </div>
          </div>
        </button>
      )

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
