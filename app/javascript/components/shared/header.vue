<template>
<header>

  <div class="bg-black"></div>

  <div class="bg-gray-800 text-gray-400 w-full flex justify-between text-center items-center text-sm sticky top-0 z-10">
    <button class="hover:text-white w-48">
      <a href="/discover">
        <img src="/packs/media/images/logo_14-929fb1cd43f62a5bdca9540d9017df3b.png">
      </a> </button>

    <button class="hover:text-white mx-2"><router-link :to="{ name: 'discover'}">Home</router-link></button>
    <button class="hover:text-white mx-2"><router-link :to="{ name: 'stream'}">Stream</router-link></button>
    <button class="hover:text-white mx-2"><router-link :to="{ name: 'library'}">Library</router-link></button>
    <form id="search_bar" action="/search/result" accept-charset="UTF-8" data-remote="true" method="get">
      <input class="px-2 m-2 bg-gray-200 rounded w-12/12" placeholder="Search" type="text" name="search" id="search">
      <input type="submit" name="commit" value="Save " data-disable-with="Save ">
      <div class="search-result flex flex-col absolute mx-auto"></div>
    </form>
    <div class="hover:text-white">
      <router-link :to="{ name: 'upload',params: { id: 123 } }">Upload</router-link>
    </div>


    <div class="">
      <div class="dropdown inline-block relative">
        <button class="text-gray-300 bg-gray-800 py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1"><a href="/users/2">/users/2</a></span>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700">
          <li class="bg-gray-200 py-2 px-4 block whitespace-no-wrap rounded-t"><a href="/users/2">/users/2</a></li>
          <li class="bg-gray-200 py-2 px-4 block whitespace-no-wrap"><a href="/users/2/songs">User Upload</a></li>
          <li class="bg-gray-200 py-2 px-4 block whitespace-no-wrap"><a href="/users/2/edit">Edit</a></li>
          <li class="bg-gray-200 py-2 px-4 block whitespace-no-wrap rounded-b"><a rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a></li>
        </ul>
      </div>
    </div>

    <button class="hover:text-white px-1"><svg class="svg-inline--fa fa-bell fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
        <path fill="currentColor"
          d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
        </path>
      </svg><!-- <i class="fas fa-bell"></i> --></button>
    <button class="hover:text-white px-1"><svg class="svg-inline--fa fa-envelope-open fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        data-fa-i2svg="">
        <path fill="currentColor"
          d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z">
        </path>
      </svg><!-- <i class="fas fa-envelope-open"></i> --></button>
    <button class="hover:text-white px-1"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        data-fa-i2svg="">
        <path fill="currentColor"
          d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
      </svg><!-- <i class="fas fa-ellipsis-h"></i> --></button>
  </div>


</header>
</template>


<script>
export default {



}
</script>
