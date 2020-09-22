$(document).on('turbolinks:load', function() {
  const hostPath = 'http://'+window.location.host
  const commentShowOnWave = $('.waveform-comment-space')
  if(commentShowOnWave){
    const songs = document.querySelectorAll('.waveform-comment-space')

    songs.forEach( song => {
      const songId = song.dataset.id
      fetch(`${hostPath}/api/v1/songs/${songId}/comments`)
      .then(res => {
        if(!res.ok){
          throw new Error("HTTP error " + res.status)
        }
        return res.json()
      })
      .then(comments => {
        appendCommentsToSong(song, comments)
      })
      .catch(err => {
        console.error(err)
      })
    })
  }
  commentShowOnWave.on('click', () => {
    //record time, append avatar, cursor to comment text field
  })
  function timePointToPixel(timepoint){
    return timepoint+200
  }
  function appendCommentsToSong(song, comments){
    console.log(comments)
    comments.forEach(comment => {
      var domEl = document.createElement('div')
    
      domEl.classList.add('comment-avatar')
      domEl.setAttribute('style', `transform: translateX(${timePointToPixel(comment.timepoint)}px)`)
      song.appendChild(domEl)

      domEl.innerHTML = `<img src='${comment.user_img}'>`
    })
  }

})