<template lang="html">

  <div class="my-4 flex border-b boder-gray-200 p-2 text-gray-500">
    <img class="w-1/5 rounded-full" src="https://i1.sndcdn.com/artworks-tzoA3a4voEv4g77c-Z5qUqQ-t120x120.jpg" alt="">
    <div class="w-4/5 mx-2 text-xs">
      <div class="">people</div>
      <div class="flex justify-between">
        <div class="flex text-gray-400">
          <div class="">{{ this.unfollower.display_name }}</div>
          <div class="">1919</div>
        </div>
        <button class="border border-gray-400 rounded p-1">
          follow1
        </button>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props:['unfollower']
}
</script>

<style lang="css" scoped>
</style>
