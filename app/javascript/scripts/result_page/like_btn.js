const { error } = require("jquery")

document.addEventListener('DOMContentLoaded', ()=>{
  let like_btn = document.querySelectorAll('.like_btn')
  like_btn.forEach(function(btn){
    btn.addEventListener('click', ()=>{
      let host = window.location.origin
      let song_id = btn.getAttribute('result-like-id')
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content
      fetch(`${host}/searches/${song_id}/like`, {
        method: 'PATCH',
        headers: {
          'x-csrf-token': csrfToken
        }})
      .then(response => {
        if(response.ok){
          let icon = btn.children[0]
          let count = btn.children[1]
          if(icon.style.color == "black"){
            let num = Number(count.textContent)
            icon.style.color = "orange"
            icon.setAttribute('data-prefix', 'fas')
            count.innerHTML = num + 1
          }else{
            let num = Number(count.textContent)
            icon.style.color = "black"
            icon.setAttribute('data-prefix', 'far')
            count.innerHTML = num - 1
          }
        }
      })
    })    
  })
})
