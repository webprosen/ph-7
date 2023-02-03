{
    const item = [];
    item.push("Table");
    // console.log(item);
}

{
    const item = ["coffee", "pen"];
    item.pop();
    // console.log(item);
}

{
    const item = ["b", "c"];
    item.unshift('a');
    // console.log(item);
}

{
    const item = ["b", "c"];
    item.shift();
    // console.log(item);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const newFruits = fruits.slice(0, 1);
    // console.log(newFruits);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const newFruits = fruits.splice(1, 3, "Prosen");
    // console.log(fruits);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[fruits.length] = "Kiwi";
    // console.log(fruits);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.toString();
    // console.log(fruits.toString());
}

{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myChildren = myGirls.concat(myBoys);
    // console.log(myChildren);
}

{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
    // console.log(myChildren);

}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const newJoin = fruits.join('#');
    // console.log(newJoin);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.indexOf('Banana');
    // console.log(result);
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.includes('haha');
    // console.log(result);
}