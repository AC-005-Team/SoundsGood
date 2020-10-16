<template lang="html">
  <div class="">
    <div class="flex flex-start items-center mb-1">
      <div class="p-2 text-gray-600">

       <i class="fas fa-retweet fa-2x" v-if="this.repost"></i>

       </div>
<div class="flex" @click="userShow">
  <img class="w-8 rounded-full mr-4" :src="this.stream.user_avatar" alt="">
  <button class="mr-4 text-leego_orange">{{ this.stream.user_name }}</button>

</div>

        <span class="text-gray-500">{{ post }}</span>
      </div>

    <div class="flex xl:max-h-full">

      <div class="overflow-hidden mr-4">
        <a><img :src="this.cover" class="object-cover h-32 w-32"></a>
      </div>



      <div class="w-5/6 flex flex-col justify-around mx-2">
        <div class="flex justify-between">
          <div class="text-sm flex">
            <div class="mr-2">
              <i class="fas fa-play cursor-pointer" @click="playPause" v-show="!playing"></i>
              <i class="fas fa-pause" v-show="playing" @click="playPause" ></i>
            </div>
            <div class="mr-3 cursor-pointer" @click="songsShow">
              <a class="text-gray-400 text-xs ">{{ owner }}</a>
              <li><a class="text-leego_orange">{{ this.stream.name }}</a></li>
            </div>

                        <div class="flex justify-between">
                          <div class="flex text-white">
                              <i class="fas fa-heart fa-2x" :style= "[like ? {color: 'red'} : {color: 'white'}]" @click="togglelike" ></i>
                          </div>
                        </div>
          </div>

          <div class="text-right md:flex items-center" >
            <div class="bg-leego_orange bg-opacity-75 rounded-lg text-sm text-white text-center px-2 inline-block mr-1" v-for="tag in two_tags">
             # {{ tag }}
            </div>

          </div>
        </div>
        <div class="" @click="songsShow">
          <wave :path="this.stream.path" :filename="this.stream.filename" :id="this.stream.media_id"></wave>

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
  data() {
    return {
      repost: false,
      post: 'posted',
      cover: '',
      owner: this.stream.user_name,
      type: this.stream.media_type,
      repost_type: this.stream.repost_type,
      like: this.stream.likes,
      changeColor: false,
      click_id: '',
      playBtn: false,
      two_tags: this.stream.tags

    }
  },
  props: ['stream'],
  components: {
    wave
  },
  computed: {
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

    songsShow() {
      let id = this.stream.media_id;
      window.location.href = `/songs/${id}`;
    },
    userShow() {
      let id = this.stream.user_id;
      window.location.href = `/users/${id}`;
    },



    playPause() {
      this.click_id = this.stream.media_id;
      if (this.media_type === "Playlist" || this.repost_type === "Playlist") {
        if (this.playerTracks.id !== this.stream.media_id || !this.playerTracks.id) {
          this.$store.dispatch('songs/pause')
          this.$store.dispatch('playlists/loadSongs', this.stream.media_id)
        } else {
          if (this.playerTracks.id === this.stream.media_id && this.isPLAY === true) {
            this.$store.dispatch("songs/pause");
            this.$store.dispatch("songs/continuePause");
          } else {
            this.$store.dispatch("songs/continuePlay");
            this.$store.dispatch("songs/play");
          }
        }
      } else {
        if (this.playerTracks.song_id !== this.stream.media_id || !this.playerTracks.song_id) {
          this.$store.dispatch('songs/pause')
          this.$store.dispatch('song/loadSong', this.stream.media_id)
        } else {
          if (this.playerTracks.song_id === this.stream.media_id && this.isPLAY === true) {
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
      if (this.isPlay === true) {
        this.playBtn = false;
      } else {
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
  created: function() {
    if (this.stream.owner_id != null) {
      this.repost = true;
      this.post = "repost"
      this.owner = this.stream.owner_name
    } else {
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
