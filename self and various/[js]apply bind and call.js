// Without strict mode "this" will default to the Global/Window object
// 'use strict';
//| func.apply(thisArg [, argsArray])
//| func.call(thisArg [, arg1, arg2...]) 
//| func.bind(thisArg [, arg1, arg2...])

let bob = function (num, str, x) {
	console.log('bob', num, str, this, x);
	return true;
};

let bill = {
	name: "Bill Murray",
	movie: "Lost in translation",
	myMethod: function (fn) {
		// fn(2, 'hello');
		let n = arguments[1];
		let s = arguments[2];
		fn.apply(bill, [n, s]); // arr for apply
		// fn.call(bill, n, s); // args for call

	}
};
let fred = bob.bind(bill, 5, 'see ya'); // binds the context for later calls
fred('x');

// bob(1, 'hello'); // 'this' will default to the global object
// bill.myMethod(bob);
// bob.call(bill, 2, 'goodbye'); // call takes args
// let arr = [3, 'hi'];
// bob.apply(bill, arr); // bind takes an array of args
// bill.myMethod(bob, 4, 'ciao');

//______________________________________________________________________________

const arr = [6, 89, 3, 25];
// const max = Math.max(arr); //! Math.max expects (arg1, arg2...)
const max = Math.max.apply(null, arr); // this = null and arr is passed as args
console.log(max);

// Spread is easier to read/maintain but only works in place or in arr literal
console.log(Math.max(...arr));
//! const spread = ...arr // syntax err

//______________________________________________________________________________
/* Refs:
https://www.youtube.com/watch?v=uBdH0iB1VDM&list=PLyuRouwmQCjkYdv4VjuIbvcMZVWSdOm58&index=58
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
*/
