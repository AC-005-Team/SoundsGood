export function shareWindow(){
  const rootPath = 'https://'+window.location.host
  const shareTwitter = document.querySelector('.share-twitter')
  const shareFacebook = document.querySelector('.share-facebook')

  shareTwitter.addEventListener('click', (e) => {
    console.log('clicked') // @todo: remove
    let dataSet = e.target.dataset
    openWindow(getTwitterUrl(rootPath, dataSet.link, dataSet.name,dataSet.artist),'',600,400)
  })

  shareFacebook.addEventListener('click', (e) => {
    console.log('clicked') // @todo: remove
    let dataSet = e.target.dataset
    openWindow(getFacebookUrl(rootPath, dataSet.link),'',600,400)

  })

  function openWindow(url, name, width, height){
    var screenLeft=0, screenTop=0;
    if(!name) name = ''
    if(!width) width = 600
    if(!height) height = 400
    if(typeof window.screenLeft !== 'undefined') {
      screenLeft = window.screenLeft
      screenTop = window.screenTop
    } else if(typeof window.screenX !== 'undefined') {
      screenLeft = window.screenX
      screenTop = window.screenY
    }       
    let PosX = screenLeft + (screen.width - width) / 2
    let PosY = screenTop + (screen.height - height)*0.75 / 2
    let features = `width=${width},height=${height},top=${PosY},left=${PosX},toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no`
    var win = window.open(url,name,features)
    win.focus()
    return false
  }

  function getFacebookUrl(root, link){
    return `https://www.facebook.com/sharer/sharer.php?u=${root}${link}`
  }
  
  function  getTwitterUrl(root, link, name, artist) {
    return `https://twitter.com/intent/tweet?url=${root}${link}&text=Have%20you%20heard%20%E2%80%98${name}%E2%80%99%20by%20${artist}%20on%20%23SoundCloud%3F%20%23np&related=soundcloud`
  }
}