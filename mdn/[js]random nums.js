// Math.random (1 to 10) vs Date.now() % 10;

console.time('a');

let randM = Math.floor((Math.random() * 10) + 1);
console.log('randMath:', randM);//

console.timeEnd('a');

//______________________________________________________________________________

console.time('b');

let randD = Date.now() % 10;
console.log('randDate:', randD);

console.timeEnd('b');



//______________________________________________________________________________

/*
Refs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/