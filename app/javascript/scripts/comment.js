$(document).on('turbolinks:load', function() {
  const hostPath = 'http://'+window.location.host
  const player = document.querySelector('#player1')
  const commentShowOnWave = $('.waveform-comment-space')
  const commentForms = document.querySelectorAll('.song-comment-form')

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
      if (comment.user_img == null){
        domEl.innerHTML = `<img src='https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg' width="20">`
      }else{
        domEl.innerHTML = `<img src='${comment.user_img}'>`
      }
    })
  }
  commentForms.forEach(form => {
    let commentInput = form.querySelector('.song-main-comment')
    commentInput.addEventListener('focus', (song) => {
      console.log(song)
      if(isNowPlaying(song)){
        console.log("it's me!")
        let timepoint = mmssToSecond(document.querySelector('span.aplayer-ptime').textContent)
        let actionValue = form.getAttribute('action')
        form.setAttribute('action', actionValue.split('?')[0].concat(`?timepoint=${timepoint}`))
        // append avatar to soundwave
      } else {
        console.log("not me!")
        // give random timepoint and append avatar
        // when submitted send timepoint to backend
      }
    })
  })
  function isNowPlaying(e){
    return player.dataset.playing ? ( player.dataset.playing == e.target.dataset.id   ) : false
  }

  function mmssToSecond(mmss) {
    let mmssAry = mmss.split(':')
    console.log(mmssAry)
    switch (mmssAry) {
      case (length==3) :
        return parseInt(mmssAry[0], 10)*60*60 + parseInt(mmssAry[1], 10)*60 + parseInt(mmssAry[2], 10)
    
      default:
        return parseInt(mmssAry[0], 10)*60 + parseInt(mmssAry[1], 10)
    }
  }
})