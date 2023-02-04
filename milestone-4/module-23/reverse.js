const text = "I love my mom";

function reverseString(text){
    newText = [];
    for(let i = text.length - 1; i >= 0; i--){
        newText.push(text[i]);
    }

    const reverse = newText.join('');
    return reverse;
}

const result = reverseString(text);
console.log(result);

