<template lang="html">

  <div class="col-span-9 bg-white">
    <div class="mx-4 p-5">

      <div class="flex justify-between text-lg text-gray-500">
        <div class="">Hear the tracks you’ve liked:</div>
        <div class="flex w-1/3">
          <input class="mx-2 border border-gray-200 rounded w-3/4" type="text" placeholder="Fillter">
          <button class="border border-orange-600 text-orange-600 w-1/4 flex justify-between items-center px-2">
            <p>All</p>
            <i class="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>

  <div class="flex overflow-scroll">
    <div class="my-2 mr-2 flex flex-col justify-between">
      <div class="align-top w-32 h-32 bg-black overflow-hidden">
        <!-- <%= link_to image_tag(song.image_url), song_path(song.id) %> -->
      </div>
      <!-- <%#= 歌曲名稱、介紹、TAG標籤 %> -->
      <div class="">
        <!-- <%#= 歌曲名稱 %> -->
<li>title</li>
<div class="text-xs text-gray-400">
  <li>info</li>
          <!-- <%= content_tag(:li,song.intro, data: {value: song.intro} ) %> -->
        </div>

      </div>

    </div>




  </div>


          <div class="flex border-t border-gray-500 mx-4">
            <div class="my-3 text-xs table-row-group">

              <div class="text-gray-500">
                <span class="hover:text-black"><a href="#">Legal</a></span>
                  -
                <span class="hover:text-black"><a href="#">Privacy</a></span>
                  -
                <span class="hover:text-black"><a href="#">Cookies</a></span>
                  -
                <span class="hover:text-black"><a href="#">Imprint</a></span>
                  -
                <span class="hover:text-black"><a href="#">Creator Resources</a></span>
                  -
                <span class="hover:text-black"><a href="#">Blog</a></span>
                  -
                <span class="hover:text-black"><a href="#">Charts</a></span>
                  -
                <span class="hover:text-black"><a href="#">Popular Search</a></span>
              </div>

                <div class="mt-2 mb-20">
                  Language: English (US)
                </div>

            </div>
          </div>
        </div>
        </div>




</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
