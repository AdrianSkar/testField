// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet#Groups_and_ranges

/*
(x): Matches x and remembers the match
\n: Refers to group (parenthesis) number 'n'
*/

let str = 'word word';
let str2 = 'word string';
let reg = /(\w+)\s\1/;

console.log(str.match(reg));
console.log(str2.match(reg));