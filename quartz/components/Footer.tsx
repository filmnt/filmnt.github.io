import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://obsidian.md/download" target="_blank" >Obsidian</a>,&nbsp;
          <a href="https://code.visualstudio.com/download" target="_blank" >VS Code</a>,&nbsp;
          <a href="https://quartz.jzhao.xyz/" target="_blank">Quartz</a> for <a href="https://www.mozilla.org/firefox/" target="_blank" >Firefox</a>
          &nbsp;on&nbsp;<a href="https://www.samsung.com/global/galaxy/" target="_blank" >Galaxy</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link} target="_blank">{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
