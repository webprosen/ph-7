const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'cabul'];

function removeExtraName(names){
    newNames = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(newNames.includes(name) === false){
            newNames.push(name);
        }
    }
    return newNames;
}

const result = removeExtraName(names);
console.log(result);
