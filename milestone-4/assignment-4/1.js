function mindGame(number) {
	if (typeof number == 'number' && number >= 0) {
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

const number = 33;
console.log(mindGame(number));
