const products = [
    {name: 'laptop', price: 7000},
    {name: 'phone', price: 9000},
    {name: 'watch', price: 4000},
    {name: 'desktop', price: 2000},
    {name: 'iphone', price: 6000},
];

const productName = products.map(product => product.name);
// console.log(productName);

const cheapProduct = products.filter(product => product.price < 5000);
// console.log(cheapProduct);

const cheapFirstProduct = products.find(product => product.price < 5000);
console.log(cheapFirstProduct);