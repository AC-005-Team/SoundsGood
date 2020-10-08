<template>
<div @click="yourClickHandler">
  <div class="grid grid-cols-12 bg-gradient-to-b from-gray-700 via-white to-gray-400 mx-6">
    <div class="col-span-8 m-4 flex flex-col justify-between">
      <div class="flex justify-between">
        <div class="flex items-center">
          <div class="">
            <svg class="svg-inline--fa fa-play fa-w-14 fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
              <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg><!-- <i class="fas fa-play fa-2x"></i> -->
          </div>
          <div class="">
            <router-link :to="{name: 'playlists'}">back to playlists</router-link>
            <p class="">user_name</p>
            <p class="">steven_1</p>
          </div>
        </div>
        <div class="">5 days ago</div>
      </div>
      <div class="">
      </div>
    </div>

    <div class="col-span-4 m-auto my-4 ">
      <img class="h-32 w-32 overflow-hidden bg-blue-300 sm:block hidden" :src="listsongs.first_cover" >
    </div>
  </div>

  <div class="grid grid-cols-12 m-6">
    <div class="col-span-12 md:col-span-9">

      <div class="grid grid-cols-12 mx-6">
        <div class="col-span-12 md:col-span-3 mx-auto">
          <img class="w-32 h-32 overflow-hidden bg-black rounded-full" :src="listsongs.playlist_user"  >
          <p class="">user_name</p>
          <p class="">follower</p>
        </div>

        <div class="col-span-12 md:col-span-9">
          <h1>{{listsongs.name}}</h1>
          <div v-for="(song, index) in listsongs.audio" :key="index" class="flex justify-between bg-white hover:bg-gray-200 my-4 border-b border-gray-200">
            <div class="flex items-center">
              <img :src="song.cover" class="mx-2 h-10 w-10">
              <div>1</div>
              <div class="mx-2">{{ song.user }} </div>
              <div class="mx-2">{{ song.title }} </div>
            </div>
            <button :song-id="song.id" @click="playTheSong">play ▶</button>
            <!-- <div class="dropdown">
            <button class="dropbtn" @click="toggle">+</button>
            <div class="">
              <div id="myDropdown" class='dropdown-content ' :class=" [isActive? 'show' : '']" >
              <a>add to play next</a>
              <a>add to playlist</a>
            </div>
            </div>
          </div> -->
          </div>

        </div>

      </div>
    </div>




    <div>




    </div>
  </div>

</div>
</template>

<script>
import Api from '../../../../api/api'

import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'


export default {
  data() {
    return {
      isActive: false,
    }
  },
  // props: ['id'],

  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs'
    }),
    ...mapGetters({
      playerTracks: 'songs/playerTracks'
    }),



  },

  ...mapActions('playlistsSongs', ['loadList', 'loadSong']),
  ...mapActions('songs', ['play', 'pause']),
  created() {
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
    playTheSong() {
      var id = event.target.getAttribute('song-id');
      console.log(id);
      if (this.playerTracks.song_id === Number(id)) {
        this.$store.dispatch('songs/pause')
      } else {
        this.$store.dispatch('songs/pause')
        this.$store.dispatch('playlistsSongs/loadSong', id)
        console.log('done');
        console.log(this.playerTracks.song_id);
      }
    }
  },

}
</script>

<style lang="css" scoped>
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
</style>
