function green(){
    document.body.style.backgroundColor = "green";
}
function blue(){
    document.body.style.backgroundColor = "blue";
}
function orange(){
    document.body.style.backgroundColor = "orange";
}
function pink(){
    document.body.style.backgroundColor = "pink";
}

const blueButton = document.getElementById('blue');
blueButton.onclick = blue;

const orangeButton = document.getElementById('orange');
orangeButton.onclick = orange;

const pinkButton = document.getElementById('pink');
pinkButton.addEventListener('click', pink);

const grayButton = document.getElementById('gray');
grayButton.addEventListener('click', function gray(){
    document.body.style.backgroundColor = "gray";
});

document.getElementById('purple').addEventListener('click', function(){
    document.body.style.backgroundColor = 'purple';
});