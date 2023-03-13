// Array destructuring
const numbers = [50, 100, 1000];
const [x, y] = numbers;

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

const [first, second] = boxify(10, 20);

// Object destructuring
const {name, salary} = {salary: 100, name: 'Prosen', age: 25};

const employee = {
    name: 'Mr. John',
    age: 25,
    location : {
        zip: 1202,
        address: 'Dhaka'
    },
    specification: {
        height: 85,
        hair: 'black',
        watch: {
            color: 'red',
            brand: 'apple'
        }
    }
}

const {color} = employee?.specification?.watch;

console.log(color);