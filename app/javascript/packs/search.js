document.addEventListener('DOMContentLoaded', function (){
  const search_bar = document.querySelector('#search_bar>input')
  if(document.querySelector('#search')){
    document.querySelector('#search').addEventListener('keyup', function(e){
      if( e.key === "Enter" ){
        result()
      }else{
        if(document.querySelector('.search-result')){
          search()
          document.querySelector('.search-result').innerHTML = ""
          if(search_bar.value == ''){
            search_bar.classList.remove('rounded-t')
            search_bar.classList.add('rounded')
          }
        }
      }
    })
  }
  search_bar.addEventListener('blur', function(){
    document.querySelector('.search-result').innerHTML = ""
    search_bar.classList.remove('rounded-t')
    search_bar.classList.add('rounded')
  })
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
      const class_list = ["block", "text-sm", "bg-gray-100", "text-black", "search-result-bar", "pl-2", "hover:bg-gray-600"]
      const a_tag = document.createElement('a')
      a_tag.classList.add(...class_list)
      a_tag.href = `${hosts}/search/result?search=${element}`
      a_tag.addEventListener('click', ()=>{
        fetch(`${hosts}/search/result?search=${element}`)
      })
      a_tag.textContent = `${element}`
      search_recommend.appendChild(a_tag)
      const search_bar = document.querySelector('#search_bar>input')
      search_bar.classList.remove('rounded')
      search_bar.classList.add('rounded-t')
      const last = result[result.length - 1]
      if(last == a_tag.textContent){
        a_tag.classList.add('rounded-b-lg')
      }
    }
  ))
}
  
  
function result(){
  const search_bar = document.querySelector('#search_bar')
  search_bar.submit()
}
  