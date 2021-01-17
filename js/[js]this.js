// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

const test = {
	prop: 42,
	func: function () {
		return this.prop;
	}
};
console.log(test.func());

let a = 37;
console.log(window.a);

/// this in function contexts 

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: 'Custom' };

function whatsThis() {
	console.log(this.a);  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global' as this in the function isn't set, so it defaults to the global/window object
whatsThis.call(obj);  // 'Custom' as this in the function is set to obj
whatsThis.apply(obj);

//______________________________________________________________________________


function f() {
	return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 3


//* As an object method 

/* When a function is called as a method of an object, its this is set to the object the method is called on. */

var o = {
	prop: 37,
	f: function () {
		return this.prop;
	}
};
console.log(o.f()); // 37

var o = { prop: 37 };
function independent() {
	return this.prop;
}
o.f = independent;
console.log(o.f()); // 37

o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // 42

var o = { f: function () { return this.a + this.b; } };
var p = Object.create(o);
p.a = 1;
p.b = 4;
console.log(p.f()); // 5


//* As a constructor

function C() {
	this.a = 37;
}

var o = new C();
console.log(o.a); // 37

function C2() {
	this.a = 37;
	return { a: 38 };
}

o = new C2();
console.log(o.a); // 38

//______________________________________________________________________________


