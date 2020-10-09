import { renderComments } from './comment'
import WaveSurfer from 'wavesurfer.js'
import CursorPlugin from 'wavesurfer.js/src/plugin/cursor.js'
document.addEventListener('DOMContentLoaded', () => {
  const wavePlace = document.querySelector(".waveform-wrap") // see if at least a waveform div is present
  const peakStorageRoot = 'https://peaks.soundsgood.world/api/v1/getjson/song_peaks/'

  if(wavePlace){
    const proxyurl = "https://cors-anywhere.herokuapp.com/" // for accessing s3
    const playingNowPath = document.querySelectorAll(".waveform-wrap")
    const isLight = el => { return el.classList.contains('waveform-light') }
    const isSmall = el => { return el.classList.contains('waveform-small') }
    playingNowPath.forEach(songEl=>{
      if(isLight(songEl) && isSmall(songEl)){
        console.log('light and small')
        renderCommentSpace(songEl.dataset.path, songEl.dataset.filename, songEl, '#bbbbbb', 0.2)
        renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl, '#ffffff', 0.5)
      } else if(isLight(songEl) && !isSmall(songEl)) {
        console.log('light and not small')
        renderCommentSpace(songEl.dataset.path, songEl.dataset.filename, songEl, '#bbbbbb', 0.32)
        renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl, '#ffffff', 0.8)
      } else if(!isLight(songEl) && isSmall(songEl)) {
        console.log('not light and small')
        renderCommentSpace(songEl.dataset.path, songEl.dataset.filename, songEl, '#bbbbbb', 0.2)
        renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl, '#555555', 0.5)
      } else {
        console.log('not light and not small')
        renderCommentSpace(songEl.dataset.path, songEl.dataset.filename, songEl, '#bbbbbb', 0.32)
        renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl, '#555555', 0.8)
      }
      renderComments(songEl)
    })

    function getPeak(url, songDataName, wavesurfer) {
      fetch(peakStorageRoot+songDataName)
      .then(response => {
        if (!response.ok) {
          loadDefaultPeak(url, wavesurfer) // if no peak data, load default
          return
        }
        return response.json()
      })
      .then(peaks => {
        if(peaks.length == 0){
          loadDefaultPeak(url, wavesurfer) // if peak data contains error, load default
          return
        }
        console.log('------------------------------')
        console.log('peaks loaded! sample_rate: ' + peaks.sample_rate)
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
        console.log('default loaded! sample_rate: ' + peaks.sample_rate)
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

    function renderWaveForm(url, songDataName, parentSelector, waveColor, size) {
      var domEl = document.createElement('div')
      domEl.classList.add('waveform')
      parentSelector.appendChild(domEl)
      
      var wavesurfer = WaveSurfer.create({
        container: domEl,
        waveColor: waveColor, //@todo: change color
        progressColor: '#ff7626',
        cursorColor: '',
        barWidth: 3,
        barHeight: size,
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

    function renderCommentSpace(url, songDataName, parentSelector, waveColor, size) {
      var domEl = document.createElement('div')
      domEl.classList.add('waveform-comment-space')
      domEl.setAttribute('data-id', parentSelector.dataset.id)
      parentSelector.appendChild(domEl)
      
      var wavesurfer = WaveSurfer.create({
        container: domEl,
        waveColor: waveColor, //@todo: change color
        progressColor: '#ffcfb5',
        barWidth: 3,
        barHeight: size,
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