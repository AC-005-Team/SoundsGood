document.addEventListener('DOMContentLoaded', ()=>{
  let result_like = document.querySelectorAll('.result-toggle-like')
  result_like.forEach(function(btn){
    btn.addEventListener('click', ()=>{
      let song_id = document.querySelector('.result-toggle-song').getAttribute('data-toggle-song')
      console.log(song_id)
      fetch('')
    })    
  })
})
