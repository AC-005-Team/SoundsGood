document.addEventListener('DOMContentLoaded', function(){
  const track_btn = document.querySelector('.track_btn')
  const user_btn = document.querySelector('.user_btn')
  const playlist_btn = document.querySelector('.playlist_btn')
  const all_btn = document.querySelector('.all_btn')
  if( track_btn && user_btn && playlist_btn && all_btn ){
    const user_temp = document.querySelectorAll('.user_template')
    const track_temp = document.querySelectorAll('.track_template')
    const playlist_temp = document.querySelectorAll('.playlist_template')
    all_btn.addEventListener('click', function(){
      show(user_temp)
      show(track_temp)
      show(playlist_temp)
    })
    track_btn.addEventListener('click', function(){
      hidden(playlist_temp)
      hidden(user_temp)
      show(track_temp)
    })
    user_btn.addEventListener('click', function(){
      hidden(playlist_temp)
      hidden(track_temp)
      show(user_temp)
    })
    playlist_btn.addEventListener('click', function(){
      hidden(user_temp)
      hidden(track_temp)
      show(playlist_temp)
    })
  }
})

function hidden(target){
  target.forEach(function(template){template.classList.add('hidden')})
}

function show(target){
  target.forEach(function(template){template.classList.remove('hidden')})
}