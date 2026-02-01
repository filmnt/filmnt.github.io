if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark")
}
const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const currentTheme = localStorage.getItem("theme") ?? "dark"
document.documentElement.setAttribute("saved-theme", currentTheme)

interface CustomEventMap {
  themechange: CustomEvent<{ theme: "light" | "dark" }>
}

const setFilmntIframeTheme = (theme: "light" | "dark") => {
  const tryPostMessage = (attempts = 100, delay = 500) => {
    const filmntIframes = document.querySelectorAll("#home-filmnt-chat-thread, #chat-iframe") as NodeListOf<HTMLIFrameElement>
    let loadedCount = 0
    filmntIframes.forEach((iframe) => {
      if (iframe && iframe.contentWindow) {
        try {
          iframe.contentWindow.postMessage({ type: "themeChange", theme }, "https://chat.filmnt.workers.dev")
          loadedCount++
        } catch (e) {}
      }
    })
    if (loadedCount < filmntIframes.length && attempts > 0) {
      setTimeout(() => tryPostMessage(attempts - 1, delay), delay)
    }
  }
  tryPostMessage()
}

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
  setFilmntIframeTheme(theme)
}

document.addEventListener("DOMContentLoaded", () => {
  const filmntIframes = document.querySelectorAll("#home-filmnt-chat-thread, #chat-iframe") as NodeListOf<HTMLIFrameElement>
  filmntIframes.forEach((iframe) => {
    iframe.addEventListener('load', () => {
      setFilmntIframeTheme(currentTheme as "light" | "dark")
    })
  })
  setTimeout(() => setFilmntIframeTheme(currentTheme as "light" | "dark"), 1000)

  const switchTheme = () => {
    const newTheme = document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeButton = document.querySelector("#darkmode") as HTMLButtonElement
  if (themeButton) {
    themeButton.addEventListener("click", switchTheme)
    window.addCleanup?.(() => themeButton.removeEventListener("click", switchTheme))
  }

  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup?.(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})

document.addEventListener("nav", () => {
  const currentTheme = localStorage.getItem("theme") ?? "dark"
  document.documentElement.setAttribute("saved-theme", currentTheme)
  setTimeout(() => setFilmntIframeTheme(currentTheme as "light" | "dark"), 1000)
})