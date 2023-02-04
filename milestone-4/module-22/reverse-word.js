const myString = "I Love My Country";

function reverseWords(myString){

    const words = myString.split(' ');

    const newArray = [];
    for(let i = words.length; i>= 0; i--){
        const word = words[i];
        newArray.push(word);
    }
    const reverseString = newArray.join(' ');
    return reverseString;
}

const result = reverseWords(myString);
console.log(result);