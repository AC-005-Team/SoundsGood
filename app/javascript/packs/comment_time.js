export function timeClickAndSeek(mmssToSec, ap){
  const commentTime = document.querySelectorAll('.comment-time')
  commentTime.forEach((btn)=>{
    btn.addEventListener('click', function(){
      const timePoint = btn.textContent
      ap.seek(mmssToSec(timePoint))
    })
  })
}
