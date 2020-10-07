<template >
<div>
  <div class="my-2 mr-2 flex flex-col justify-between">
    <div class="align-top w-32 h-32 bg-black overflow-hidden" >
      <!-- :style="{ 'background-image': 'url('+  this.url + ')' }" -->
      <img class="object-cover h-32 max-w-xl w-full mr-4" :src="url">
    </div>
    <!-- <%#= 歌曲名稱、介紹、TAG標籤 %> -->
    <div class="">
      <!-- <%#= 歌曲名稱 %> -->
      <li>{{ song.audio.name }}</li>
      <div class="text-xs text-gray-400">
        <li>{{ song.audio.artist }}</li>
        <!-- <%= content_tag(:li,song.intro, data: {value: song.intro} ) %> -->
      </div>

    </div>

  </div>


</div>
</template>

<script>
export default {
  name: 'likeSongs',
  data(){
      return {
        url: this.song.audio.cover
      }
  },
  props:['song'],
  // computed: {
  //   getCover(){
  //     return this.song.audio.cover
  //   }

  }


</script>

<style lang="css" scoped>
</style>
