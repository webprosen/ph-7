const myString = "Prosen Biswas";

function reverseWords(myString){

    const words = myString.split(' ');

    const newArray = [];
    for(let i = words.length - 1; i>= 0; i--){
        const word = words[i];
        newArray.push(word);
    }
    const reverseString = newArray.join(' ');
    return reverseString;
}

const result = reverseWords(myString);
console.log(result);