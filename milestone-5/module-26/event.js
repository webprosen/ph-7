function handleOnClick() {
    document.getElementById('title').innerText = "Hello DOM";
}

document.getElementById('something').addEventListener('click', function () {
    const title =  document.getElementById('title');
    title.innerText = "Hello Prosen How Are You?";
});

document.getElementById('update').addEventListener('click', function () {
    document.querySelector('.description').innerText = document.getElementById('data').value;
    document.getElementById('data').value = '';
});