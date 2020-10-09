<template >
<div>
  <div class="my-2 mr-2 flex flex-col justify-between parent">
    <div class="align-top w-32 h-32 bg-black overflow-hidden children" @mouseover="mouseOver"  @mouseleave="mouseLeave" @click="playPause" >
      <!-- :style="{ 'background-image': 'url('+  this.url + ')' }" -->
      <i class="fas z-10 fa-pause" style="font-size: 60px" v-show="playing" />
      <i class="fas z-10 fa-play" style="font-size: 60px" v-show="playBtn && !playing" />
      <img class="object-cover h-32 max-w-xl w-full mr-4" :src="url">
    </div>
    <!-- <%#= 歌曲名稱、介紹、TAG標籤 %> -->
    <div class="">
      <!-- <%#= 歌曲名稱 %> -->
      <li>{{ song.audio.name }}</li>
      <div class="text-xs text-gray-400">
        <li>{{ song.audio.artist }}</li>
        <!-- <%= content_tag(:li,song.intro, data: {value: song.intro} ) %> -->
      </div>

    </div>

  </div>


</div>
</template>

<script>
import axios from 'axios';
import Api from '../../../../api/api'
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'likeSongs',
  data(){
      return {
        url: this.song.audio.cover,
        isActive: false,
        playBtn: false
      }
  },
  props:['song'],
  computed: {
      ...mapGetters({
        playerTracks: 'songs/playerTracks',
        playlistTracks: 'playlistsSongs/listsongs',
        continue: "songs/continue",
        isPLAY: "songs/isPLAY",
      }),

      playing() {
        if (this.playerTracks.id === this.song.song_id) {
          if (this.isPLAY === false) {
            return false;
          }
          return true;
        } else {
          return false;
        }
      },
    },
    methods: {
      ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause"]),
      ...mapActions('playlistsSongs', ['loadList']),
      ...mapActions("favorite", ["toggleLike"]),
      ...mapActions("playlists", ["loadSongs"]),
      ...mapActions("song", ["loadSong"]),


      playPause() {
        if (this.playerTracks.song_id !== this.song.song_id || !this.playerTracks) {
          this.$store.dispatch('songs/pause')
          this.$store.dispatch('song/loadSong', this.song.song_id )
        } else {
          if (this.isPLAY === true) {
            this.$store.dispatch("songs/pause");
            this.$store.dispatch("songs/continuePause");
          } else {
            this.$store.dispatch("songs/continuePlay");
            this.$store.dispatch("songs/play");
          }
        }
      },
      mouseOver() {
        if(this.isPlay === true){
          this.playBtn = false;
        }else{
          this.playBtn = true;
        }
      },

      mouseLeave() {
        this.playBtn = false;
      },



      toggle() {
        return this.isActive = !this.isActive
      },
      yourClickHandler() {
        if (!event.target.matches('.dropbtn')) {
          this.isActive = false
        }

      }



    },
}


</script>

<style lang="css" scoped>
</style>
