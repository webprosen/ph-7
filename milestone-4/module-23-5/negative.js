const numbers = [34, 55, 78, 00, 467, 45, -50, 67];

function positiveNumbers(){
    const positive = [];
    for(let i = 0; i < numbers.length; i++){
        number = numbers[i];
        if(number >= 0){
            positive.push(number);
        }else{
            break;
        }
    }
    return positive;
}

const result = positiveNumbers(numbers);
console.log(result);