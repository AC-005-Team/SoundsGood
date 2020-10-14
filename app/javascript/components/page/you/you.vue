<template lang="html">
  <div>
  <div class="flex text-2xl m-4">
  <button class="mr-4 tab tab-underline"><router-link :to="{name: 'library'}">Overview</router-link></button>
  <button class="mr-4 text-gray-900 tab"><router-link :to="{ name: 'likes'}">Likes</router-link></button>
  <button class="mr-4 text-gray-900 tab">  <router-link :to="{ name: 'playlists' }">playlists</router-link></button>
  <!-- <button class="mr-4 hover:text-orange-500"><a>Albums</a></button> -->
  <!-- <button class="mr-4 hover:text-orange-500"><a>Stations</a></button> -->
  <button class="mr-4"><router-link :to="{ name: 'following' }">following</router-link></button>
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
.tab {
    border-bottom: #286fc7;
}

.tab-underline {


  /* transition: .5s ease; */
}
</style>
