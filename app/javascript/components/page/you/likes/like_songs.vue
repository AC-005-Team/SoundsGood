<template >

  <div class="my-2 mr-2 justify-between parent text-gray-700">
    <div class="align-top bg-black overflow-hidden w-48 h-48 " @mouseover="mouseOver"  @mouseleave="mouseLeave" @click="playPause" >
      <!-- :style="{ 'background-image': 'url('+  this.url + ')' }" -->
      <i class="fas z-10 fa-pause" style="font-size: 60px" v-show="playing" />
      <i class="fas z-10 fa-play" style="font-size: 60px" v-show="playBtn && !playing" />
      <img class="object-cover h-48 w-48 child" :src="url">
    </div>
    <!-- <%#= 歌曲名稱、介紹、TAG標籤 %> -->

      <!-- <%#= 歌曲名稱 %> -->
      <div class="text-xs text-gray-700">
        <li @click.stop="songsShow" >{{ song.audio.name }}</li>
        <li> {{ song.audio.artist }} </li>
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
        if (this.playerTracks.song_id === this.song.song_id) {
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

      songsShow(){
        let id = this.song.song_id ;
        window.location.href = `/songs/${id}`;
      },


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



.parent {
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.fa-pause,
.fa-play {
  font-size: 65px;
  color: rgba(247, 66, 2, 1);
  text-shadow:2px 2px 4px #626262;
  position: absolute;
  margin: 0 auto;
  top: 70px;
  left: 70px;
}

.child {
    height: 100%;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.parent:hover .child:before, .parent:focus .child:before {
    display: block;
}

.parent:hover .child, .parent:focus .child {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}


.child:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(167, 190, 213, 0.25);
}


</style>
