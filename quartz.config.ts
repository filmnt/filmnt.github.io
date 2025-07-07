import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 𝐹𝑖𝑙𝑚𝑛𝑡",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: { provider: "google", tagId: "G-3SCFWXJXEQ" },
    locale: "en-US",
    baseUrl: process.env.BASE_URL || "https://filmnt.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", "**/🔖 Daily Notes", "**/🔐 Private Notes"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: { header: "Noto Sans", body: "Noto Sans", code: "Noto Sans" },
      colors: {
        lightMode: {
          light: "#faf8f8", lightgray: "#e5e5e5", gray: "#b8b8b8",
          darkgray: "#4e4e4e", dark: "#2b2b2b",
          secondary: "#284b63", tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)"
        },
        darkMode: {
          light: "#0F0F0F", lightgray: "#272727", gray: "#646464",
          darkgray: "#F1F1F1", dark: "#F1F1F1",
          secondary: "#64B5F6", tertiary: "#FFFFFF",
          highlight: "rgba(255, 255, 255, 0.15)"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["git", "frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config