import WaveSurfer from 'wavesurfer.js'
document.addEventListener('DOMContentLoaded', () => {
  const wavePlace = document.querySelector("#waveform")
  if(wavePlace){
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const playingNowPath = document.querySelector("#waveform").dataset.path
    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      barWidth: 2,
      barHeight: 5,
      barGap: null
    })
    wavesurfer.load(proxyurl+playingNowPath)
  }
})