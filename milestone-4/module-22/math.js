const result1  = Math.pow(5, 2);

const result2 = Math.round(5.2); // 5
const result3 = Math.round(5.6); // 6

const result4 = Math.floor(5.9); // 5

const result5 = Math.ceil(5.2); // 6

const random = Math.random() * 5;
const result6 = Math.round(random);

console.log(result6);

{
    const age1 = 20;
    const age2 = 30;
    const gap = Math.abs(age1 - age2);
    
    if(gap > 5){
        console.log('No Friendship');
    }else{
        console.log('Yes Friendship');
    }
}