function isLGSeven(number) {
    if (typeof number == 'number') {
        const difference = number - 7;
        if (difference < 7 ) {
            return difference;
        } else {
            return number * 2;
        }
    } else {
        const warning = "Please give a number!"
        return warning;
    }
}

const number = 16;
console.log(isLGSeven(number));