const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

let do_something = function (func) {
	let x = 1;
	let y = 2;
	return func(x, y);
};

console.log(do_something(add));
console.log(do_something(subtract));

//______________________________________________________________________________

function doThis(param) {
	return function (a, b) {
		if (param === 'sum') { return a + b; }
		else if (param === 'subs') { return a - b; }
		else { return 'No operation selected'; }
	};
}
let sum = doThis('sum');
console.log(sum(1, 2));

let subs = doThis('subs');
console.log(subs(1, 2));

let nothing = doThis('nothing');
console.log(nothing(1, 2));

//______________________________________________________________________________

const arr = [1, 3, 7];
function logMe(log_this) { console.log(log_this); }

arr.forEach(item => logMe(item));

// Is the same as:

arr.forEach(logMe);

// Careful with
arr.forEach(console.log);
// This logs: `item, index, arr` because those are the parameters of forEach
