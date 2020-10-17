<template lang="html">
  <div class="">
    <div class="waveform-wrap waveform-small" :ref="this.click_id" >


      <div class="waveform" ref="waveform">
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
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'



export default {
  data() {
    return {
      wavesurfer: null,
      p: this.path,
      f: this.filename,
      // i: this.id,
      peakStorageRoot: 'https://peaks.soundsgood.world/api/v1/getjson/song_peaks/',
      proxyurl: "https://cors-anywhere.herokuapp.com/",
      wafesurfer_comment: null,
      waveProgress: '',
      playingDuration: '',
      waveformWidth: '',
      secOfFourth: ''
    };
  },
  computed: {
    ...mapGetters({
      isPLAY: 'songs/isPLAY',
      continue: 'songs/continue',
      playerTracks:'songs/playerTracks',
      width: 'songs/width',
      duration: 'songs/duration'
    })
  },
  props:['path','filename', 'click_id' ],
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
    },


    handlePlayPause(){
      if(this.isPLAY){
        if(this.playerTracks.song_id == this.click_id){
          let waveProgress = this.$refs[this.click_id]
          waveProgress.style.width = '';
          this.waveformWidth = this.$refs[this.click_id].offsetWidth;
          waveProgress.style.width = (this.waveformWidth/this.duration)*(this.width)
          console.log(this.duration)
        }
      }
    },


  },
  mounted(){
    var ctx = document.createElement('canvas').getContext('2d');
    const waveDarkSmall = ctx.createLinearGradient(900, 0, 900, 200);
    waveDarkSmall.addColorStop(0.55, 'rgb(96, 96, 96)');
    waveDarkSmall.addColorStop(0.56, 'rgb(255, 255, 255)');
    waveDarkSmall.addColorStop(0.57, 'rgb(215, 215, 215)');
    const waveProgressSmall = ctx.createLinearGradient(900, 0, 900, 200);
    waveProgressSmall.addColorStop(0.55, '#f74304');
    waveProgressSmall.addColorStop(0.56, 'rgb(255, 255, 255)');
    waveProgressSmall.addColorStop(0.57, '#ffcfb5');

     // const playingNowPath = document.querySelector(".waveform-wrap")
     // const isSmall = document.querySelector('waveform-small');
     this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        cursorColor: '',
        barWidth: 3,
        waveColor: waveDarkSmall,
        progressColor: waveProgressSmall,
        barHeight: 0.5,
        height: 100,
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

  },

  watch:{
      isPLAY(newValue, oldValue) {
        if(newValue !== oldValue){
          this.handlePlayPause();
        }
      },

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
