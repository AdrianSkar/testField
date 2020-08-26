/* 
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 
 `object instanceof constructor`
*/

function Car(make, model) {
	this.make = make;
	this.model = model;
}

const auto = new Car('Tesla', 'Roadster');

console.log(auto instanceof Car);
console.log(auto instanceof Object);

//______________________________________________________________________________

function C() { }
function D() { }
let o = new C();

console.log(o instanceof C);
console.log(o instanceof D);

C.prototype = {};

console.log(o instanceof C);// false: rewritten

D.prototype = new C();
const o2 = new D();
console.log(o2 instanceof C);
console.log(o2 instanceof D);


//______________________________________________________________________________

/* Refs:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof */