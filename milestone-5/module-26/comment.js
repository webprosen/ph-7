document.getElementById('post-button').addEventListener('click', function () {
    // Get value
    const comment = document.getElementById('comment-data').value;

    // Where to add?
    const commentBox = document.querySelector('.comments');

    // What to be added?
    const p = document.createElement('p');
    p.innerText = comment;


    // Class added
    p.classList.add('comment');
    const test = document.querySelectorAll('.comments p');
    let classIncrement = test.length + 1;
    p.classList.add('comment-'+classIncrement);

    // Joining
    if(p.innerText != ''){
        commentBox.append(p);
        document.getElementById('comment-data').value = '';
    }
    
});