// #4. This function takes an array as parameter, filters out the negative items and creates a new array and returns the length of the new array!
function findingBadData(numbers) {
    if (Array.isArray(numbers) === true) {
        const badData = [];
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            if (number < 0) {
                badData.push(number);
            }
        }
        const result = badData.length;
        return result;
    } else {
        const warning = "Please give an array!"
        return warning;
    }
}

const numbers = [-22];
console.log(findingBadData(numbers));
