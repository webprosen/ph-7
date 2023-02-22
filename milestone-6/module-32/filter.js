const numbers = [12, 11, 13, 34, 53, 56, 43];
const bigNumbers = numbers.filter(number => number < 20);

const products = [
    {id:1, name: 'laptop', price: 10000},
    {id:2, name: 'mobile', price: 10000},
    {id:3, name: 'mac', price: 70000},
    {id:4, name: 'desktop', price: 10000}
];
const flagShip = products.filter(product => product.price > 10000);


// console.log(flagShip);