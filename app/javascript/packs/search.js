document.addEventListener('DOMContentLoaded', function (){
  if(document.querySelector('#search')){
    document.querySelector('#search').addEventListener('keyup', function(e){
      if( e.key === "Enter" ){
        result()
      }else{
        if(document.querySelector('.search-result')){
          document.querySelector('.search-result').innerHTML = ""
          search()
        }
      }
    })
  }
})

function search(){
  const hosts = window.location.origin
  const search = document.querySelector('#search')
  const search_value = search.value
  if( search_value === "" ){ return } 
  const search_recommend  = document.querySelector('.search-result')
  fetch(`${hosts}/search.json?search=${search_value}`)
  .then(response => response.json())
  .then(result => result.forEach(
    element => {
      const class_list = ["block", "text-sm", "rounded-full", "bg-gray-100", "text-black"]
      const a_tag = document.createElement('a')
      a_tag.classList.add(...class_list)
      a_tag.href = `${hosts}/search/result?search=${element}`
      a_tag.textContent = `${element}`
      search_recommend.appendChild(a_tag)
    }
  ))
}
  
  
function result(){
  const search_bar = document.querySelector('#search_bar')
  search_bar.submit()
}
  