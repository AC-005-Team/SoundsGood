<template lang="html">


      <div class="flex justify-around items-center bg-gray-900 aaa" @mouseover="mouseOver"  @mouseleave="mouseLeave" >
        <div class="flex justify-start items-center w-2/5 md:w-8/12">
          <img :src="song.cover" class="h-10 w-10 m-1 md:mx-4">
          <div class="mx-1 md:mx-4 hidden md:block">{{ song.user }}</div>
          <div class="mx-1 md:mx-4">{{ song.title }}</div>
        </div>
        <button class=" text-start" @click="remove"><i class="fas fa-window-close"></i>Remove</button>

        <div class="flex-row justify-center md:justify-start md:w-1/12">
          <i class="fas fa-play cursor-pointer" @click="playTheSong" v-if="playBtn && !playing"></i>
          <i class="fas fa-pause" v-if="playing" @click="playTheSong" ></i>
        </div>
      </div>



<!-- <button :song-id="song.id" @click="playTheSong" class="mx-2">â–¶</button> -->
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
  data() {
    return {
      playBtn: false
    }
  },
  props: ['song','playlist_id'],
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



  ...mapActions('playlistsSongs', ['loadList', 'loadSong', 'remove']),
  ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause"]),
  created() {
    document.body.classList.add("bg-gray-900")
    this.$store.dispatch('playlistsSongs/loadList', this.$route.params.id)
  },
  methods: {
    remove() {
      this.$store.dispatch('playlistsSongs/remove', this.song.id)

      let payload = {
        id: this.song.id,
        playlist_id: this.playlist_id
      };
      this.$store.dispatch('playlistsSongs/toggleList', payload)




    },
    toggle() {
      return this.isActive = !this.isActive
    },
    yourClickHandler() {
      if (!event.target.matches('.dropbtn')) {
        this.isActive = false
      }
    },
    mouseOver: function() {
      if (this.isPlay === true) {
        this.playBtn = false;
      } else {
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


.list-bg{
  background-color: #37353e;
}
i.fas{
  color: rgb(255, 60, 60);
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.aaa:nth-child(odd){
  background-color: rgba(64, 63, 68, 0.6);
}





</style>
