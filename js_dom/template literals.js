let num = 1;
let string = 'string';
let bool = true;
let myFunc = () => 'function';

let output = `The num is ${num + 1},
the string is ${string} \t+\n, myFunc is ${myFunc()} and the bool is ${bool}`;
console.log(output);

function test() {
	return output;
}

let regularStr = `Regular string template with a tab \t and a newline \n`;
console.log(regularStr);

let rawStr = String.raw`raw string without a tab \t and a newline \n`;
console.log(rawStr);

/// If a value is not a string, the engine will internally create a string 
///  representation of it (like calling .toString()):
const obj = { a: 1, b: 2 }
console.log(obj);
console.log(`Obj is ${obj}`);
console.log(`Obj is ${JSON.stringify(obj)}`);

/*
tagged template literals (used to manipulate order/parts you want to return)
Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.
*/

let first = 'pineapple';
let second = 'tomato';
let txt = myTag`I don't like pizza with ${first} and ${second}.`
function myTag(strings, ...expressions) {
	// return 'I do not like ' + expressions.join(' and ');
	return expressions.reduce((acc, curr, idx) => {
		return acc + curr.toUpperCase() + strings[idx + 1];
	}, strings[0]);
}
console.log(txt);

/* Refs:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
https://www.youtube.com/watch?v=4oVJVglLLns
*/
