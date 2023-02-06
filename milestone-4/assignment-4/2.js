function evenOdd(text) {
    if (typeof text == 'string') {
        const textLength = text.length;
        if (textLength % 2 == 0) {
            const result = 'even';
            return result;
        } else {
            const result = 'odd';
            return result;
        }
    } else {
        const warning = "Please give the string!";
        return warning;
    }
}

const text = 'Pro';
console.log(evenOdd(text));