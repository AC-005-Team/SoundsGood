<template>
<div>
  <div id="player1" class="aplayer"></div>
</div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'


export default {
  data() {
    return {
      ap: null,
      secOfFourth: ''
    }
  },
  mounted() {
    //畫面一開始的播放器
    this.ap = new APlayer({
      container: document.getElementById('player1'),
      listFolded: true,
      // audio: [{
      //   autoplay: true,
      //   theme: '#f18b00',
      //   cover: '', //required,
      //   title: '', // Required, music title
      //   author: '', // Required, music author
      //   url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
      // }]
    });
  },
  computed: {
    ...mapGetters({
      isPLAY: 'songs/isPLAY',
      continue: 'songs/continue',
      playerTracks: 'songs/playerTracks',
      duration: 'songs/duration'
    }),

    sendName(){
      if(this.isPLAY){
        return this.ap.audio.name
      }
    },

  },
  methods: {
    ...mapActions('songs', ['play', 'pause', 'getDuration', 'getWidth', 'getName']),
    handlePlayPause() {
      if (this.isPLAY && !this.continue) {
        this.ap.pause();
        this.ap.list.clear();
        this.ap.list.add(this.playerTracks.audio || this.playerTracks);
        this.ap.play();
        // this.$store.dispatch('songs/getDuration', this.playerTracks.audio.duration );
        // this.ap.on('timeupdate',() => {
        //   this.secOfFourth += 0.25
        //   console.log(this.secOfFourth)
        //   this.$store.dispatch('songs/getWidth', this.secOfFourth);
        // })
        // this.ap.on('ended',() => {
        //   this.secOfFourth = 0
        //   console.log(this.secOfFourth)
        //   this.$store.dispatch('songs/getWidth', this.secOfFourth);
        // })

      } else {
        this.ap.pause();
      }
    },
    handleContinue() {
      if (this.continue) {
        this.ap.play();
        // this.$store.dispatch('songs/pause');
      } else {
        this.ap.pause();
      }
    }

  },
  watch: {
    isPLAY(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.handlePlayPause();
      }
    },

    continue (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.handleContinue();
      }
    },
    sendName(){
      this.$store.dispatch('songs/getName', this.ap.audio.name );
    }
  }
}
</script>
