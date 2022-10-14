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



function displayResults({items}){


const userList = document.querySelector('#user-list');
    items.forEach( ({login,avatar_url, url}) => {
        console.log(login, avatar_url, url)
    
    let fetchedUsers = document.createElement('li');
    fetchedUsers.innerHTML = `
                                <img src="${avatar_url}">
                               <p> <b> Username</b>: ${login} </p>     
                                <a href="${url}">View Profile</a> `;
    userList.appendChild(fetchedUsers);
    
    })
}