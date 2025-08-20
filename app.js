function loadUsrers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
};

function displayUsers(data){
    let users = document.getElementById('users');
    users.innerHTML = '';
    data.forEach(user => {
        let li = document.createElement('li');
        li.innerText = `${user.name} - ${user.email} - ${user.phone} - ${user.email}`;
        users.appendChild(li);
 });
};




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



// code with try,catch,and async and await ...................................

const loadPost = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    displayPost(posts);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
};

// Arrow function for display
const displayPost = (posts) => {
  const container = document.getElementById('post');
  container.innerHTML = '';

  posts.forEach(post => {
    let div = document.createElement('div');
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr>
    `;
    container.appendChild(div);
  });
};


// this code with axios.......................................

const loadPost = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    displayPost(res.data);   
  } catch (error) {
    console.error("Error loading posts:", error);
  }
};

const displayPost = (posts) => {
  const container = document.getElementById('post');
  container.innerHTML = '';

  posts.forEach(post => {
    let div = document.createElement('div');
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr>
    `;
    container.appendChild(div);
  });
};
