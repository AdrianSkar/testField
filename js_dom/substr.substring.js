const str = 'The test string is ready.';

//str.substring(indexStart[, indexEnd])
console.log(str.substring(0, 3));
console.log(str.substring(2));
console.log(str.substring(2, 2));
console.log(str.substring(2, 3));
console.log(str.substring(3, 2)); //swapped
console.log(str.substring(3, -2)); //negative = 0
console.log(str.substring(3, NaN)); // NaN = 0
console.log(str.substring(3, 50)); // >str.length = str.length
console.log(str.substring(str.length - 3, str.length));

/*
str.substr(start[, length])

substr() is considered a legacy feature in ECMAScript and could be removed from future versions, so it is best to avoid using it if possible.

*/
console.log(str.substr(0, 4));
console.log(str.substr(2));
console.log(str.substr(-2));
console.log(str.substr(2, 2));
console.log(str.substr(2, 3));
console.log(str.substr(3, 2)); //swapped
console.log(str.substr(3, undefined)); // undefined = str.length
console.log(str.substr(3, 50)); // >str.length = str.length
console.log(str.substr(str.length - 3, str.length));


