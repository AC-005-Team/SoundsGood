<template lang="html">
  <div class="">

        <div class="flex justify-around border-b border-gray-600 mx-2  song_list" @mouseover="mouseOver"  @mouseleave="mouseLeave" >
          <div class="w-9/12 m-2 text-base text-gray-white">{{ this.coding.audio.name }} </div>
          <div class="w-3/12 m-2 text-base text-gray-white text-right"></div>
          <i class="fas fa-play cursor-pointer"  @click="playTheSong" v-show="playBtn && !playing"></i>
          <i class="fas fa-pause" v-show="playing" @click="playTheSong" ></i>

        </div>

  </div>
  </div>

  </div>

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
      playBtn: false,
      cover: this.coding.audio.cover
    }
  },
  props:['coding'],
  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs',
      playerTracks: 'songs/playerTracks',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),

    playing() {

      if (this.playerTracks.song_id === this.coding.song_id) {
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
      if (this.playerTracks.song_id !== this.coding.song_id || !this.playerTracks) {
        this.$emit('clicked', this.cover)
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('song/loadSong', this.coding.song_id)
      } else {
        if (this.isPLAY === true) {
          this.$store.dispatch("songs/pause");
          this.$store.dispatch("songs/continuePause");
        } else {
          this.$store.dispatch("songs/continuePlay");
          this.$store.dispatch("songs/play");
        }
      }

}
}
}
</script>

<style lang="css" scoped>
.song_list {

  transition: 0.3s;
}

.song_list:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: black;
}



</style>
