document.addEventListener('DOMContentLoaded',()=>{
  if(document.querySelector('#userprofile')){
    document.querySelector('#userprofile').addEventListener('click', function(){
      
      document.querySelector('#profile').slideDown()
    })
  }
})
// 寫得很生氣