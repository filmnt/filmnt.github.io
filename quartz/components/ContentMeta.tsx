import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import { schemeGnBu } from "d3"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
      }


      segments.push(         
        <button title="Fullscreen" onclick="toggleFullScreen();" style="background-color:transparent;margin-right:10px;float:right;margin-right:-4px;z-index:1;position:relative"><i class="fa-solid fa-expand fa-xl"></i></button>
              )
      segments.push(
            <button title="Share" class="dropdown" style="background-color:transparent;margin-right:10px;float:right;"><i onclick="sharebtn()" class="dropbtn fa-solid fa-share-nodes fa-xl"></i>
              <div id="myDropdown" class="dropdown-content" style="position:absolute;margin-top:10px;float:top;text-align:left;background-color:#54A9EB;color:white;padding:4px;border-radius:4px;z-index:1">
                <div onclick="navigator.clipboard.writeText(window.location.href); return false;" style="margin-bottom:10px"><i class="fa-regular fa-copy fa-xl"></i> Copy Link</div>
                <div onclick="window.open('https://quickchart.io/qr?size=500&caption=🪴 Filmnt&captionFontSize=20&margin=2&text='+window.location.href,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no, width=500px, height=500px, top=25px left=120px'); return false;" ><i class="fa-solid fa-qrcode fa-xl"></i> QR Code</div>
            </div></button>
            )
            segments.push(
              <button class="needfade" id="TopBtn" onclick="document.documentElement.scrollTop=0;" style="position:fixed;bottom:175px;left:calc(100% - 68px);width: 40px;height:40px;opacity:0.3;z-index:1" ><i class="fa-solid fa-arrow-up fa-xl"></i></button>
            )
            segments.push(
              <button class="needfade" id="DownBtn" onclick="window.scrollTo(0, document.body.scrollHeight);" style="position: fixed;bottom: 130px;left:calc(100% - 68px);;width: 40px;height:40px;opacity:0.3;z-index:1" ><i class="fa-solid fa-arrow-down fa-xl"></i></button>
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
