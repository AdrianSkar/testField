const nums = [1, 2, 3, 4, 5];

const reverse = arr => ({
	[Symbol.iterator]() {
		let i = arr.length;
		return {
			next: () => ({
				value: arr[--i],
				done: i < 0
			})
		};
	}
});

console.log(nums);
console.log([...reverse(nums)]);


//______________________________________________________________________________

const range = (start = 0, stop, step = 1) => {
	if (stop === undefined) { // if not stop start = 0 and stop = start
		[start, stop] = [0, start];
	}

	start -= step; // stablish starting point 
	return {
		[Symbol.iterator]: () => ({ // iteration starts here
			next: () => ({
				value: start += step,
				done: start >= stop
			})
		})
	};
};

console.log([...range(9)]);
console.log([...range(1, 20, 5)]);

/*
Refs:
- https://medium.com/front-end-weekly/thank-u-symbol-iterator-next-aef9f09ff78
*/