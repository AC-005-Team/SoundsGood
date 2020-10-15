<template>
<div @click="yourClickHandler">

  <div class="bg-cover bg-center bg-opacity-50 h-60 pt-16 head text-white text-center flex justify-center bg-gray-900">

    <div class="flex m-8">
      <img class="h-32 w-32 overflow-hidden bg-blue-300 border border-white" :src="listsongs.first_cover">
      <div class="px-4">
        <img class="w-16 h-16 overflow-hidden bg-black rounded-full" :src="listsongs.playlist_user">
        <p class="">user_name</p>
        <p class="">follower</p>
      </div>
    </div>

    <div class="flex items-end">
      <button class="border border-white p-2 my-2 rounded-lg">
        <router-link :to="{name: 'playlists'}">back to playlists</router-link>
      </button>
    </div>

 
  </div>


  <div class="grid grid-cols-12 bg-gray-900 text-white">
    <div class="col-span-12 my-4 border-b border-gray-200 mx-8">
      <list_songs v-for="(song, index) in listsongs.audio" :key="index" :song="song"  />
    <div>
  </div>
</div>


</div>
</div>

</template>

<script>
import Api from '../../../../api/api'
import list_songs from './list_songs'
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'


export default {
  data() {
    return {
      isActive: false,
      playBtn: false
    }
  },
  components:{
    list_songs
  },
  // props: ['id'],

  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs',
      playerTracks: 'songs/playerTracks',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),
    playing() {
      var id = event.target.getAttribute('song-id');
      if (this.playerTracks.id === id) {
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
