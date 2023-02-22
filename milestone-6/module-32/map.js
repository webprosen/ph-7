const numbers = [2, 3, 4, 6, 7];

function getDoubles(numbers){
    const output = [];
    for (const number of numbers){
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}

const  doubleIt = number => number * 2;

// const result = getDoubles(numbers);
// const result = numbers.map(doubleIt);
// const result = numbers.map((number) => number * 2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);


console.log(fiveTimes);