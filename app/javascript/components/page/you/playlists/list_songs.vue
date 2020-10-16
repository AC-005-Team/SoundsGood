<template lang="html">
  <div class="flex justify-start items-center bg-gray-900" @mouseover="mouseOver"  @mouseleave="mouseLeave" >
    <div class="flex justify-start items-center w-3/4 md:w-1/2">
      <img :src="song.cover" class="h-10 w-10 m-1 md:mx-4">
      <div class="mx-1 md:mx-4">{{ song.user }}</div>
      <div class="mx-1 md:mx-4">{{ song.title }}</div>
    </div>
    <div class="flex-row justify-center md:justify-start md:w-1/2">
      <i class="fa fa-heart mr-2" @click.stop="like" ></i>
      <i class="fas fa-play cursor-pointer" @click="playTheSong" v-show="playBtn && !playing"></i>
      <i class="fas fa-pause" v-if="playing" @click="playTheSong" ></i>
    </div>
  </div>


<!-- <button :song-id="song.id" @click="playTheSong" class="mx-2">▶</button> -->
<!-- <div class="dropdown">
  <button class="dropbtn" @click="toggle">+</button>
  <div class="">
    <div id="myDropdown" class='dropdown-content ' :class=" [isActive? 'show' : '']" >
    <a>add to play next</a>
    <a>add to playlist</a>
  </div>
  </div>
</div> -->

</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'

export default {
  data(){
    return{
      playBtn: false
    }
  },
  props:['song'],
  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs',
      playerTracks: 'songs/playerTracks',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),
    playing() {
      if (this.playerTracks.song_id === this.song.id) {
        if (this.isPLAY === false) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    },




  },



  ...mapActions('playlistsSongs', ['loadList', 'loadSong']),
  ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause"]),
  created() {
          console.log('ccccccccccccc')
      document.body.classList.add("bg-gray-900")
    console.log("create", this.$route.params.id)
    this.$store.dispatch('playlistsSongs/loadList', this.$route.params.id)
  },
  methods: {
    toggle() {
      return this.isActive = !this.isActive
    },
    yourClickHandler() {
      if (!event.target.matches('.dropbtn')) {
        this.isActive = false
      }
    },
    mouseOver: function() {
      if(this.isPlay === true){
        this.playBtn = false;
      }else{
        this.playBtn = true;
      }
    },

    mouseLeave: function() {
      this.playBtn = false;
    },

    playTheSong() {
      if (this.playerTracks.song_id !== this.song.id || !this.playerTracks) {
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('song/loadSong', this.song.id)
      } else {
        if (this.isPLAY === true) {
          console.log('123')
          this.$store.dispatch("songs/pause");
          this.$store.dispatch("songs/continuePause");
        } else {
          console.log('456')
          this.$store.dispatch("songs/continuePlay");
          this.$store.dispatch("songs/play");
        }
      }
    }
    }
  }
</script>

<style lang="css" scoped>
.head {
background-size:     cover;
background-image: url(/img/5497.jpg);
filter: grayscale(1);
background-position: center;
animation: shrink 5s infinite alternate;
}
/* @keyframes shrink {
  0% {
    background-size: 130% 130%;
  }
  100% {
    background-size: 150% 150%;
  }
} */
.dropbtn {

  background-color: #3498DB;
  color: white;
  padding: 3px 3px;
  font-size: 15px;
  border: none;
  cursor: pointer;
}
.dropbtn:hover, .dropbtn:focus {
  background-color: #18689d;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: 20px;
  top:0;
  background-color: rgba(#f1f1f1, 0.55);
  min-width: 150px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  display: block;
}
.dropdown a:hover {background-color: #f0c543;}
.show {display: block;}

.list-bg{
  background-color: #37353e;
}
i.fas{
  color: rgb(255, 60, 60);
}


</style>
