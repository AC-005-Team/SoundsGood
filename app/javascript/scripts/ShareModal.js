//於頁面點擊share時，出現蓋板遮罩與share視窗，share視窗會撈取本頁面網址並放置進各大網站的share link中
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const shareBtn = document.getElementById('share-song')
  const link = window.location.href

  shareBtn.addEventListener('click', () => {
    let scroll = window.scrollY
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scroll}px`;

    const shareDiv = document.createElement('div')
    shareDiv.classList.add('share-container')
    shareDiv.innerHTML = '<div class="share-fade"><div class="share-mask"></div><button class="share-close-btn"> X </button></div><div class="share-modal"></div>'

    const mask = shareDiv.querySelector('.share-fade')
    const modal = shareDiv.querySelector('.share-modal')

    modal.innerHTML = `${link}`

    body.appendChild(shareDiv)
    setTimeout(() => {modal.classList.toggle('modal-show')}, 10);
    setTimeout(()=>{mask.classList.toggle('mask-show')},10)

    mask.addEventListener('click', () => {
      console.log('close')
      modal.classList.toggle('modal-show')
      mask.classList.toggle('mask-show')
      setTimeout(()=>{ body.removeChild(shareDiv) },1000)
      document.body.style.position = ''
      console.log(scroll)
      document.body.style.top = ''
      window.scrollTo(0, scroll || 0)
    })
  })
})