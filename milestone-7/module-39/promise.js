const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    if(num < 5){
        resolve('Resolve' + num);
    } else {
        reject('Reject' + num)
    }
});

getData
    .then(data => console.log(data))
    .catch(err => console.error(err));