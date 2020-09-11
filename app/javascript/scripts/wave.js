import WaveSurfer from 'wavesurfer.js'
const proxyurl = "https://cors-anywhere.herokuapp.com/"
const playingNowPath = document.querySelector("#waveform").dataset.path
var wavesurfer = WaveSurfer.create({
  container: '#waveform'
})

wavesurfer.load(proxyurl+playingNowPath)