//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable#:~:text=In%20JavaScript%2C%20Object%20s%20are,the%20properties%20of%20an%20object.&text=keys%20or%20Object.,or%20entries%20of%20an%20object.

/// Using Object methods
let obj = {
	prop1: 1,
	prop2: false,
	prop3: 'test'
};

console.log(Object.keys(obj));
for (let prop of Object.keys(obj)) {
	console.log(obj[prop]);
}
for (let [prop, value] of Object.entries(obj)) {
	console.log(prop, ':', value);
}
