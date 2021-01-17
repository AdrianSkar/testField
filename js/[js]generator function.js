//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

///passed to pocket, not finished

function* generator(i) {
	yield i;
	yield i + 5;
}

const test = generator(10);

console.log(test.next());
console.log(test.next());
console.log(test.next());

function* generatorB(i) {
	yield i;
	while (i < 30) {
		yield i += 5;
	}
}

const testB = generatorB(10);

console.log(testB.next());
console.log(testB.next());
console.log(testB.next());
console.log(testB.next());
console.log(testB.next());
console.log(testB.next());

/// Nested generators

function* anotherGenerator(i) {
	yield i + 1;
	yield i + 2;
	yield i + 3;
}

function* topGenerator(i) {
	yield i;
	yield* anotherGenerator(i);
	yield i + 10;
}
const gen = topGenerator(10);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/// Passing args

function* logGen() {
	console.log(0);
	console.log(1, yield);
	console.log(2, yield);
	console.log(3, yield);
}

let genLog = logGen();

genLog.next();
genLog.next('pretzel');
genLog.next('tester');
genLog.next('tester3');


/// Using return

function* returner() {
	yield 'a';
	return 'b';
	yield 'unreachable';
}

let retGen = returner();

console.log(retGen.next());
console.log(retGen.next());
console.log(retGen.next());

/// As object prop

const obj = {
	*generator() {
		yield 1;
		yield 2;
	}
};

let objGen = obj.generator();

console.log(objGen.next());
console.log(objGen.next());
console.log(objGen.next());

/// As obj method

class Foo {
	*generator() {
		yield 1;
		yield 2;
	}
}

let f = new Foo();
const fGen = f.generator();

console.log(fGen.next());
console.log(fGen.next());
console.log(fGen.next());

/// As computed prop

class Foo2 {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
	}
}

const fooObj = {
	*[Symbol.iterator]() {
		yield 'a';
		yield 'b';
	}
};

console.log(Array.from(new Foo2()));
console.log(Array.from(fooObj));

/// Defined in an expression

const fooly = function* () {
	yield 10;
	yield 20;
};
const baary = fooly();
console.log(baary.next());
console.log(baary.next());
console.log(baary.next());