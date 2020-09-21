import WaveSurfer from 'wavesurfer.js'
import CursorPlugin from 'wavesurfer.js/src/plugin/cursor.js'
document.addEventListener('DOMContentLoaded', () => {
  const wavePlace = document.querySelector(".waveform-wrap") // see if at least a waveform div is present
  const peakStorageRoot = 'http://34.67.190.190/api/v1/getjson/song_peaks/'

  if(wavePlace){
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const playingNowPath = document.querySelectorAll(".waveform-wrap")
    playingNowPath.forEach(songEl => {
      renderWaveForm(songEl.dataset.path, songEl.dataset.filename, songEl)
    });

    /*
    var wavesurfer = WaveSurfer.create({
      container: '.waveform',
      waveColor: '#666666', //@todo: change color
      progressColor: '#ff7626',
      cursorColor: '',
      barWidth: 3,
      barHeight: 0.6,
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
    })

    var wavesurferDummy = WaveSurfer.create({
      container: '.waveform-dummy',
      waveColor: '#c45514', //@todo: change color
      progressColor: '#ff7626',
      barWidth: 3,
      barHeight: 0.6,
      height: 150,
      barRadius: 2,
      barGap: 2
    })
    const dummyWidth = () => { return document.querySelector('cursor').style['left'] }
    const dummyTrigger = document.querySelector('.waveform-dummy-trigger')
    const dummy = document.querySelector('.waveform-dummy')
    
    
    dummyTrigger.addEventListener('mouseenter', (e) => {
      dummy.classList.toggle('wave-effect-show')
      console.log('enter')
    })
    dummyTrigger.addEventListener('mouseleave', (e) => {
      dummy.classList.toggle('wave-effect-show')
      console.log('leave')
    })
    dummyTrigger.addEventListener('mousemove', (e) => {
      console.log(e.target)
      dummy.setAttribute('style', `width:${dummyWidth()}`)
    })
    
    dummyTrigger.addEventListener('click', (e)=>{
      
    })
    */
    
 
    // const songDataName = document.querySelector(".waveform").dataset.filename

    function getPeak(url, songDataName, wavesurfer) {
      fetch(proxyurl+peakStorageRoot+songDataName)
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
    
    const loadDefaultPeak = (url,wavesurfer) => fetch(proxyurl+peakStorageRoot+'default')
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

    function renderWaveForm(url, songDataName, parentSelector) {
      var domEl = document.createElement('div')
      domEl.classList.add('.waveform')
      parentSelector.appendChild(domEl)
      
      var wavesurfer = WaveSurfer.create({
        container: domEl,
        waveColor: '#666666', //@todo: change color
        progressColor: '#ff7626',
        cursorColor: '',
        barWidth: 3,
        barHeight: 0.6,
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
      console.log('ok');
      
      return wavesurfer;
    }
    

  }
})