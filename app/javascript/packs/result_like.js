document.addEventListener('DOMContentLoaded', ()=>{
  let like_btn = document.querySelectorAll('.like_btn')
  like_btn.forEach(function(btn){
    btn.addEventListener('click', ()=>{
      let host = window.location.origin
      let song_id = btn.getAttribute('result-like-id')
      fetch(`${host}/searches/${song_id}/like`)
      .then(response => {
        if(response.ok){
          let icon = btn.children[0]
          let count = btn.children[1]
          if(icon.getAttribute('data-prefix') == 'far'){
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
