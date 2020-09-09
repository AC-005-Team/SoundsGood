//於頁面點擊.modal-btn時，出現蓋板遮罩與視窗，視窗會撈取本頁面的template
import {shareWindow} from './shareWindow'
document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector('body')
  const modalBtn = document.querySelectorAll('.modal-btn')
  var modalClosing

  if(modalBtn){
    modalBtn.forEach( btn => {
    btn.addEventListener('click', (e) => {
      const modalTarget = e.target
      const btnTemplate = getBtnTemplate(modalTarget, 1) //固定寫在class list裡面第二個
      modalTarget.setAttribute('disabled', 'true')

      let scroll = window.scrollY //存下現在的scrollbar Y值
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scroll}px`

      const modalDiv = document.createElement('div')
      modalDiv.innerHTML = document.querySelector(`.${btnTemplate}`).innerHTML
      modalDiv.querySelector('.modal-container').innerHTML = '<div class="modal-fade"><div class="modal-mask"></div><button class="modal-close-btn"> X </button>'
      const mask = modalDiv.querySelector('.modal-fade')
      const modal = modalDiv.querySelector('.modal-content')

      body.appendChild(modalDiv)
      setTimeout(() => {modal.classList.toggle('modal-show')}, 350);
      setTimeout(()=>{mask.classList.toggle('mask-show')},10)

      switch (btnTemplate) {
        case 'share-template':
           shareWindow()
          break;
      
        default:
          break;
      }
     
      mask.addEventListener('click', () => {
        if (!modalClosing) {
          modalClosing = true
          setTimeout(() => {
            modal.classList.toggle('modal-show')
            mask.classList.toggle('mask-show')            
          }, 300);
          setTimeout(()=>{ 
            body.removeChild(modalDiv)
            modalClosing = false 
          },1000)
          document.body.style.position = ''
          document.body.style.top = ''
          window.scrollTo(0, scroll || 0)
          btn.removeAttribute('disabled')
        } else {
          return
        }
      })
    })
  })
  }
  function getBtnTemplate(node, n) {
    return node.classList[n].substring(0, node.classList[n].length-4) + '-template'
  }

})