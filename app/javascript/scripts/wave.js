import WaveSurfer from 'wavesurfer.js'
document.addEventListener('DOMContentLoaded', () => {
  const wavePlace = document.querySelector("#waveform")
  if(wavePlace){
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const playingNowPath = document.querySelector("#waveform").dataset.path
    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      barWidth: 3.5,
      barHeight: 0.9,
      barGap: null,
    })
    const songDataName = document.querySelector("#waveform").dataset.filename
    const peakStorageRoot = 'http://34.67.190.190/api/v1/getjson/song_peaks/'
    fetch(proxyurl+peakStorageRoot+songDataName)
    .then(response => {
      if (!response.ok) {
          throw new Error("HTTP error " + response.status)
      }
      return response.json()
    })
    .then(peaks => {
      console.log('------------------------------')
      console.log('loaded peaks! sample_rate: ' + peaks.sample_rate)
      console.log('------------------------------')
      // load peaks into wavesurfer.js
      wavesurfer.load(proxyurl+playingNowPath, peaks.data)
    })
    .catch((e) => {
      console.error('error', e)
    })
    wavesurfer.load(proxyurl+playingNowPath)
  }
})