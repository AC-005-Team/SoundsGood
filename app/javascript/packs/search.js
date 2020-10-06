document.addEventListener('turbolinks:load', function (){
  document.querySelector('#search').addEventListener('keyup', function(e){
    if( e.key === "Enter" ){
      result()
    }else{
      document.querySelector('.search-result').innerHTML = ""
      search()
    }
  })
})

function search(){
  const search = document.querySelector('#search')
  const search_value = search.value
  const host = window.location.origin
  console.log(search_value)
  if( search_value === "" ){ return } 
  const search_recommend  = document.querySelector('.search-result')
  fetch(`${host}/search.json?search=${search_value}`)
    .then(response => response.json())
    .then(result => result.forEach(
      element => {
        const class_list = ["block", "text-sm", "rounded", "bg-gray-200", "text-black"]
        const a_tag = document.createElement('a')
              a_tag.classList.add(...class_list)
              a_tag.href = `${host}/search/result?search=${element}`
              a_tag.textContent = `${element}`
        console.log(element)
        search_recommend.appendChild(a_tag)
      }
    ))
}

function result(){
  const search_result = document.querySelector('#search_bar')
  search_result.submit()
}
