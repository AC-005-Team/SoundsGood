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
      proxyurl: "https://cors-anywhere.herokuapp.com/",
      wafesurfer_comment: null
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
    var ctx = document.createElement('canvas').getContext('2d');
    var linGrad = ctx.createLinearGradient(0, 64, 0, 200);
    linGrad.addColorStop(0.6, 'rgba(96, 96, 96, 1)');
    linGrad.addColorStop(0.8, 'rgba(214, 214, 214, 0.83)');
    var linGrad2 = ctx.createLinearGradient(0, 64, 0, 200);
    linGrad2.addColorStop(0.4, 'rgba(251, 128, 49, 0.77)');
    linGrad2.addColorStop(1, 'rgba(253, 218, 218,0.4)');

     // const playingNowPath = document.querySelector(".waveform-wrap")
     // const isSmall = document.querySelector('waveform-small');
     this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        // waveColor: '#555555', //@todo: change color
        // progressColor: '#ff7626',
        cursorColor: '',
        barWidth: 3,
        waveColor: linGrad,
        progressColor: linGrad2,
        barHeight: 0.5,
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
.waveform-wrap {
  position: relative;
  height: 150px;
  opacity: .75;
  transition: .25s;
  cursor: pointer;
}
.waveform-wrap:hover {
  opacity: 1;
}
.waveform {
  position: absolute;
  width: 100%;
  height: 75px;
  overflow: hidden;
}
.waveform-comment-space {
  position: absolute;
  width: 100%;
  height: 75px;
}
.waveform-dummy-trigger {
  position: absolute;
  opacity: 0;
  height: 75px;
  width: 100%;
  /* z-index: 100; */

}
.waveform-dummy {
  position: absolute;
  /* z-index: 1; */
  opacity: 0;
  width: 100%;
  height: 75px;
  background-color: #555;
  overflow: hidden;
}

.waveform-dummy.wave-effect-show {
  opacity: 1;
}

.comment-avatar {
  position: absolute;
  top: 75px;
  z-index: 99;
}

</style>
