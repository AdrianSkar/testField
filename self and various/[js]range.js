//* Range arr
function rangeStep(start, end, step = start < end ? 1 : -1) {
	let arr = [];
	if (step > 0) {
		for (let i = start; i <= end; i += step) {
			arr.push(i);
		}
	}
	else {
		for (let i = start; i >= end; i += step) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(rangeStep(5, 1));

let range = (start, end) => {
	if (start === end) return [start];
	else {
		let arr = range(start, end - 1);
		arr.push(end);
		return arr;
	}
};
console.log(range(1, 8));

let rangeB = (start, end) => {
	let arr = [start];
	do { arr.push(++start); } while (start !== end);
	return arr;
};
console.log(rangeB(1, 4));


//* Sum range
let sumRange = (start, end) => {
	let arr = [start];
	do { arr.push(++start); } while (start !== end);
	return arr.reduce((acc, curr) => acc + curr);
};
console.log(sumRange(1, 6));

let sumRangeB = (start, end) => {
	let result = start;
	do { result += end--; } while (start !== end);
	return result;
};
console.log(sumRangeB(1, 6));

