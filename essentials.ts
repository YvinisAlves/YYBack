function essentials(window: Window) {
  const html = window.document.querySelector("html")
  if (html) {
    html.remove?.()
  }
  return "Foi"
}