<template lang="html">
  <div class="bg-gray-900 h-screen p-4">
    <div class="flex text-2xl md:text-2xl mx-4 text-white ">
      <button class="mr-4 tab tab-underline"><router-link :to="{name: 'library'}">Overview</router-link></button>
      <button class="mr-4 tab"><router-link :to="{ name: 'likes'}">Likes</router-link></button>
      <button class="mr-4 tab">  <router-link :to="{ name: 'playlists' }">Playlists</router-link></button>
      <!-- <button class="mr-4 hover:text-orange-500"><a>Albums</a></button> -->
      <!-- <button class="mr-4 hover:text-orange-500"><a>Stations</a></button> -->
      <button class="mr-4"><router-link :to="{ name: 'following' }">Following</router-link></button>
      <!-- <button class="mr-4 hover:text-orange-500"><a>History</a></button> -->
    </div>
    <transition name="fade" mode="out-in" >
            <router-view> </router-view>
 </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-60px);
}

</style>
