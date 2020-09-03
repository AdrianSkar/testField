let starwars8 = {
	title: 'The last jedi',
	director: 'Rian Johnson',
	year: 2017,
	boxOffice: '1.3B'
};

let count = -1;
let SW8 = {
	[Symbol.iterator]: function (obj) {
		return {
			next: () => {
				count++;
				switch (count) {
					case 0:
						return {
							value: obj.title, done: false
						};
					case 1:
						return {
							value: obj.year, done: false
						};
					case 2:
						return {
							value: obj.director, done: false
						};
					case 3:
						return {
							value: undefined, done: true
						};
					default:
						return {
							value: undefined, done: true
						};
				}
			}
		};
	}
};

let data = SW8[Symbol.iterator](starwars8);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());

//
// for(let p of starwars8){
//    for of loops are using the .next( ) method behind the scenes
//}

//______________________________________________________________________________

const dragons = [
	'cool dragon',
	'angry dragon',
	'nasty dragon'
];
const iterator = dragons[Symbol.iterator](); //only with arrays
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const dragon of dragons) {
	console.log(dragon);
}

//______________________________________________________________________________


///MDN style:

let object1 = { 1: 123, 2: 234 };

object1[Symbol.iterator] = function* () {
	yield this[1];
	yield this[2];
	yield 'done';
};

console.log([...object1]);

//iterables can be defined directly inside a class or object using a computed property
const someObj = {
	*[Symbol.iterator]() {
		yield 'a';
		yield 'b';
	}
};
console.log([...someObj]);

//______________________________________________________________________________

///Using a constructor function

let iterable2 = {
	[Symbol.iterator]() {// "()" and no ":" because this is a constructor function, not a function assigned to a property, function mode below
		let count = 0;
		const iterator = { // or simply 'return: {next(){...}}'
			next() {
				count++;

				if (count === 1) {
					return { value: 'value1', done: false };
				}
				else if (count === 2) {
					return { value: 'value2', done: false };
				}

				return { value: undefined, done: true };
			}
		};
		return iterator;
	}
};
let iterator2 = iterable2[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

///Using a function as prop value to pass an object

let obj3 = { prop1: 'testA', prop2: 'testB' };
let iterable3 = {
	[Symbol.iterator]: function (obj) {// this uses a function to pass an object
		let count = 0;
		const iterator = {
			next() {
				count++;

				if (count === 1) {
					return { value: obj.prop1, done: false };
				}
				else if (count === 2) {
					return { value: obj.prop2, done: false };
				}

				return { value: undefined, done: true };
			}
		};
		return iterator;
	}
};

let iterator3 = iterable3[Symbol.iterator](obj3);

console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

/*
Refs:
- https://youtu.be/NoUPIQobeLw?t=684
- https://www.youtube.com/watch?v=W4brAobC2Hc
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
- https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
*/