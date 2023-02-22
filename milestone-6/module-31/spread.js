const max = Math.max(34, 556, 3333);

const numbers = [1, 22, 3232, 33];
const largest = Math.max(...numbers);

const one = [12, 21, 212];
const two = [111, 2222, ...one];

two.push(1000);
console.log(one, two);