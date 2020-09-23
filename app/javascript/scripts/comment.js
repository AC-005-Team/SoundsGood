$(document).on('turbolinks:load', function() {
  const hostPath = 'http://'+window.location.host
  const player = document.querySelector('#player1')
  const commentShowOnWave = $('.waveform-comment-space')
  const commentForms = document.querySelectorAll('.song-comment-form')
  const userAvatarUrl = document.querySelector('.current_user-avatar').getAttribute('src')

  if(commentShowOnWave){ //@todo: 決定是否做成SSR
    const songs = document.querySelectorAll('.waveform-comment-space')
    songs.forEach( song => {
      const songId = song.dataset.id
      fetch(`${hostPath}/api/v1/songs/${songId}`)
      .then(res => {
        if(!res.ok){
          throw new Error("HTTP error " + res.status)
        }
        return res.json()
      })
      .then(songInfo => {
        let duration = songInfo.duration
        fetch(`${hostPath}/api/v1/songs/${songId}/comments`)
        .then(res => {
          if(!res.ok){
            throw new Error("HTTP error " + res.status)
          }
          return res.json()
        })
        .then(comments => {
          appendCommentsToSong(song, comments, duration)
        })
        .catch(err => {
          console.error(err)
        })
      })

      
    })
    commentForms.forEach(form => {
      let commentInput = form.querySelector('.song-main-comment')

      commentInput.addEventListener('focus', (event) => { // @todo: remove when blur
        let targetSongId = event.target.dataset.id
        let playingTargetDuration = mmssToSecond(document.querySelector('span.aplayer-dtime').textContent)
        if(isNowPlaying(event)){
          let timepoint = mmssToSecond(document.querySelector('span.aplayer-ptime').textContent)
          let timePercent = timepoint/playingTargetDuration
          let actionValue = form.getAttribute('action')
          readyForComment(userAvatarUrl, timePercent, targetSongId)
          form.setAttribute('action', actionValue.split('?')[0].concat(`?timepoint=${timepoint}`))
        } else {
          let timepoint = getRandomInt(playingTargetDuration) //@todo: change to comment target duration after index been updated
          let timePercent = timepoint/playingTargetDuration
          let actionValue = form.getAttribute('action')
          readyForComment(userAvatarUrl, timePercent, targetSongId)
          form.setAttribute('action', actionValue.split('?')[0].concat(`?timepoint=${timepoint}`))
        }
      })
    })
    commentShowOnWave.on('click', () => {
      //record time, append avatar, cursor to comment text field
    })
  }
  function appendCommentsToSong(song, comments, duration){
    comments.forEach(comment => {
      appendCommentToSong(song, comment, duration)
    })
  }
  function appendCommentToSong(song, comment, duration){
    var domEl = document.createElement('div')
    
    domEl.classList.add('comment-avatar')
    domEl.setAttribute('style', `left: ${comment.timepoint/duration*100}%`)
    song.appendChild(domEl)
    if (comment.user_img == null){
      domEl.innerHTML = `<img src='https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg' width="20">`
    }else{
      domEl.innerHTML = `<img src='${comment.user_img}'>`
    }
  }
  function readyForComment(imgUrl, timePercent, songId){
    var domEl = document.createElement('div')
    let song = document.querySelector(`.waveform-comment-space[data-id="${songId}"]`)
    domEl.classList.add('comment-avatar')
    domEl.setAttribute('style', `left: ${timePercent*100}%`)
    song.appendChild(domEl)
    if (imgUrl == ""){
      domEl.innerHTML = `<img src='https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg' width="20">`
    }else{
      domEl.innerHTML = `<img src='${imgUrl}' width="20">`
    }
  }
  
  function isNowPlaying(e){
    return player.dataset.playing ? ( player.dataset.playing == e.target.dataset.id   ) : false
  }

  function mmssToSecond(mmss) {
    let mmssAry = mmss.split(':')
    if(mmssAry.length == 3 ) {
        return parseInt(mmssAry[0], 10)*60*60 + parseInt(mmssAry[1], 10)*60 + parseInt(mmssAry[2], 10)
    } else {
        return parseInt(mmssAry[0], 10)*60 + parseInt(mmssAry[1], 10)
    }
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
})