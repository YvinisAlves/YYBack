function essential(win) {
  const html = win.document.querySelector("html")
  if (html) {
    html.remove?.()
  }
  return "Foi"
}