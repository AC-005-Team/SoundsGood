document.addEventListener('DOMContentLoaded', ()=>{
  let repost_btn = document.querySelectorAll('.repost_btn')
  repost_btn.forEach(function(btn){
    btn.addEventListener('click', ()=>{
      let host = window.location.origin
      let repost_id = btn.getAttribute('result-repost-id')
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content
      fetch(`${host}/searches/${repost_id}/repost`, {
        method: 'PATCH',
        headers: {
          'x-csrf-token': csrfToken
        }})
      .then(response => {
        if(response.ok){
          let icon = btn.children[0]
          let count = btn.children[1]
          if(icon.style.color == '' || icon.getAttribute('style') == 'color: black;'){
            let num = Number(count.textContent)
            icon.style.color = "orange"
            count.innerHTML = num + 1
          }else{
            let num = Number(count.textContent)
            icon.style.color = "black"
            count.innerHTML = num - 1
          }
        }
      })
    })    
  })
})