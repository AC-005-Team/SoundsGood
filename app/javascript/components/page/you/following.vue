<template>
  <div class="text-base text-white m-4 bg-gray-900">
    <span class="text-sm bg-leego_orange border border-leego_orange px-2"
      >Hear the people you follow</span
    >

    <div
      class="grid grid-cols-12 gap-4 overflow-x-scroll border-b border-gray-600"
    >
      <followingItem v-for="wee in followees" :wee="wee" />
    </div>
  </div>
</template>

<script>
import followingItem from "./followingItem";
import Api from "../../../api/api";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "following",
  components: {
    followingItem,
  },

  computed: {
    ...mapGetters({
      followees: "follow/followees",
    }),
  },

  ...mapActions("follow", ["unFollow"], ["loadFollowees"]),
  created() {
    this.$store.dispatch("follow/loadFollowees");
  },
};
</script>

<style lang="css" scoped></style>
