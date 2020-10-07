<template lang="html">

  <!-- <div class="grid grid-cols-12">
    <li class="my-4 col-span-6 w-full">{{ playlist.name }}</li>
    <button class="my-2 col-span-6 mx-auto modal-btn addplaylist-btn border border-gray-400 p-1 rounded">
      <i class="fas fa-bolt"></i>
      Add to playlist
    </button>
</button> -->

  <div class="">
    <li>
    {{ playlist.name }}
    </li>
      <!-- <button
        class="border border-orange-500 text-red-600 p-1 rounded"
      >
        <span>Added</span>
      </button> -->

      <button  @click="toggle" :id="this.playlist.playlist_id" class="border border-gray-400 p-1 rounded">
      {{ button.text }}
      </button>
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
  data() {
    return {
      id: this.playlist.playlist_id,
      track: this.track_id,
      button: {
        text: 'Added'
      },
      add: null,
    }
  },
  props: ["playlist", "track_id"],
  computed: {
    ...mapGetters({
      added: 'playlistsSongs/added'
    }),


  },

  mounted(){
      console.log(this.playlist.add_to_playlist);
      this.add = this.playlist.add_to_playlist;
      this.button.text = this.add ? 'Added' : 'Add To Playlist';


  },
  ...mapActions('playlistsSongs', ['toggleList']),

  methods: {
    toggle() {
      let payload = {
        id: this.track,
        playlist_id: this.id,
      }
      this.add = !this.add;
      this.button.text = this.add ? 'Added' : 'Add To Playlist';

      this.$store.dispatch('playlistsSongs/toggleList', payload)

    }
  }
}
</script>

<style lang="css" scoped></style>
