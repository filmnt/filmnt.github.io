let firstTime = true

function sendMessage<T>(message: T) {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  if (!iframe) return;
  iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}

const onThemeToggle = ()=>{
  const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
  changeTheme(toggleSwitch.checked)
}

function changeTerm(url) {
  sendMessage({ setConfig: { term: url } })
}

function changeTheme(dark) {
  sendMessage({ setConfig: { theme: dark? "dark_protanopia":"light_protanopia"} })
}

function loadComments() {
  const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
  const script = document.createElement("script");

  script.type = "text/javascript"
  script.src = "https://giscus.app/client.js"
  script.async = true
  script.setAttribute("data-repo", "filmnt/home")
  script.setAttribute("data-repo-id", "R_kgDOMFsF7g")
  script.setAttribute("data-category", "Comments")
  script.setAttribute("data-category-id", "DIC_kwDOMFsF7s4Cf5sz")
  script.setAttribute("data-mapping", "title")
  script.setAttribute("data-strict", "0")
  script.setAttribute("data-reactions-enabled", "1")
  script.setAttribute("data-emit-metadata", "0")
  script.setAttribute("data-input-position", "bottom")
  script.setAttribute("data-theme", toggleSwitch.checked? "dark_protanopia":"light_protanopia")
  script.setAttribute("data-lang", "en")
  script.setAttribute("crossorigin", "anonymous")

  document.body.appendChild(script);
}


document.addEventListener("nav", ({detail}) => {
  if (firstTime) {
    const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
    toggleSwitch.addEventListener("change", onThemeToggle)
    window.addCleanup(() => toggleSwitch.removeEventListener("change", onThemeToggle))

    if (detail.url !== "index") {
      loadComments()
    }
  }

  changeTerm(detail.url)
})