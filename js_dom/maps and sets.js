/*
/// Maps- like objects they have keys and values
* Unique keys
.size
.set(key, value)
.delete(key)
.get(key)
.has(key)
.keys() - returns Iterator with array of keys
.values() - returns Iterator with array of values
.entries() - returns Iterator with array of [key, value]
.clear()
.forEach()
*/

const myMap = new Map([['name', 'John'], ['surname', 'Doe']]);
console.log(myMap);
console.log([...myMap]);// same as Array.from(myMap)

myMap.set('TestProp', 234);
// myMap.delete(key);
myMap.delete('name');
console.log(myMap);
console.log(myMap.has('surname'));
console.log(myMap.size);
console.log(myMap.get('surname'));

// myMap.forEach(val => console.log('myMap val:', val));
// myMap.forEach((key, val) => console.log('key:', key, 'val:', val));
// for (let key of myMap.keys()) {
// 	console.log('myMap val:', key);
// }
// for (let value of myMap.values()) {
// 	console.log('myMap val:', value);
// }
// for (let entry of myMap.entries()) {
// 	console.log('myMap val:', entry);
// }
// for (let [key, value] of myMap) {
// 	console.log('key', key, 'is of value', value);
// }

myMap.clear();
console.log(myMap);

const myObj = {};
const a = {};
const b = {};

myObj[a] = 'a';
myObj[b] = 'b'; // overwrites previous
console.log(myObj);

const my2ndMap = new Map([[a, 'a'], [b, 'b']]);
console.log(my2ndMap);

// Merge maps (if repeated keys, the last one prevails)
let merged = new Map([...myMap, ...my2ndMap]);
console.log(merged);

///WeakMaps
// objects as keys only, weakly held

let carWeakMap = new WeakMap();
let key1 = {
	id: 1,
};

let carA = {
	make: 'Honda',
	model: 'Civic'
};

carWeakMap.set(key1, carA);
carWeakMap.set([1, 'test']);
carWeakMap.set({ id: 2 }, {
	make: 'Toyota',
	model: 'Camry'
});
// returns empty obj or WeakSet { <items unknown> } use:
console.log(carWeakMap);
const { inspect } = require('util');
console.log(inspect(carWeakMap, { showHidden: true }));
// more on https://stackoverflow.com/questions/62502224/es6-console-log-on-weakset-gives-item-unknown


//______________________________________________________________________________

/*
/// Sets - Like arrays they have values
* Unique values (also helpful to remove non-unique values from arrays)
.size()
.add(value)
.delete(value)
.entries() - returns Iterator with array of [value, value]
.values() - returns Iterators with array of values
.has(value)
.clear()
.forEach()
*/

const myArr = [1, 2, 3, 4, 5, 5, 6, 6, 1, 2];
let mySet = new Set(myArr);

console.log(myArr[1]);
console.log(mySet[1]);// undefined

console.log(mySet);

const uniqueArr = [...mySet];
console.log(uniqueArr);
console.log(Array.from(mySet));

mySet.add(7);
mySet.add('7');
mySet.add([10, 11]);
mySet.add({ a: 1, b: 2 });
mySet.delete(1);
mySet.delete('7');
console.log(mySet);
console.log(mySet.has(2));
console.log(mySet.size);
mySet.clear();
console.log(mySet);

mySet = new Set(myArr);
mySet.forEach(val => console.log('val: ', val));
// for (let key of mySet){
// 	console.log(key);
// }
// for (let value of mySet.values()){
// 	console.log(value);
// }
// for (let entry of mySet.entries()){
// 	console.log(entry);
// }

// intersect can be simulated via 
// let intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
// let difference = new Set([...set1].filter(x => !set2.has(x)));


/// WeakSets
// Weakly held, objects as keys only

let carWeakSet = new WeakSet();
let car1 = {
	make: 'Honda',
	model: 'Civic'
};
let car2 = {
	make: 'Toyota',
	model: 'Camry'
};

carWeakSet.add(car1);
carWeakSet.add(car2);

console.log(carWeakSet);
// returns empty obj or WeakSet { <items unknown> } use:
// const { inspect } = require('util');
console.log(inspect(carWeakSet, { showHidden: true }));
// more on https://stackoverflow.com/questions/62502224/es6-console-log-on-weakset-gives-item-unknown

//______________________________________________________________________________


/*Refs:
- https://www.youtube.com/watch?v=hLgUTM3FOIIf
- https://www.youtube.com/watch?v=ycohYSx5h9w
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add
*/