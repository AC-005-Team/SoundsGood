document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#song_track').addEventListener('change', song_value)
})

function song_value(){
  if(document.querySelector('#song_track') != null ){
    console.log(123)
      const song_value = document.querySelector('#song_track').value
      const last_value = song_value.split('\\').slice(-1)
        document.querySelector('#music').textContent = last_value
  }
}
