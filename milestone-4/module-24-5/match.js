const products = [
    {id: 1, name: "phone", price: 1020},
    {id: 2, name: "Phone 2", price: 10000},
    {id: 3, name: "laptop", price: 100},
    {id: 4, name: "desktop", price: 1050},
    {id: 5, name: "play station", price: 10240}
];

function matchedProducts(products, search){
    const items = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            items.push(product);
        }
    }
    return items;
}