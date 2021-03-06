// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet#Other_assertions
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead

/*
- x(?=y): Positive lookahead: search pattern exists but won't be matched.
					Matches 'x' only if it's followed by 'y'
- x(?!y): Negative lookahead: search pattern doesn't exist
					Matches 'x' only if it's not followed by 'y'
- (<=y)x: Positive lookbehind: Matches 'x' only if it's preceded by 'y'
- (<!y)x: Matches 'x' only if it's not preceded by 'y'
*/

let str = 'abcdef';
let posA = /ab(?=cd)/;
let negA = /ab(?!cd)/;
let posB = /(?<=cd)ef/;
let negB = /(?<!23)cd/;

console.log(str.match(posA));
console.log(str.match(negA));
console.log(str.match(posB));
console.log(str.match(negB));

/* More complex test:
	x(?=y)(?=z) meaning:
	1. find x
	2. Check if y is immediately after x, skip if it isn't
	3. Check if z is also immediately after x, skip if it isn't
	4. If both tests passes, then x is a match
	Which is only possible if y and z are not mutually exclusive
*/

let str2 = 'aBcd 345';
console.log(/a(?=\w)(?=B)/.exec(str2));
console.log(/a(?=\w)(?=b)/.exec(str2));