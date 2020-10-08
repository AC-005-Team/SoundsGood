export function playAlong(songEl){ // song represents certain .waveform-wrap
  const player = document.querySelector('#player1')
  const playing = player.querySelector('span.aplayer-ptime')
  const durationTime = player.querySelector('span.aplayer-dtime').textContent
  const playingTime = playing.textContent
  if (isNowPlaying(songEl)){
    console.log('its me')
  }




  function isNowPlaying(songEl){
    return player.dataset.playing ? ( player.dataset.playing == songEl.dataset.id   ) : false
  }
}