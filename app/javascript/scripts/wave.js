import WaveSurfer from 'wavesurfer.js'
import CursorPlugin from 'wavesurfer.js/src/plugin/cursor.js'
document.addEventListener('turbolinks:load', () => {
  const wavePlace = document.querySelector(".waveform-wrap") // see if at least a waveform div is present
  const peakStorageRoot = 'https://peaks.soundsgood.world/api/v1/getjson/song_peaks/'

  if(wavePlace){
    const proxyurl = "https://cors-anywhere.herokuapp.com/" // for accessing s3
    const playingNowPath = document.querySelectorAll(".waveform-wrap")
    if(wavePlace.classList.contains('waveform-light')){
      // light
      playingNowPath.forEach(songEl => {
        renderCommentSpace(songEl.dataset.path, songEl.dataset.filename, songEl, '#bbbbbb')
        renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl, '#ffffff')
      });
    } else {
      // dark
      playingNowPath.forEach(songEl => {
        renderCommentSpace(songEl.dataset.path, songEl.dataset.filename, songEl, '#bbbbbb')
        renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl, '#555555')
      });
  }

    function getPeak(url, songDataName, wavesurfer) {
      fetch(peakStorageRoot+songDataName)
      .then(response => {
        if (!response.ok) {
          loadDefaultPeak(url, wavesurfer)
          return
        }
        return response.json()
      })
      .then(peaks => {
        if(peaks.length == 0){
          loadDefaultPeak(url, wavesurfer)
          return
        }
        console.log('------------------------------')
        console.log('loaded peaks! sample_rate: ' + peaks.sample_rate)
        console.log('------------------------------')
        // load peaks into wavesurfer.js
        // wavesurferDummy.load(proxyurl+url, peaks.data)
        wavesurfer.load(proxyurl+url, peaks.data)
      })
      .catch((e) => {
        console.log(songDataName)
        console.error('error', e)
      })
    }
    
    function loadDefaultPeak(url,wavesurfer){
      fetch(peakStorageRoot+'default')
      .then(response => {
        if(!response.ok) {
          throw new Error("HTTP error " + response.status)
        }
        return response.json()
      })
      .then(peaks => {
        console.log('------------------------------')
        console.log('loaded default! sample_rate: ' + peaks.sample_rate)
        console.log('------------------------------')
        // load peaks into wavesurfer.js
        // wavesurferDummy.load(proxyurl+url, peaks.data)
        wavesurfer.load(proxyurl+url, peaks.data)
      })
      .catch((e) => {
        console.error('error', e)
        wavesurfer.load(proxyurl+url)
      })
    }

    function renderWaveForm(url, songDataName, parentSelector, waveColor) {
      var domEl = document.createElement('div')
      domEl.classList.add('waveform')
      parentSelector.appendChild(domEl)
      
      var wavesurfer = WaveSurfer.create({
        container: domEl,
        waveColor: waveColor, //@todo: change color
        progressColor: '#ff7626',
        cursorColor: '',
        barWidth: 3,
        barHeight: 0.8,
        height: 150,
        barRadius: 2,
        cursorWidth: 1,
        barGap: 2,
        plugins: [
          CursorPlugin.create({
            showTime: true,
            opacity: 0,
            customShowTimeStyle: {
              'background-color': '#000',
              color: '#fff',
              padding: '2px',
              'font-size': '10px'
            }
          })
        ]
      });
      getPeak(url, songDataName, wavesurfer);
      return wavesurfer;
    }

    function renderCommentSpace(url, songDataName, parentSelector, waveColor) {
      var domEl = document.createElement('div')
      domEl.classList.add('waveform-comment-space')
      domEl.setAttribute('data-id', parentSelector.dataset.id)
      parentSelector.appendChild(domEl)
      
      var wavesurfer = WaveSurfer.create({
        container: domEl,
        waveColor: waveColor, //@todo: change color
        progressColor: '#ffcfb5',
        barWidth: 3,
        barHeight: 0.32,
        height: 150,
        barRadius: 2,
        cursorWidth: 0,
        barGap: 2,
        plugins: [
          CursorPlugin.create({
            showTime: true,
            opacity: 0,
            customShowTimeStyle: {
              'background-color': '#000',
              color: '#fff',
              padding: '2px',
              'font-size': '10px'
            }
          })
        ]
      });
      getPeak(url, songDataName, wavesurfer);
      return wavesurfer;
    }
  }
})