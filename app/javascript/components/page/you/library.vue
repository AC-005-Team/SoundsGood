<template lang="html">
  <div class="border-b border-gray-200 m-4">
    <div class="text-2xl">Charts: New &amp; hot</div>
    <div class="text-xs text-gray-500 my-2">Up-and-coming tracks on SoundCloud</div>

    <div class="flex overflow-scroll text-gray-500 text-xs">
      <chart v-for="chart in index" :chart='chart' />

    </div>

  </div>

</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import chart from '../discover/chart';

export default {
  // name: "chart",
  components: {
    chart,
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
