// JS Steve Griffith
let count = 0
let recur = function () {
	console.log(count);
	count++;
	if (count < 10) {
		recur();
	}
};
console.log('Before recursion');
recur();
console.log('End of recursion');

//______________________________________________________________________________
// https://eloquentjavascript.net/03_functions.html#p_jU1r1XPp0G

function isEven(num) {
	if (num < 2) {
		return num === 0 ? true : false;
	}
	else { return isEven(num - 2); }
}
console.log(isEven(3));

//______________________________________________________________________________

function countdown(n) {
	let size = n, arr = [];
	function fact(n) {
		arr.push(n);
		size--;
		if (size > 0) {
			fact(size);
		}
	}
	fact(n);
	return arr;
}
// Only change code above this line

console.log(countdown(10));

/// fibonacci numbers

function fibon(num) {
	let fib = [1, 1], count = 0;
	function fibMe(value) {
		if (count === (fib[fib.length - 1] + fib[fib.length - 2])) fib.push(count);
		count++;
		if (count < num) fibMe(count);
	}
	fibMe(num);
	return fib;
}

console.log(fibon(10));
console.log(fibon(170));