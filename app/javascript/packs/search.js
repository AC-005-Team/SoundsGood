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
  console.log(search_value)
  if( search_value === "" ){ return } 
  const search_recommend  = document.querySelector('.search-result')
  fetch(`http://127.0.0.1:3000/search.json?search=${search_value}`)
    .then(response => response.json())
    .then(result => result.forEach(
      element => {
        const class_list = ["px-2", "m-2", "bg-gray-200", "rounded", "w-12/12"]
        const a_tag = document.createElement('a')
              a_tag.classList.add(...class_list)
              a_tag.href = 'result_search_path'
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
