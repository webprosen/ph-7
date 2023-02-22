const numbers = [12, 3, 4, 32, 53];
const half = numbers.map(x => x / 2);
// console.log(half);

const friends = ['Abul', 'Babul', 'Cabul'];
const firstLetter = friends.map(friend => friend[0]);

// console.log(firstLetter);

const products = [
    {id:1, name: 'laptop'},
    {id:2, name: 'mobile'},
    {id:3, name: 'mac'},
    {id:4, name: 'desktop'}
];

const itemsName = products.map(product => product.name);

console.log(itemsName);