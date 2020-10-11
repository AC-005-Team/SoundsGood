document.addEventListener('DOMContentLoaded', function(){
  const follow_btn = document.querySelectorAll('.follow_btn')
  follow_btn.forEach(function(btn){
    btn.addEventListener('click',function(){
      const btn_id = btn.getAttribute('result-follow-id')
      const host = window.location.origin
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content
      fetch(`${host}/searches/${btn_id}/follow`, {
        method: 'PATCH',
        headers: {
          'x-csrf-token': csrfToken
        }})
      .then(response => { 
        if (response.ok){
          let icon = btn.children[0]
          let status = btn.children[1]
          let count = btn.parentNode.children[0].children[1]
          if (icon.style.color == '' || icon.getAttribute('style') == 'color: black;' ){
            let num = Number(count.textContent)
            status.textContent = 'Following'
            icon.setAttribute('style', 'color: orange;')
            count.innerHTML = num + 1
          }else{
            let num = Number(count.textContent)
            status.textContent = 'Follow+'
            icon.setAttribute('style', 'color: black;')
            count.innerHTML = num - 1
          }
        }
      })
    })
  })
})