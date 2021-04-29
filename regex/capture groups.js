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

// Capture youtube id
const url = 'http://www.youtube.com/watch?v=F5mRW0jo-U4',
	url2 = 'https://www.youtube.com/watch?v=F5mRW0jo-U4&t=11094s',
	url3 = 'https://youtu.be/F5mRW0jo-U4';

let reg2 = /watch\?v=([\w-]{11})|youtu\.be\/([\w-]{11})/;

console.log(url.match(reg2));
console.log(url2.match(reg2));
console.log(url2.match(reg2)[1]);
console.log(url3.match(reg2)[1]);
console.log(url3.match(reg2)[2]);
let yt_id = url3.match(reg2)[1] ? url3.match(reg2)[1] : url3.match(reg2)[2];
console.log(yt_id);

console.log(url.replace(reg2, 'invalid_id'));
