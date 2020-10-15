<template lang="html">
  <div class="bg-gray-900">
    <following/>
    <playlists/>
    <likes/>

  </div>

</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
// import chart from '../discover/chart';
import likes from './likes/likes';
import playlists from './playlists/playlists';
import following from './following'

export default {
  // name: "chart",
  components: {
    likes,
    playlists,
    following
  },

  computed: {
    ...mapGetters({
      index: 'song/index'
    })
  },

    ...mapActions('song', ['song/loadIndex']),
    created() {
      this.$store.dispatch('song/loadIndex')
    }
  }

</script>

<style lang="css" scoped>
</style>
