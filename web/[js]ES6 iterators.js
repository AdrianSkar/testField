// https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e

const iterable = {
	[Symbol.iterator]() {
		let count = 0;
		const iterator = {
			next() {
				count++;

				if (count === 1) {
					return { value: 'This', done: false };
				}
				else if (count === 2) {
					return { value: 'is', done: false };
				}
				else if (count === 3) {
					return { value: 'iterable.', done: false };
				}

				return { value: undefined, done: true };
			}
		};
		return iterator;
	}
};

console.log(iterable[Symbol.iterator]().next());
console.log(iterable[Symbol.iterator]().next());
console.log(iterable[Symbol.iterator]().next());

let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//On line 4, we make the iterator. It’s an object with next method defined. The next method returns the value according to step variable. On line 25, we retrieve the iterator. On 27, we called next. We keep calling next until done becomes true.

//______________________________________________________________________________

///Destructuring of arrays:

const array = ['a', 'b', 'c', 'd', 'e'];
const [first, , third, , last] = array;

const iteratorArr = array[Symbol.iterator]();
console.log(iteratorArr.next().value);
iteratorArr.next(); //skipped, not assigned
console.log(iteratorArr.next().value);
iteratorArr.next(); //skipped, not assigned
console.log(iteratorArr.next().value);

//______________________________________________________________________________

/// The spread operator:

const array2 = ['a', 'b', 'c', 'd', 'e'];
const array2b = [1, ...array2, 2, 3];
console.log(array2b);

const iterator3 = array2[Symbol.iterator]();
const array3 = [1];
for (let nextVal = iterator3.next(); nextVal.done !== true; nextVal = iterator3.next()) {
	array3.push(nextVal.value);
}
array3.push(2);
array3.push(3);
console.log(array3);

//______________________________________________________________________________

/// Deep object iteration:

const myFavAuthors = {
	allAuthors: {
		fiction: [
			'Agatha Christie',
			'J. K. Rowling',
			'Dr. Seuss'
		],
		scienceFiction: [
			'Neal Stephenson',
			'Arthur Clarke',
			'Isaac Asimov',
			'Robert Heinlein'
		],
		fantasy: [
			'J. R. R. Tolkien',
			'Terry Pratchett'
		],
	},
	[Symbol.iterator]() {
		// Get all the authors in an array
		const genres = Object.values(this.allAuthors);

		//Store the current genre and author index
		let currentAuthorIndex = 0;
		let currentGenreIndex = 0;

		return {
			next() {
				// authors according to current genre index
				const authors = genres[currentGenreIndex];

				// doNotHaveMoreAuthors is true when the authors array is exhausted.
				// That is, all items are consumed.
				const noMoreAuthors = !(currentAuthorIndex < authors.length);
				if (noMoreAuthors) {
					//Genre index to the next one
					currentGenreIndex++;
					//Reset author index to start at 0
					currentAuthorIndex = 0;
				}

				const noMoreGenres = !(currentGenreIndex < genres.length);
				if (noMoreGenres) {
					return { value: undefined, done: true };
				}
				// if everything is correct, return the author from the 
				// current genre and increment the currentAuthorindex
				// so next time, the next author can be returned.
				return {
					value: genres[currentGenreIndex][currentAuthorIndex++],
					done: false
				};

			}
		};

	}
};

console.log(...myFavAuthors);

console.log(Object.values(myFavAuthors.allAuthors));

//______________________________________________________________________________

/// My take on previous function

const ownFavAuthors = {
	allAuthors: {
		fiction: [
			'Agatha Christie',
			'J. K. Rowling',
			'Dr. Seuss'
		],
		scienceFiction: [
			'Neal Stephenson',
			'Arthur Clarke',
			'Isaac Asimov',
			'Robert Heinlein'
		],
		fantasy: [
			'J. R. R. Tolkien',
			'Terry Pratchett'
		],
	},
	[Symbol.iterator]() {
		// Get all the authors in an array
		const genres = Object.values(this.allAuthors);
		const flatty = genres.flat();
		i = 0;

		return {
			next() {
				i++;
				if (i < flatty.length) {

					return { value: flatty[i], done: false };
				}
				//if arr.ended return done
				return { value: undefined, done: true };
			}
		};

	}
};

console.log(...ownFavAuthors);

console.log(Object.values(ownFavAuthors.allAuthors));