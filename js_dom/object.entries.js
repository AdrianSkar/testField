// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const object = {
	one: 1,
	test: [true, false],
	two: 2
};
console.log(Object.entries(object));

const test = obj => {
	for (const [a, b] of Object.entries(obj)) {
		console.log(a, b);
	}
};
console.log(test(object));