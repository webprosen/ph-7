// function add(first, second){
//     second = second || 23;
//     const total = first + second;
//     return total;
// }
function add(first = 0, second = 0){
    const total = first + second;
    return total;
}

const result = add();

console.log(result);