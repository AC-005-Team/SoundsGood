<template lang="html">
  <div class="grid grid-cols-12">
    <li class="my-4 col-span-6 w-full">{{ playlist.name }}</li>
    <button class="my-2 col-span-6 mx-auto modal-btn addplaylist-btn border border-gray-400 p-1 rounded">
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
