///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
/*
class name [extends otherName] {
	class body
}
*/

class Polygon {
	constructor(height, width) {
		this.area = height * width;
		this.name = 'polygon';
	}
	methodA() {
		console.log('parent');
	}
	static statMethod() {
		console.log('Show me on class, not on instances');
	}
}

let test = new Polygon(8, 4);

console.log(test);
console.log(test.area);
console.log(new Polygon(4, 3));
Polygon.statMethod();

class Square extends Polygon {
	constructor(length) {
		super(length, length);
		this.name = 'square';
	}
	methodA() { // Redefine parent method (aka polymorphism)
		console.log(this.name);
		super.methodA();
	}
}
let testSquare = new Square(4);

console.log(testSquare);
testSquare.methodA();


/*
You can also define a class using a class expression. But unlike a class expression, a class declaration doesn't allow an existing class to be declared again and will throw a SyntaxError if attempted.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
*/
///Class expression:

const square = class { //class name can be omitted and redefine when using expressions
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	area() {
		return this.width * this.height;
	}
};

let expSq = new square(5, 4);

console.log(expSq);
console.log(expSq.height);
console.log(expSq.area());

///named class expressions

const Foo = class NamedFoo {
	constructor() { }
	whoIsThere() {
		return NamedFoo.name;
	}
};

const bar = new Foo();
console.log(bar.whoIsThere());
console.log(Foo.name);
// console.log(NamedFoo.name); // not defined

// Other refs:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
