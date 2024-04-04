type TEssential = {
  window: any
  envs: any
}

function essential(data: TEssential) {
  /* const window: Window = data.window */
  data.window.essentialData = data.envs
  return "Do Nothing"
  /* const html = win.document.querySelector("html")
  if (html) {
    html.remove?.()
  }
  return "Foi" */
}