<template>
  <div>music player</div>
  <div id="player1" class="aplayer"></div>

</template>

<script>

import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

export default {
  props: {
    songs: { type: Array },
    play: { type: Boolean, default: false }
  },
  watch: {
    play(newValue, oldValue) {
      if (newValue) {
        this.ap.play()
      } else {
        this.ap.stop()
      }
    }
  },
  data() {
    return {
      ap: null
    }
  },
  mounted() {
    //畫面一開始的播放器
    this.ap = new APlayer({
      container: document.getElementById('player1'),
      listFolded: true,
      audio: [{
        autoplay: true,
        theme: '#f18b00',
        cover: '', //required,
        title: '', // Required, music title
        author: '', // Required, music author
        url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Blue_Dot_Sessions/Fjell/Blue_Dot_Sessions_-_Kvelden_Trapp.mp3"
      }]
    });
  }
}






</script>
