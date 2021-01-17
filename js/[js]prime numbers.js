/// Check if a number is prime

// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085/18
function check(num) {
	let m = Math.floor(Math.sqrt(num));
	while (m > 1) {
		if ((num % m === 0)) return false;
		m--;
	}
	return true;
}
console.log(check(3));
console.log(check(17));
console.log(check(30));

// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085
function isPrime(val) {
	if (val < 2) return false;
	for (let i = 2; i < val; i++) {
		if (val % i === 0) return false;
	}
	return true;
}
console.log(isPrime(2));
console.log(isPrime(30));
console.log(isPrime(17));

// https://stackoverflow.com/a/29624344/3383507
// * Find primes below val
let checkStack = val => {
	let primes = [];
	for (let n = 3; n <= val; n += 2) { // check odd nums only
		// divide each n by every existing value at primes and push matches only
		if (primes.every(prime => n % prime !== 0)) primes.push(n);
	}
	primes.unshift(2);
	return primes;
};
console.log(checkStack(30));