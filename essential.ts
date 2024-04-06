type TEssential = {
  window: any
  data: {
    envs: any
    user: {
      token: string
      id: string
    }
  }
}

function essential(data: TEssential) {
  /* const window: Window = data.window */
  data.window.essentialData = data.data
  return "Do Nothing"
  /* data.window.essentialData.APIS.API_BUILDER.defaults.headers[":path:"] = "0" */
  /* const html = win.document.querySelector("html")
  if (html) {
    html.remove?.()
  }
  return "Foi" */
}