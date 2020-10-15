<template lang="html">
  <div class="">
    <div class="flex flex-start items-center">
      <div class="p-2 text-gray-600">

       <i class="fas fa-retweet fa-2x" v-if="this.repost"></i>

       </div>
  <img class="w-8 rounded-full mr-4" src="https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg" alt="">
  <!-- // repost name -->
  <button class="mr-4">{{ this.stream.user_name }}</button>
  <span class="text-gray-500">{{ post }}</span>
</div>

    <div class="flex xl:max-h-full"  @mouseover="mouseOver"  @mouseleave="mouseLeave">

      <div class="overflow-hidden mr-4 mb-4">
        <a><img :src="this.cover" class="object-cover h-32 w-32"></a>
      </div>



      <div class="w-5/6 flex flex-col justify-around mx-2">
        <div class="flex justify-between">
          <div class="text-sm flex">
            <button >
              <i class="fas fa-play cursor-pointer" @click="playPause" v-show="playBtn && !playing"></i>
              <i class="fas fa-pause" v-show="playing" @click="playPause" ></i>

              <!-- <i class="fa fa-play fa-w-14 fa-2x" style="color: orange" @click="playPause"></i> -->
            </button>

            <div>

              <a class="text-gray-400 text-xs">{{ owner }}</a>
              <li><a>{{ this.stream.name }}</a></li>
            </div>
          </div>

          <div class="flex">
            <div class="bg-gray-400 rounded text-xs text-white text-center p-1">

            </div>
            <div class="bg-gray-400 rounded text-xs text-white text-center p-1">

            </div>
          </div>
        </div>


        <wave :path="this.stream.path" :filename="this.stream.filename" :id="this.stream.media_id" :click_id ="click_id"></wave>




            <div class="flex justify-between">
              <div class="flex">
                <button class="flex items-center border border-gray-300 px-3 rounded">
                  <i class="fas fa-heart" :style= "[like ? {color: 'red'} : {color: 'black'}]" @click="togglelike" ></i>
                </button>
                <button class="flex items-center border border-gray-300 px-3 rounded">
                  <i class="fas fa-plus-circle addto"></i>
                  add to playlist
                </button>


              </div>

            </div>
            </div>

        </div>
  </div>

</template>

<script>
import wave from './wave'
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data(){
    return{
      repost: false,
      post: 'posted',
      cover: '',
      owner: this.stream.user_name,
      type: this.stream.media_type,
      repost_type: this.stream.repost_type,
      like: this.stream.likes,
      changeColor: false,
      click_id :'',
      playBtn: false

    }
  },
  props:['stream'],
  components:{
    wave
  },
  computed:{
    ...mapGetters({
      playerTracks: 'songs/playerTracks',
      playlistTracks: 'playlistsSongs/listsongs',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
    }),
    playing() {
      if (this.playerTracks.song_id == this.stream.media_id) {
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
    ...mapActions("favorite", ["toggle"]),
    ...mapActions("playlists", ["loadSongs"]),
    ...mapActions("song", ["loadSong"]),


    playPause() {
      this.click_id = this.stream.media_id;
      if (this.media_type === "Playlist" || this.repost_type === "Playlist"){
        if (this.playerTracks.id !== this.stream.media_id || !this.playerTracks.id) {
          this.$store.dispatch('songs/pause')
          this.$store.dispatch('playlists/loadSongs', this.stream.media_id)
        } else {
          if (this.playerTracks.id  === this.stream.media_id && this.isPLAY === true) {
            this.$store.dispatch("songs/pause");
            this.$store.dispatch("songs/continuePause");
          } else {
            this.$store.dispatch("songs/continuePlay");
            this.$store.dispatch("songs/play");
          }
        }
      }else{
        if (this.playerTracks.song_id  !== this.stream.media_id || !this.playerTracks.song_id) {
          this.$store.dispatch('songs/pause')
          this.$store.dispatch('song/loadSong', this.stream.media_id )
        } else {
          if (this.playerTracks.song_id  === this.stream.media_id && this.isPLAY === true) {
            this.$store.dispatch("songs/pause");
            this.$store.dispatch("songs/continuePause");
          } else {
            this.$store.dispatch("songs/continuePlay");
            this.$store.dispatch("songs/play");
          }
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

    togglelike() {
    let payload = {
      id: this.stream.media_id,
    }
    this.like = !this.like
    this.$store.dispatch('favorite/toggle', payload)
  }
},
  created:
    function(){
      if(this.stream.owner_id != null){
        this.repost = true;
        this.post = "repost"
        this.owner = this.stream.owner_name
      }else{
       this.cover = this.stream.cover
     }

  }

}




</script>

<style lang="css" scoped>
i.fa-play, i.fa-pause{
  font-size: 30px;
  color: rgba(247, 66, 2, 1);
}
</style>
