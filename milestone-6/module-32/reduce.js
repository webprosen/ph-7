const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction()
const total = numbers.reduce((previous, current) => previous + current, 0);

console.log(total);