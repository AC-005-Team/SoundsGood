import WaveSurfer from 'wavesurfer.js'
import CursorPlugin from 'wavesurfer.js/src/plugin/cursor.js'
document.addEventListener('DOMContentLoaded', () => {
  const wavePlace = document.querySelector(".waveform")
  if(wavePlace){
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const playingNowPath = document.querySelector(".waveform").dataset.path
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
    
 
    const songDataName = document.querySelector(".waveform").dataset.filename
    const peakStorageRoot = 'http://34.67.190.190/api/v1/getjson/song_peaks/'

    fetch(proxyurl+peakStorageRoot+songDataName)
    .then(response => {
      if (!response.ok) {
        loadDefaultPeak()
        return
      }
      return response.json()
    })
    .then(peaks => {
      if(peaks.sample_rate == 0){
        loadDefaultPeak()
        return
      }
      console.log('------------------------------')
      console.log('loaded peaks! sample_rate: ' + peaks.sample_rate)
      console.log('------------------------------')
      // load peaks into wavesurfer.js
      wavesurferDummy.load(proxyurl+playingNowPath, peaks.data)
      wavesurfer.load(proxyurl+playingNowPath, peaks.data)
    })
    .catch((e) => {
      console.error('error', e)
    })
    
    const loadDefaultPeak = () => fetch(proxyurl+peakStorageRoot+'default')
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
      wavesurferDummy.load(proxyurl+playingNowPath, peaks.data)
      wavesurfer.load(proxyurl+playingNowPath, peaks.data)
    })
    .catch((e) => {
      console.error('error', e)
      wavesurfer.load(proxyurl+playingNowPath)
    })

    function renderWaveForm(url, parentSelector) {
      var domEl = document.createElement('div')
      document.querySelector(parentSelector).appendChild(domEl)
      
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
      });
      wavesurfer.load(url);
      console.log('hey');
      
      return wavesurfer;
    }
    

  }
})