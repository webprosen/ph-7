// 5. This function takes three numbers as parameters and calculates, compares and finally returns a number!
function gemsToDiamond(firstFriendGemsQty, secondFriendGemsQty, thirdFriendGemsQty) {

    if (typeof firstFriendGemsQty === 'number' && typeof secondFriendGemsQty === 'number' && typeof thirdFriendGemsQty === 'number') {

        const firstFriendGemsPower = 2000;
        const secondFriendGemsPower = 32;
        const thirdFriendGemsPower = 43;
    
        const firstFriendDiamond = firstFriendGemsPower * firstFriendGemsQty;
        const secondFriendDiamond = secondFriendGemsPower * secondFriendGemsQty;
        const thirdFriendDiamond = thirdFriendGemsPower * thirdFriendGemsQty;
    
        const allFriendsDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

        if (allFriendsDiamond > 1000 * 2) {
            const result = allFriendsDiamond - 2000;
            return result;
        } else {
            return allFriendsDiamond;
        }

    } else {
        const warning = "Please enter valid number!";
        return warning;
    }
}

console.log(gemsToDiamond(1, "fgdfgdf", 0));