<template>
  <div class="col-span-9 m-4">
    <span
      class="text-sm text-white bg-leego_orange border border-leego_orange px-2"
      >Review the song you like</span
    >
    <div class="flex justify-between">
      <div
        class="grid sm:grid-cols-2 md:col-span-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-10"
      >
        <div class="wrapper">
          <div
            class="card text-center flex items-center justify-center"
            @click="playLikelist"
          >
            <i class="fas z-10 fa-play" style="font-size: 40px" />
            <p style="font-size: 20px">ALL</p>
          </div>
          <!-- <img class="object-cover card" src="/img/night.jpg" @click="playLikelist"> -->
        </div>
        <likeSongs v-for="song in songs" :song="song" :songs="songs" />
      </div>
    </div>
  </div>
</template>

<script>
import likeSongs from "./like_songs";
import Api from "../../../../api/api";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      songs: null,
    };
  },
  components: {
    likeSongs,
  },
  computed: {
    ...mapGetters({
      like_songs: "song/like_songs",
      isPLAY: "songs/isPLAY",
      playerTracks: "songs/playerTracks",
    }),
  },
  ...mapActions("songs", [
    "play",
    "pause",
    "continuePlay",
    "continuePause",
    "setPlayerTracks",
  ]),
  methods: {
    playLikelist() {
      var likeTag = this.songs.map((a) => a.audio);

      if (
        this.playerTracks[0] &&
        likeTag[0].artist === this.playerTracks[0].artist
      ) {
        if (this.isPLAY == true) {
          this.$store.dispatch("songs/pause");
        } else {
          this.$store.dispatch("songs/play");
        }
      } else {
        this.$store.dispatch("songs/setPlayerTracks", likeTag);
        this.$store.dispatch("songs/play");
      }
    },
  },
  //為什麼會失敗！！！！！！
  // ...mapActions('song', ['song/loadlikeSongs']),
  created() {
    Api()
      .get("/api/v1/library/likes")
      .then((response) => (this.songs = response.data));
    // this.$store.dispatch('song/loadlikesongs')
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  transition: transform 0.3s ease-in-out;
  transform: scale(0.9);
}
.card {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  position: relative;
  transition: transform 0.5s ease-in-out;
  color: rgb(255, 255, 255);
}

.wrapper:hover,
.card:hover,
.card:hover::before,
.card:hover::after {
  transform: none;
  box-shadow: none;
}
</style>
