function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPosts(posts));
}

function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <div class="item">
            <h4>User: ${post.userId}</h4>
            <h2>Title: ${post.title}</h2>
            <p>Description: ${post.body}</p>
        <div>
        `;
        postsContainer.appendChild(postDiv);

    }
}
loadPosts();