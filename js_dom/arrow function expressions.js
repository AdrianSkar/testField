// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// concise body syntax, implied "return"
let func = x => x * x;

// with block body/multiple lines, explicit "return" needed
// parenthesis around args if multiple or none
let func2 = (x, y) => {
	return x + y;
};

// Parentheses around the return expression are needed when returning objects
// otherwise, they will get interpreted instead of returned.
let func3 = () => ({ a: 1, b: 2 });

//IIFE
(() => 'true')();