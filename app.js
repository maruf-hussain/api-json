function loadUsrers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
};

function displayUsers(data){
    for(const user of data){
        console.log(user);
    }
    let users = document.getElementById('users');
    users.innerHTML = '';
    data.forEach(user => {
        let li = document.createElement('li');
        li.innerText = `${user.name} - ${user.email}`;
        users.appendChild(li);
 });
}





























function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post))
}

 
function displayPost(post){
    const p = document.getElementById('post');
        p.innerHTML= '';
        post.forEach(post => {
        let h3 = document.createElement('h3');
        h3.innerText = `${post.title} - ${post.body}`;
        p.appendChild(h3);

    })
    
}