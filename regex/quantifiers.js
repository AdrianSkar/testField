/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet#quantifiers
x* 				matches x 0 or more times
x+ 				matches x 1 or more times
x? 				matches x 0 or more times; if used after quantifiers (*, +, ? or {}) 							makes them non-greedy (matching minimum n. of times)
x{n} 			matches exactly 'n' occurrences
x{n, m} 	matches at least 'n', and at most 'm' (optional)

*/

let test = 'loooooong';
let american = 'color';
let british = 'colour';
let rainbowRegex = /colou?r/;

console.log(/o*/.exec(british));
console.log(/o+/.exec(british));
console.log(/co?/.exec(british));
console.log(/o{2}/.exec(test));
console.log(/o{2,4}/.exec(test));
console.log(/o{2,6}/.exec(test));
console.log(/o{2,6}?/.exec(test));
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));
