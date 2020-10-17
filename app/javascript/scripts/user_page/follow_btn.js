document.addEventListener('DOMContentLoaded', function(){
  const follow_btn = document.querySelector('.user-follow-btn')
  if(follow_btn){
    follow_btn.addEventListener('click',function(){
      const btn_id = follow_btn.getAttribute('result-follow-id')
      const host = window.location.origin
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content
      fetch(`${host}/searches/${btn_id}/follow`, {
        method: 'PATCH',
        headers: {
          'x-csrf-token': csrfToken
      }})
      .then(response => { 
        if (response.ok){
          const followCount = document.querySelector('.follow-count')
          const followText = follow_btn.children[1]
          if(followText.textContent == 'Follow+'){
            followText.textContent = 'Following'
            followCount.textContent++
          }else{
            followText.textContent = 'Follow+'
            followCount.textContent--
          }
        }
      })
    })
  }
})