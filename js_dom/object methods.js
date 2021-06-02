// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods
// 'use strict';
const obj1 = { a: 1, b: false, c: { 'one': 1, 'two': 2 } };


/// Object.assign() copies enumerable own props

let obj_assign = {};
Object.assign(obj_assign, obj1);
console.log(obj_assign);
obj1.a = 2;
console.log(obj_assign.a);
console.log(obj1.a);

//* If the source value is a reference to an object, it only copies the reference value.

obj1.c.one = 2;
console.log(obj_assign.c);
console.log(obj1.c);

console.log(obj_assign);

//______________________________________________________________________________

/// Object.create() New object with the specified prototype object and props

console.log(obj1);
let obj_create = Object.create(obj1);

console.log(obj1);
console.log(obj_create);

console.log(obj_create.a);
console.log(obj_create.b);
console.log(obj_create.c);

//______________________________________________________________________________

/// Object.defineProperty()/Object.defineProperties(); define props directly

Object.defineProperty(obj1, 'd', {
	value: 4, enumerable: true
});
Object.defineProperty(obj1, 'e', {
	value: 5, enumerable: false
});
console.log(obj1);

Object.defineProperties(obj1, {
	'f1': {
		value: 1,
		enumerable: true
	},
	'f2': {
		value: 2,
		enumerable: true
	},
});
console.log(obj1);

//______________________________________________________________________________

/// Object.entries() returns an array with [key, value] pairs of enum props

let obj_entries = Object.entries(obj1);
console.log(obj_entries);

//* Object.fromEntries() is its reverse method (new obj from iterable [key, value])

let obj_fromEntries = Object.fromEntries(Object.entries(obj1));
console.log(obj_fromEntries);

//______________________________________________________________________________

/// Object.freeze: other code won't be able to delete/change its props

Object.freeze(obj1);
obj1.a = 12;
delete obj1.b;

console.log(obj1);

//______________________________________________________________________________

/// Object.getOwnPropertyDescriptor/s() return prop/obj for own prop descriptors

console.log(Object.getOwnPropertyDescriptor(obj1, 'd'));

let obj_descriptors = Object.getOwnPropertyDescriptors(obj1);
console.log(obj_descriptors);
console.log(obj_descriptors.a);
console.log(obj_descriptors.a.value);

//______________________________________________________________________________

/// Object.getOwnPropertyNames() returns all own props

console.log(Object.getOwnPropertyNames(obj1));
for (const key in obj1) {
	console.log(key);
}
console.log(Object.keys(obj1));

//______________________________________________________________________________

/// Object.getPrototypeOf() returns the prototype

const get_proto = Object.create(obj1);
console.log(Object.getPrototypeOf(get_proto) === obj1);
console.log(Object.getPrototypeOf(get_proto));

//* Also Object.isPrototypeOf()
console.log(obj1.isPrototypeOf(get_proto));


//______________________________________________________________________________

/// Object.is() determines if two values are the same value

console.log(Object.is(2, 2));
console.log(Object.is(2, 4));
console.log(Object.is(obj1, get_proto));
console.log(Object.is({ 1: 2 }, { 1: 2 }));

//______________________________________________________________________________

/// Object.keys()/values() return array containing own enumbrable props/values (string props)

console.log(Object.keys(obj1));
console.log(Object.values(obj1));

//______________________________________________________________________________

/// Object.hasOwnProperty() return Boolean wheter Obj has the specified prop

console.log(obj1.hasOwnProperty('a'));
console.log(obj1.hasOwnProperty('a1'));

//______________________________________________________________________________
