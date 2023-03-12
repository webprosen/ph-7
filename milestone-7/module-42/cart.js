const addProduct = () => {
    const nameField = document.getElementById('name');
    const qtyField = document.getElementById('qty');

    const productName = nameField.value;
    const productQty = qtyField.value;
    nameField.value = '';
    qtyField.value = '';

    console.log(productName, productQty);

    if(productName && productQty){
        displayProduct(productName, productQty);
    }
    saveProductToLocalStorage(productName, productQty);
}

const displayProduct = (productName, productQty) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = productName + ' ' + productQty;
    ul.appendChild(li)
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (productName, productQty) => {
    const cart = getStoredShoppingCart();
    cart[productName] = productQty;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for(const productName in savedCart){
        const productQty = savedCart[productName];
        displayProduct(productName, productQty);
    }
}

displayProductFromLocalStorage();