<template lang="html">
  <div>
  <div class="flex text-2xl m-4 border-b border-gray-400 p-2">
  <button class="mr-4 hover:text-orange-500 active:text-orange-500 focus:text-orange-500"><router-link :to="{name: 'library'}">Overview</router-link></button>
  <button class="mr-4 text-gray-900 active:text-orange-500 focus:text-orange-500"><router-link :to="{ name: 'likes'}">Likes</router-link></button>
  <button class="mr-4 text-gray-900 active:text-orange-500 focus:text-orange-500">  <router-link :to="{ name: 'playlists' }">playlists</router-link></button>
  <!-- <button class="mr-4 hover:text-orange-500"><a>Albums</a></button> -->
  <!-- <button class="mr-4 hover:text-orange-500"><a>Stations</a></button> -->
  <button class="mr-4 active:text-orange-500"><router-link :to="{ name: 'following' }">following</router-link></button>
  <!-- <button class="mr-4 hover:text-orange-500"><a>History</a></button> -->
</div>

<router-view> </router-view>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
