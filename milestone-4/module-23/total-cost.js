const shoppingCart = [
    {brand: 'iphone', price: 130500, ram: '256gb'},
    {brand: 'samsung', price: 80500, ram: '128gb'},
    {brand: 'vivo', price: 30500, ram: '64gb'},
    {brand: 'oppo', price: 17890, ram: '32gb'},
    {brand: 'xiaomi', price: 45000, ram: '16gb'},
    {brand: 'oneplus', price: 56000, ram: '8gb'},
    {brand: 'htc', price: 34005, ram: '4gb'}
];

function totalCost(shoppingCart){
    sum = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        product = shoppingCart[i];
        sum = sum + product.price;
    }
    return sum;
}

const result = totalCost(shoppingCart);
console.log(result);