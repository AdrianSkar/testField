/// Lexical scoping

function init() {
	var name = 'Mozilla';// local variable created by init
	function displayName() {// displayName is the inner function, a closure, available only within init()
		console.log(name); //use variable declared in outer/parent function
	}
	displayName();
}
init();

/// Closure

function makeFunc() {
	let name = 'Mozilla';
	function displayName() {
		console.log(name);
	}
	return displayName();
}

let myFunc = makeFunc;
myFunc();

/*In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.*/

function makeAdder(x) { //function factory (creates functions that can add a specific value to their argument) eg: add5, add10, etc
	return function (y) {
		return x + y;
	};
}
//add5 and add10 are both closures; they share the same function body definition but store different lexical environments 
const add5 = makeAdder(5); //  add5's lexical environment, x is 5
const add10 = makeAdder(10);//  add10's lexical environment, x is 10

console.log(add5(2));
console.log(add10(7));

let myAdder = (x => (y) => x + y);
let myAdd5 = myAdder(5);
console.log(myAdd5(6));

let test = '';
// function makeSizer(size) {
//   return function() {
//     test = size + 'px';
//   };
// }

// function makeSizer(size) {

// 			test = size + 'px';
// 			return test;

// }
let makeSizer = (size => size + 'px');
var size12 = makeSizer(12);
console.log(size12);

let plusSize = (size => (14 + size) + 'px');
var sizePlus = plusSize(2);
var sizeMinus = plusSize(-2);
console.log(sizePlus);
console.log(sizeMinus);

//______________________________________________________________________________

/*Refs:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/