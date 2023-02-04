function add(a, b){

    if((typeof a != 'number') || (typeof b != 'number')){
        return ("Please enter a number");
    }
    else{
        return a + b;
    }
}

const result = add(510, 9);
console.log(result);
