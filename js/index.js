window.addEventListener('DOMContentLoaded', handleSubmit);

function handleSubmit(){
    document.querySelector('#github-form').addEventListener('submit', e=> {
        e.preventDefault()
        let input = document.querySelector('#search').value
        fetchUsers(input.toLowerCase());
    })
}


function fetchUsers(input){
    fetch(`https://api.github.com/search/users?q=${input}`)
    .then (res => res.json())
    .then(data => displayResults(data))
}

function displayResults(data){
    
}