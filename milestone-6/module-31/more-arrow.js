const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;
const getPie = () => 3.1416;
const fiveTimes = (num) => num * 1000;


const doMath = (a, b, c) => {
    const firstSum = a + b;
    const secondSum = b + c;
    const multiplyResult = firstSum * secondSum;
    return multiplyResult;
}


const result = doMath(1, 2, 3);
console.log(result);