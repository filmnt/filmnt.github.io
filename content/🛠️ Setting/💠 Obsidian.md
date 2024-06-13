---
tags:
  - Setting
  - contents
---
%% jQuery script %%
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
%% html2canvas script %%
<script src="script/html2canvas.js"></script>
%% Webcam script %%
<script src="script/cam.js"></script>
%% md-editor script %%
<script src="script/simplemde.min.js"></script>
<script src="script/md-editor.js"></script>
%% tts script %%
<script src="script/tts.js"></script>
%% discord popup %%
<script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
    new Crate({
        server: '1231921110811934840', // Filmnt 
        channel: '1240125504036540477', // #setting
        notifications: false,})
</script>
%% progressbar script %%
<script>
function getCurrentProgress(){
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return ((((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(1);}
function updateUI() {const percent = getCurrentProgress();
  const barItem = document.getElementsByClassName('bar')[0];barItem.style.width = `${percent}%`;
  const counterItem = document.getElementsByClassName('value')[0];counterItem.textContent = `${percent}%`;}
setInterval(function() {updateUI();return arguments.callee;}(), 1000);
</script>
%% Links script %%
<script type="text/javascript">
var url = document.getElementById( 'linkshare' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#linkshare').prop('selectedIndex',0);};
</script>
%% Translator script%%
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
%% Study with me Script %%
<script src="script/study.js"></script>
%% Food Script %%
<script src="script/meal.js"></script>
%% Schedule Script %%
<script src="script/scheduler.js"></script>
%% Navigation bar Script %%
<script src="script/navbar.js"></script>
<script src="script/swipe-gesture.js"></script>




## Theme, Plugin (Starter Pack)

> [!NOTE]  <a href="https://drive.filen.io/d/9ae5ac16-a990-4703-a384-d85b439d957a#J1gOsVjTBGieIA1MOGFJN2m5Tu6iJwlx" target="_blank" >Backup file link(11mb)</a>
>> `.makemd`
>> `.obsidian`
>> `.space`
> - `Unzip` and Move to `Vault`
>     - Use `Cmd`+`Shift`+`.`
> - Includes `Themes`, `Hot-Keys`, `Plugins`, etc
> - Need  additional settings: `Languages`, `API Key`, `Git`, `Path`, etc

---

## Sync (example)
> [!note] <a href="https://syncthing.net/downloads/" target="_blank" >Syncthing</a>
> - OS
>> - Mac
>> - Android (2 devices)
>>     - Phone
>>     - Tablet
>> - Windows (<a href="https://www.parallels.com/products/desktop/" target="_blank" >Paralles Desktop 19</a>)
>- Folders
>> 1. Share Folder [^1]
>> 2. Pictures (`DCIM`) [^2]
>> 3. Obsidian Vault [^3]
>> 4. etc… (Private Folder)

---
## Quartz (Web-Publish)
### Installation  [^5]
0. Create <a href="https://github.com/" target="_blank" >GitHub Account</a> and Install <a href="https://nodejs.org/en" target="_blank" >Node</a>, <a href="https://code.visualstudio.com/download" target="_blank" >VS Code</a>, <a href="https://desktop.github.com/" target="_blank" >GitHub Desktop</a> 
1. Create your `GitHub-Repository` 
    - `Repository Name` is important…
    - Go `GitHub-Repository Settings` - `Pages`
    - Change `Deploy from a branch` → `GitHub Actions`
        - (Advanced) If you want to get `Short Url`, `Repository-Name` → `<Your-ID>.github.io` like `filmnt.github.io`
1. Enter the following commands in `terminal`
```shell
cd Downloads
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```
><font color="#ff0000"> If you're in trouble, I strongly recommend you </font> `GIVE UP` <font color="#ff0000">and use </font>`Obsidian Publish…`
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
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v3
        with:
          node-version: 18.14
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
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
        uses: actions/deploy-pages@v2
```
7. Use `GitHub Desktop` for `Publish`
    - Open `qurtz folder` in `GitHub Desktop` and Click `Commit to v4` + `Push origin`
        - Sometimes You will click `Fetch origin…`
            - And.. You might be `angry…`
            - Backup your notes…
    - Whenever you want to publish `your notes`, `commit` and `push`
    - ⚠️ Use carefully with your `Private Notes`
8. Your content will be published within minutes.
    - See `GitHub-Actions` - `Deploy Quartz site to GitHub Pages`
    - URL: `<GitHub-Username>.github.io/<Repository-Name>`
    - You Can Rename `quartz` and Move it to where you want.
3. If You have `Private Notes`, <font color="#ff0000">DON’T USE</font> `npx quartz sync` in quartz folder

(Optional) You can connect `http://localhost:8080` 
```shell
# Go to quartz folder
cd quartz

# Host local server
npx quartz build --serve
```

### `.gitignore`
- Below `Personal Setting`
```Shell
.DS_Store
.gitignore
node_modules
public
prof
tsconfig.tsbuildinfo
.quartz-cache
private/
.replit
replit.nix

# Personal Setting
.filen.trash.local
content/🔖 Daily Notes/
content/🔐 Private Notes/
.trash
.obsidian
.makemd
.space
.stfolder

# Media
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
```


### `quartz.config.ts`
- `pageTitle`, `baseUrl`, `ignorePatterns`, `header/body/code`(optional), `lightMode/darkMode colors`(optional)
```shell
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Filmnt",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "filmnt.github.io/",
    ignorePatterns: ["private", "templates", ".obsidian", "**/🔖 Daily Notes", "**/🔐 Private Notes", ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans",
        body: "Noto Sans",
        code: "Noto Sans",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#0F0F0F",
          lightgray: "#272727",
          gray: "#646464",
          darkgray: "#F1F1F1",
          dark: "#F1F1F1",
          secondary: "#64B5F6",
          tertiary: "#FFFFFF",
          highlight: "rgba(255, 255, 255, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git", "frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

```

### `quartz.layout.ts`
- `Github`, `Discord Community`(Footer contents), you can add additional links
    - quartz is not optimized on `mobile layout`…
```shell
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Discord": "https://discord.gg/MqkYZmxe",
      GitHub: "https://github.com/filmnt",

    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    ],
    
    left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),    
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.RecentNotes({ limit: 5 })),

    ],
    
    right: [
    Component.Graph(),
    Component.DesktopOnly(Component.Explorer()),
    Component.MobileOnly(Component.RecentNotes({ limit: 3 })),
    ],
    }

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),    
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.RecentNotes({ limit: 5 })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.Explorer()),
    Component.MobileOnly(Component.RecentNotes({ limit: 3 })),
  ],
}

```














[^1]: Mac: `Share` (New Folder) $\leftrightarrow$ Android: `Download Folder` / `Send & Receive`
[^2]: Phone Camera → Mac/Windows + Tablet / `Send & Receive`
[^3]: Mac: `Send Only`, Others: `Receive Only`
[^4]: Mac only
[^5]: See https://quartz.jzhao.xyz/
[^6]: Use `VS Code`