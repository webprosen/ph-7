const friendsName = [
    'Anup Roy',
    'Proshenjit Biswas',
    'Rajib Rakhmit',
    'Meethi Rakhmit',
    'Muhu Rakhmit'
];

function bestFriend(friendsName){
    let bigName = friendsName[0];
    for(let i = 0; i < friendsName.length; i++){
        friendName = friendsName[i];
        if(friendName.length > bigName.length){
            bigName = friendName;
        }
    }
    return bigName;
}

const result = bestFriend(friendsName);
console.log(result);