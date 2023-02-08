const one = document.getElementsByTagName('section');
const two = document.getElementById('title');
const three = document.getElementsByClassName('item');
const four = document.querySelectorAll('#fruits li');
const five = document.querySelector('.item');

const setDataProductKey = document.querySelector('li').setAttribute('data-product-key', 10);
const getDataProductKey = document.querySelector('li').getAttribute('data-product-key');

const myLi = document.querySelectorAll('li');
for(const li of myLi){
    li.innerText = getDataProductKey;
}

document.querySelector('.container').style.display = "none";
document.querySelector('.title').style.textAlign = "center";
document.querySelector('.title').style.marginTop = "50px";
document.querySelector('.title').style.marginBottom = "50px";

const sections =  document.querySelectorAll('section');
for(const section of sections){
    section.style.padding = "50px"
    section.style.marginBottom = "10px"
}

document.getElementById('section-one').style.backgroundColor = "green";
document.getElementById('section-two').style.backgroundColor = "red";