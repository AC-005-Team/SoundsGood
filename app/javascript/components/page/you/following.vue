<template>

  <div class="col-span-9 text-base text-gray-600 m-4">
    <div class="text-sm">Hear what the people you follow have posted:</div>
    
    <div class="grid grid-cols-12 gap-4 overflow-x-scroll">
      <followingItem v-for="wee in followees" :wee="wee" />
    </div>

  </div>

</template>

<script>
import followingItem from './followingItem'
import Api from "../../../api/api";
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'following',
  components: {
    followingItem,
  },

  computed: {
    ...mapGetters({
      followees: 'follow/followees'
    })
  },

  ...mapActions('follow',['unFollow'],['loadFollowees']),
  created() {
    console.log('123')
    this.$store.dispatch('follow/loadFollowees')
  }
}
</script>

<style lang="css" scoped>
</style>
