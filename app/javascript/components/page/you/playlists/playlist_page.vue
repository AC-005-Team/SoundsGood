<template>
<div @click="yourClickHandler">

  <div class="bg-cover bg-center bg-opacity-50 h-60 pt-16 head text-white text-center flex justify-around bg-gray-900">

    <div class="flex m-8">
      <img class="h-32 w-32 overflow-hidden bg-blue-300 border border-white" :src="listsongs.first_cover">
      <div class="px-4">
        <p class="text-4xl font-semibold text-left">{{this.listsongs.name}}</p>
        <button class=" p-2 my-6 border border-whiterounded-lg">
          <router-link :to="{name: 'playlists'}">back to playlists</router-link>
        </button>

      </div>
    </div>

    <div class="flex items-end">
      <!-- <button class=" p-2 my-6 border border-whiterounded-lg">
        <router-link :to="{name: 'playlists'}">back to playlists</router-link>
      </button> -->
    </div>


  </div>


  <div class="grid grid-cols-12 bg-gray-900 text-white">
    <div class="col-span-12 my-4  md:mx-8">
       <transition-group name="list" tag="p">
      <list_songs v-for="(song, index) in listsongs.audio" :key="song.id" :song="song"  :playlist_id="listsongs.id"/>
       </transition-group>
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
background-size: cover;
background-image: url(/img/soundcheck.jpg);
background-position: bottom;
/* animation: shrink 5s infinite alternate; */
}
/* @keyframes shrink {
  0% {
    background-size: 100% 100%;
  }
  100% {
    background-size: 100% 110%;
  }
} */
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(40px);
}

.d
.list-bg{
  background-color: #37353e;
}
i.fas{
  color: rgb(255, 60, 60);
}


</style>
