<template lang="html">
  <div class="">
    <div class="flex flex-start items-center">
  <img class="w-8 rounded-full mr-4" src="https://i1.sndcdn.com/artworks-5AGGrdLB22OugKjV-yK2AgQ-t500x500.jpg" alt="">
  <button class="mr-4">user_name</button>
  <span class="text-gray-500">posted 1 month ago</span>
</div>

    <div class="flex xl:max-h-full">

      <div class="w-32 h-32 overflow-hidden bg-black mr-4 mb-4">
        <a class="" href="/songs/7"><img src="https://djl.s3.ap-northeast-1.amazonaws.com/store/song/7/image/2525481f8962526dfd72cbaf8b670c9d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAI2SSMLFQO72DC5QA%2F20201009%2Fap-northeast-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201009T110436Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=510204158467c832fac7febaaeba46001e3cf6c45ba1baa19f8fea8cf371c95d"></a>
      </div>



      <div class="w-5/6 flex flex-col justify-around mx-2">
        <div class="flex justify-between">
          <div class="text-sm flex">
            <button class="">
              <i class="fa fa-play fa-w-14 fa-2x" style="color: orange"></i>
            </button>

            <div>
              <a class="text-gray-400 text-xs" href="/users/1">song user</a>
              <li data-value="CK yang"><a href="/songs/7">song name</a></li>
            </div>
          </div>

          <div class="flex">
            <div class="bg-gray-400 rounded text-xs text-white text-center p-1">
              ck
            </div>
            <div class="bg-gray-400 rounded text-xs text-white text-center p-1">
              yang
            </div>
          </div>
        </div>

        <div class="waveformform-small">
          <div class="waveform-wrap waveform-light" data-path="" data-filename="" data-id="">
            <div class="waveform-dummy-trigger"></div>
            <div class="waveform-dummy song-waveform"></div>
          </div>
        </div>





            <div class="flex justify-between">
              <div class="flex">
                <button class="flex items-center border border-gray-300 px-3 rounded">
                  <i class="fas fa-heart"></i>
                  <p class="hidden md:block">like</p>
                </button>
                <button class="flex items-center border border-gray-300 px-3 rounded">
                  <i class="fas fa-plus-circle addto"></i>
                  add to playlist
                </button>

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
