import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/comments.scss"
import script from "./scripts/giscus.inline"

export default ((opts?: Options) => {
  const Comments: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? "comments"}`}>
        <hr />
        <div class="giscus" style="margin-bottom:5px;"></div>


        <span style="opacity: 0.7;">
        Created with <a href="https://obsidian.md/download" target="_blank">Obsidian</a>•<a href="https://code.visualstudio.com/download" target="_blank" >VS Code</a>•<a href="https://quartz.jzhao.xyz/" target="_blank" >Quartz</a> for <a href="https://www.mozilla.org/firefox/" target="_blank" >Firefox</a> on <a href="https://www.samsung.com/global/galaxy/" target="_blank" >Galaxy</a> © 2024
        </span>

        <div style="margin-top:2px;opacity: 0.7;">
        <span><a href="https://github.com/filmnt/filmnt.github.io/discussions" target="_blank" >Comments</a></span>
        <span><a href="https://discord.gg/sHJxUDqbAE" target="_blank" >Discord</a></span>
        <span><a href="https://github.com/filmnt/filmnt.github.io" target="_blank" >GitHub</a></span>
        </div>

      </footer>

    )
  }

  Comments.afterDOMLoaded = script
  Comments.css = style
  return Comments
}) satisfies QuartzComponentConstructor