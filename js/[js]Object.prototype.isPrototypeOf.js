/// The isPrototypeOf() method checks if an object exists in another object's prototype chain

function object1() { }
function object2() { }

object1.prototype = Object.create(object2.prototype);

const object3 = new object1();

console.log(object1.prototype.isPrototypeOf(object2));
console.log(object1.prototype.isPrototypeOf(object3));

console.log(object2.prototype.isPrototypeOf(object3));
console.log(object2.prototype.isPrototypeOf(object3));

//______________________________________________________________________________

/// Object -> Foo -> Bar -> Baz

function Foo() { }
function Bar() { }
function Baz() { }

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz));
console.log(Bar.prototype.isPrototypeOf(baz));
console.log(Foo.prototype.isPrototypeOf(baz));
console.log(Object.prototype.isPrototypeOf(baz));

console.log(Object.prototype.isPrototypeOf(Foo.prototype));
console.log(Foo.prototype.isPrototypeOf(Bar.prototype));
console.log(Bar.prototype.isPrototypeOf(baz));


//______________________________________________________________________________

/*
Refs:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf

*/
