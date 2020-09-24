<template>
  <div>
    <div id="player1" class="aplayer"></div>
  </div>

</template>

<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { mapGetters } from 'vuex'


export default {
  data() {
    return {
      ap: null}
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
  },
  computed: {
    // ...mapGetters({
    //   isPLAY: 'songs/isPLAY',
    //   playerTracks:'songs/playerTracks'
    // })
  // getSong() {
  //   return this.$store.getters['playing'];
  // },
},
methods:{
  handlePlayPause(){
    if(this.isPLAY){
      this.ap.pause();
      this.ap.list.clear();
      this.ap.list.add(playerTracks.audio);
      this.ap.play();
    }else{
      this.ap.pause();
    }
  }
},
watch:{
    isPLAY(newValue, oldValue) {
      if(newVaule !== oldValue)
        this.handlePlayPause();
      }
    }
}





</script>
