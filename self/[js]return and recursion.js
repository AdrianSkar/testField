/// Don't forget to return a value, specially in recursion functions
const nth = (num) => {
	if (num === 3) {
		return 'three';
	}
	return nth(num + 1); // without return it'll default to returning undefined
};
console.log(nth(0));