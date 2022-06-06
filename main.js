;(() => {
  nw.Screen.Init()
  setInterval(() => {
    console.log('hello world!')
  }, 500).unref()
})()
