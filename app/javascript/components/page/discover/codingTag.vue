<template lang="html">
  <div class="">

        <div class="flex justify-start border-b border-gray-600 mx-2 song_list" :class="[playing ? 'dark' : '']" @mouseover="mouseOver"  @mouseleave="mouseLeave" >
          <div class="w-1/12 m-2 text-base text-gray-white cursor-pointer" @click.stpp="user" >{{ this.coding.user.display_name }} </div>
          <div class="w-2/12 m-2 text-base text-gray-white cursor-pointer" @click.stpp="songsShow">{{ this.coding.audio.name }} </div>
          <div class="w-9/12  text-base text-gray-white text-right cursor-pointer" @click="playTheSong"></div>

          <i class="fas fa-play cursor-pointer"  @click="playTheSong" v-show="playBtn && !playing"></i>
          <i class="fas fa-pause" v-show="playing" @click="playTheSong" ></i>
          <i
            class="fa fa-heart ml-3"
            @click.stop="like"
            :class="[changeColor ? 'like' : '']"
          ></i>
          <i class="fas fa-plus" @click.stop="showmodal" :song_id="this.coding.song_id" ></i>

          <sweet-modal ref="modal">
            <sweet-modal-tab title="Add To Playlist" id="tab1" class="overscroll-auto">
              <myPlaylist v-for="playlist in playlists" :playlist="playlist" :track_id="track_id"></myPlaylist >
              </sweet-modal-tab>
              <sweet-modal-tab title="Create Playlist" id="tab2">
                <addPlaylist :track_id="track_id" @after_add="addPlaylist"/>
              </sweet-modal-tab>
            </sweet-modal>

          </div>

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
import Api from "../../../api/api";
import {
  SweetModal,
  SweetModalTab
} from 'sweet-modal-vue'
import myPlaylist from '../../shared/myPlaylist'
import addPlaylist from '../../shared/addPlaylist'


export default {
  data(){
    return{
      playBtn: false,
      cover: this.coding.audio.cover,
      playlists: [],
      track_id:''
    }
  },
  props:['coding'],
  components:{
    SweetModal,
    SweetModalTab,
    myPlaylist,
    addPlaylist,
  },
  computed: {
    ...mapGetters({
      listsongs: 'playlistsSongs/listsongs',
      playerTracks: 'songs/playerTracks',
      continue: "songs/continue",
      isPLAY: "songs/isPLAY",
      name: "songs/name",
      playing: "false"
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
    changeColor() {
      return !!this.coding.likes
    },
    bbb(){
      if ( this.name = this.coding.audio.name ){
          this.playing = true;
      }
    }




  },
  ...mapActions("favorite", ["toggleLike"]),
  ...mapActions('playlistsSongs', ['loadList', 'loadSong']),
  ...mapActions("songs", ["play", "pause", "continuePlay", "continuePause"]),
  methods: {
    user(){
    let id = this.coding.user.user_id
    window.location.href = `/users/${id}`;
  },
  addPlaylist(x) {
    this.playlists.push(x);
    this.$refs.modal.close("tab1");
  },
  songsShow(){
    let id = this.coding.song_id;
    window.location.href = `/songs/${id}`;
  },
  showmodal() {
    // var song_id = event.target.getAttribute("song_id");
    console.log(this.coding.song_id)
    Api().get(`/api/v1/songs/${this.coding.song_id}`)
    .then((response) => (this.track_id = response.data.song_id))

    Api().get(`/api/v1/songs/${this.coding.song_id}`)
    .then((abc) => (this.playlists = (abc.data.playlists)))

    this.$refs.modal.open("tab1");
  },

    toggle() {
      return this.isActive = !this.isActive
    },
    yourClickHandler() {
      if (!event.target.matches('.dropbtn')) {
        this.isActive = false
      }
    },
    like() {
      let payload = {
        id: this.coding.song_id,
      }
      this.$store.dispatch('favorite/toggleLike', payload)

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
  padding-right: 2rem;
  transition: 0.3s;
}
.like {
  color: rgb(255, 59, 59);
}

.dark{

  background-color: rgba(140, 69, 29, 0.45);
}

.song_list:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
}



</style>
