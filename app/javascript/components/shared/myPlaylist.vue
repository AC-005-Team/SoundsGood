<template lang="html">

  <div class="flex justify-start border-b border-gray-200">

    <li class="w-1/2 text-leego_orange">
    {{ playlist.name }}
    </li>

      <button  @click="toggle" :id="this.playlist.playlist_id" class=" text-black p-1 rounded">
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
        text: ''
      },
      add: null,
    }
  },
  props: ["playlist", "track_id"],
  computed: {

    // add() {
    //   return this.playlist.add_to_playlist
    // },
    // button() {
    //   return {
    //     text: this.add ? 'Added' : 'Add To Playlist'
    //   }
    // }

  },

  watch: {
    playlist(newValue, oldValue) {
      this.add = newValue.add_to_playlist;
      this.button.text = this.add ? 'Added' : 'Add To Playlist'
    }
  },

  mounted(){
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

<style lang="css" scoped>
</style>
