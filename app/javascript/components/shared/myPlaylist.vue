<template lang="html">
  <div class="">
    <li>
      {{ playlist.name }}
      <button
        v-if="addToPlaylist"
        class="border border-orange-500 text-red-600 p-1 rounded"
      >
        <span>Added</span>
      </button>
      <button v-else class="border border-gray-400 p-1 rounded">
        <span>Add to playlist</span>
      </button>
    </li>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
  computed: {
    addToPlaylist: function() {
      return this.playlist.add_to_playlist;
    },
  },
};
</script>

<style lang="css" scoped></style>
