const products = [
    {id:1, name: 'laptop', price: 10000},
    {id:2, name: 'mobile', price: 11000},
    {id:3, name: 'mac', price: 12000},
    {id:4, name: 'desktop', price: 13000}
];

const search = products.find(product => product.price > 11000);

console.log(search);