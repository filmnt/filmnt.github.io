---
tags:
  - Setting
  - contents
---
%% jQuery & qr script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="script/qrcode.js"></script>
%% html2canvas script %%
<script src="script/html2canvas.js"></script>
%% Webcam script %%
<script src="script/cam.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% progressbar script %%
<script>
function getCurrentProgress(){
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return ((((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(1);}
function updateUI() {const percent = getCurrentProgress();
  const barItem = document.getElementsByClassName('bar')[0];barItem.style.width = `${percent}%`;
  const counterItem = document.getElementsByClassName('value')[0];
  if (percent>100){counterItem.textContent = `100%`}else{counterItem.textContent = `${percent}%`;}}
updateUI();setInterval(updateUI, 1000);
</script>
%% Links script %%
<script type="text/javascript">
var url = document.getElementById( 'linkshare' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#linkshare').prop('selectedIndex',0);};
</script>
%% Translator script %%
<script>window.ResetTranslate = () => jQuery('#\\:1\\.container').contents().find('#\\:1\\.restore').click();</script>
<script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'},'google_translate_element');}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
%% share&fullcreen button script %%
<script src="script/full-share.js"></script>
%% WhiteNoise Script %%
<script type="text/javascript" src="script/WN.js"></script>
%% Preview Script %%
<script src="script/preview.js"></script>
%% Excalidraw Script %%
<script src="script/excalidraw.js"></script>
%% Excalidraw Script %%
<script src="script/graph.js"></script>
%% Study with me Script %%
<script src="script/study.js"></script>
%% Food Script %%
<script src="script/meal.js"></script>
%% Schedule Script %%
<script src="script/scheduler.js"></script>
%% Navigation bar Script %%
<script src="script/navbar.js"></script>
<script src="script/resize-dialog.js"></script>
%% Sticky Notes Script %%
<script src="script/sticky-script.js"></script>
%% Calculator Script %%
<script src="script/calc.js"></script>

## Theme, Plugin (Starter Pack)

> [!NOTE]  <a href="https://mega.nz/file/Xcsi2TZZ#yBlXp3tDDH6WpjmBPT3dc1IPVMjr7QmS1F_aCNTG05M" target="_blank" >Backup file link</a> (8.7mb)
>> `.makemd`
>> `.obsidian`
>> `.space`
> - `Unzip` and Move to `Vault`
>     - Use `Cmd`+`Shift`+`.`
> - Includes `Themes`, `Hot-Keys`, `Plugins`, etc
> - Need  additional settings: `Languages`, `API Key`, `Git`, `Path`, etc

---

## Sync (example)
> [!note] <a href="https://syncthing.net/downloads/" target="_blank" >Syncthing (for Desktop)</a> 
> - <a href="https://github.com/researchxxl/syncthing-android/releases" target="_blank" >Syncthing-Fork (for Android)</a>
> ![[syncthing.png]]

---
## Quartz (Web-Publish)
### Installation  [^5]
0. Create <a href="https://github.com/" target="_blank" >GitHub Account</a> and Install <a href="https://nodejs.org/en" target="_blank" >Node</a>, <a href="https://code.visualstudio.com/download" target="_blank" >VS Code</a>, <a href="https://desktop.github.com/" target="_blank" >GitHub Desktop</a> 
1. Create your `GitHub-Repository` 
    - `Repository Name` is important…
        - (Optional) If you want to get `Short Url`, `Repository-Name` → `<Your-ID>.github.io` like `filmnt.github.io`
    - Go `GitHub-Repository Settings` - `Pages`
    - Change `Deploy from a branch` → `GitHub Actions`
1. Enter the following commands in `terminal`
```shell
cd Downloads
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```
><font color="#ff0000"> If you're in trouble, I strongly recommend you </font> `GIVE UP` <font color="#ff0000">and use </font><a href="https://obsidian.md/publish" target="_blank" >Obsidian Publish</a>
3. Enter the following commands
```shell
git remote rm origin

# REPLACE <YOUR-REMOTE-URL> with *.git URL in your repository
git remote add origin <YOUR-REMOTE-URL(https://...git)>

# Check your repository and upstream (fetch/push)
git remote -v
# 4 Lines works properly

# If you made a mistake, enter the following command and try again
# git remote rm origin

# Initialize Quartz
npx quartz sync --no-pull
```
4. <font color="#ff0000">Modify</font> [^6]  `.gitignore`, `quartz.config.ts` and (optional) `quartz.layout.ts` in `quartz` folder (<font color="#ff0000">See ToC</font>) 
5. Move `Obsidian Vault files` to `quartz/content` including `.folder`
     - Use `Cmd`+`Shift`+`.`
     - The `.md files` in the `content folder` will be published
     - ⚠️ Check your  `Private Notes` and `Public Notes` in <font color="#ff0000">`.gitignore`</font>
 6. Create a new file `deploy.yml` [^6] in `quartz/.github/workflows/` and Copy & Paste the following
```shell
name: Deploy Quartz site to GitHub Pages
 
on:
  push:
    branches:
      - v4
 
permissions:
  contents: read
  pages: write
  id-token: write
 
concurrency:
  group: "pages"
  cancel-in-progress: false
 
jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public
 
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
7. Use `GitHub Desktop` for `Publish`
    - Open `quartz folder` in `GitHub Desktop` and Click `Commit to v4` + `Push origin`
    - Whenever you want to publish `your notes`, `commit` and `push`
    - ⚠️ Use carefully with your `Private Notes`
8. Your content will be published within minutes.
    - See `GitHub-Actions` - `Deploy Quartz site to GitHub Pages`
    - URL: `<GitHub-Username>.github.io/<Repository-Name>`
    - You Can Rename `quartz` and Move it to where you want.
3. If You have `Private Notes`, <font color="#ff0000">DON’T USE</font> `npx quartz sync` in quartz folder

### Local-Host (optional)
- You can connect `http://localhost:8080` 
```shell
# Go to quartz folder
cd quartz

# Host local server
npx quartz build --serve
```
- If You know <a href="https://tailscale.com/download" target="_blank" >Tailscale</a>, You can connect `Tailscale-IP:8080` on other devices.
- You can also host on `Linux on Android`
    - Go to `quartz` Folder on `Desktop` 
    - Run `npx quartz build --serve` 
    - `Sync` or `Copy` `public Folder` to the location you want
    - Run the command on `Termux`
        ```shell
            pkg install nodejs
            npm install -g http-server
            nano /data/data/com.termux/files/usr/bin/http-server
        ```
    - Modify `#!/usr/bin/env node` → `#!/data/data/com.termux/files/usr/bin/env node` and `Ctrl + x` → `y` → `Enter`
    - Run `http-server <public Folder Location> -p 8080`
        - Drag and Drop `public Folder` to `Terminal`
        - You can connect `localhost:8080`
### `.gitignore`
- Below `Personal Setting`
```Shell
# macOS
.DS_Store

# Git
.gitignore

# Node.js and Dependencies
node_modules/
npm-debug.log
yarn-error.log

# Build and Output Directories
public/
dist/
build/
.quartz-cache
.cache/

# TypeScript and Build Info
tsconfig.tsbuildinfo

# Development and Profiling
prof/
.replit
replit.nix
.stignore
.last_build_state

# Personal Settings
.filen.trash.local
.trash
.obsidian
.makemd
.space
.stfolder

# Environment Variables
.env
.env.local
.env.development
.env.test
.env.production

# Logs
*.log

# Temporary Files
*.swp
*.swo

# Test Coverage
coverage/

# Media Files
*.mp4
*.webm
*.qt
*.wmv
*.avi
*.mkv
*.xspf
*.dpl
*.mp3
*.aiff

# Private Directories
private/
```


### `quartz.config.ts`
- Modify `pageTitle`, `baseUrl`
```shell
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Title",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: {
      provider: ""
      },
    locale: "en-US",
    baseUrl: "Your-Github-Pages-Url",
    ignorePatterns: ["private", "templates", ".obsidian"],
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


```

### `quartz.layout.ts`
- `Github`, `Discord Community`(Footer contents), you can add additional links
```shell
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: { "Links": "https://" },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Search()),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes({ limit: 4, showTags: false })),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [],
}
```


%% sticky notes %%
<div id="sticky-container" class="sticky-container"></div>











[^1]: Mac: `Share` (New Folder) $\leftrightarrow$ Android: `Download Folder` / `Send & Receive`
[^2]: Phone Camera → Mac/Windows + Tablet / `Send & Receive`
[^3]: Mac: `Send Only`, Others: `Receive Only`
[^4]: Mac only
[^5]: See https://quartz.jzhao.xyz/
[^6]: Use `VS Code`
