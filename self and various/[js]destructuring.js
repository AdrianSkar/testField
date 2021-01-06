/// Destructuring
const user = { name: 'Pepe', age: 15 };
let { name: userName } = user;
console.log(userName);

// From nested obj:
const user2 = {
	johnDoe: {
		age: 34, email: 'test@test.com'
	}
};
// same var names:
const { johnDoe: { age, email } } = user2;
console.log(age, email);

// different var names:
const { johnDoe: { age: ageJoe, email: emailJoe } } = user2;
console.log(ageJoe);

//| swap values
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b);

//| on Arrays it's similar to .slice()
const [x, y, ...arr] = [1, 2, 3, 4, 5]; // ..rest only works as the last element
console.log(x, y);
console.log(arr);

function removeFirstTwo(list) {
	const [, , ...arr] = list;
	return arr;
}
console.log(removeFirstTwo([9, 8, 7, 6, 5]));

//| Default values
let g, h;
[g = 1, h = 2] = [10];
console.log(g, h);

//| Parsing an array returned from a function + rest to a variable
function test() {
	return ['uu', 'tt', 'TT'];
}
[u, ...t] = test();
console.log(u, t);

/* Refs:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/