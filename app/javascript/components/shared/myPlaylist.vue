<template lang="html">
  <div class="">
    <li>{{ playlist.name }}</li>
    <button class="modal-btn addplaylist-btn border border-gray-400 p-1 rounded">
      <i class="fas fa-bolt"></i>
      Add to playlist
    </button>
</button>

  </div>

</template>

<script>
export default {
  props: ['playlist'],
}
</script>

<style lang="css" scoped>
</style>
