function reverse(num) {
	let ints = [];
	while (num) {
		console.log(ints);
		ints.push(num % 10);

		console.log(Math.floor(num / 10));
		num = Math.floor(num / 10);
	}
	return ints.join('');
}
console.log(reverse(501));

/* Refs:

Solution 2: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-roman-numeral-converter/16044

*/