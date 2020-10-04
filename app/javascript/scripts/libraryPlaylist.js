document.addEventListener('turbolinks:load', () => {
  const parentDom = document.querySelector('.library-playlist-place')
  const hostPath = 'http://'+window.location.host
  const template = document.querySelector('template')
  if(parentDom){
    parentDom.innerHTML = ''
    fetch(`${hostPath}/api/v1/playlists/library`)
    .then( res=> {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    })
    .then( playlists => {
      playlists.forEach( playlist => {
        appendEl(playlist)
      })
    })
    .catch( err=> {
      console.error(err)
    })

    function appendEl(playlist){
      const domEl = document.createElement('div')
      domEl.innerHTML = template.innerHTML
      const imgPlace = domEl.querySelector('.set-img-place')
      const infoPlace = domEl.querySelector('.set-info-place')
      const playlistPath = hostPath+`/playlists/${playlist.playlist_id}`
      const userPath = hostPath+`/users/${playlist.user_id}`
      imgPlace.innerHTML = `<a class="block"><img src=${playlist.img_url}></a>`
      infoPlace.innerHTML = `<li><a href="${playlistPath}">${playlist.name}</a></li><li>${playlist.user_name}</li>`
      parentDom.appendChild(domEl)
    }
  }
})