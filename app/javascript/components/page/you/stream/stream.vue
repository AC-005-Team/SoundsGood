<template lang="html">
  <div class="bg-gray-900">
    <div class="grid grid-cols-12 mx-8">
      <div class="col-span-12 mx-4">
        <div class="text-lg text-gray-600 mb-4">
          Hear the latest posts from the people you're following:
        </div>
        <streamItem v-for="stream in streamData" :stream="stream"/>
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

import streamItem from './streamItem'

export default {
  components:{
    streamItem
  },

    computed: {
      ...mapGetters({
        streamData: 'stream/stream'
      })
    },

    ...mapActions('stream',['loadStream']),
    created() {
      this.$store.dispatch('stream/loadStream')
    }
  }

</script>

<style lang="css" scoped>
</style>
