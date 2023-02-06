// #1 This function accepts a positive number as a parameter & Number returned as output when calculation is complete!
function mindGame(number) {
	if (typeof number === 'number' && number >= 0) {
		let result = number;
		result = result * 3;
		result = result + 10;
		result = result / 2;
		result = result - 5;
		return result;
	} else {
		const warning = "Please give positive number!";
		return warning;
	}
}
// const number = 50;
// console.log(mindGame(number));



// #2 This function takes a string as a parameter and returns the even/odd status based on the string!
function evenOdd(text) {
    if (typeof text === 'string') {
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
// const text = 'Hello';
// console.log(evenOdd(text));



// #3 This function takes a number as a parameter and returns compare value based on input number!
function isLGSeven(number) {
    if (typeof number === 'number') {
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
// const number = 6;
// console.log(isLGSeven(number));



// #4. This function takes an array as parameter, filters out the negative items and creates a new array and returns the length of the new array!
function findingBadData(numbers) {
    if (Array.isArray(numbers) === true) {
        const badData = [];
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            if (number < 0) {
                badData.push(number);
            }
        }
        const result = badData.length;
        return result;
    } else {
        const warning = "Please give an array!"
        return warning;
    }
}

// const numbers = [22, 20];
// console.log(findingBadData(numbers));



// 5. This function takes three numbers as parameters and calculates, compares and finally returns a number!
function gemsToDiamond(firstFriendGemsQty, secondFriendGemsQty, thirdFriendGemsQty) {

    if (typeof firstFriendGemsQty === 'number' && typeof secondFriendGemsQty === 'number' && typeof thirdFriendGemsQty === 'number') {

        const firstFriendGemsPower = 21;
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

// console.log(gemsToDiamond(100, 5, 1));