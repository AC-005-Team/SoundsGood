<template lang="html">
  <div class="">
    <div class="waveform-wrap waveform-small" >


      <div id="waveform" ref="waveform">
        <!-- Here be the waveform -->
      </div>

      <div class="waveform-dummy-trigger"></div>
      <div class="waveform-dummy song-waveform"></div>
    </div>



  </div>

</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import CursorPlugin from 'wavesurfer.js/src/plugin/cursor.js'
import { renderComments } from '../../../../packs/comment.js'


export default {
  data() {
    return {
      wavesurfer: null,
      p: this.path,
      f: this.filename,
      i: this.id,
      peakStorageRoot: 'https://peaks.soundsgood.world/api/v1/getjson/song_peaks/',
      proxyurl: "https://cors-anywhere.herokuapp.com/"
    };
  },
  props:['path','filename','id'],
  methods:{
    getPeak(p, f, wavesurfer) {
      fetch(this.peakStorageRoot+this.f)
      .then(response => {
        if (!response.ok) {
          loadDefaultPeak(p, wavesurfer) // if no peak data, load default
          return
        }
        return response.json()
      })
      .then(peaks => {
        if(peaks.length == 0){
          loadDefaultPeak(this.p, this.wavesurfer) // if peak data contains error, load default
          return
        }
        console.log('------------------------------')
        console.log('peaks loaded! sample_rate: ' + peaks.sample_rate)
        // load peaks into wavesurfer.js
        // wavesurferDummy.load(proxyurl+url, peaks.data)
        this.wavesurfer.load(this.proxyurl+this.p, peaks.data)
      })
      .catch((e) => {
        console.error('error', e)
      })
    },
    loadDefaultPeak(url,wavesurfer){
      fetch(this.peakStorageRoot+'default')
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
        this.wavesurfer.load(this.proxyurl+this.p, peaks.data)
      })
      .catch((e) => {
        console.error('error', e)
        this.wavesurfer.load(this.proxyurl+this.p)
      })
    }

  },
  mounted(){
     // const playingNowPath = document.querySelector(".waveform-wrap")
     // const isSmall = document.querySelector('waveform-small');
     this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        waveColor: '#555555', //@todo: change color
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
      this.getPeak(this.p, this.f, this.wavesurfer);

  }

}
</script>

<style lang="css" scoped>
</style>
