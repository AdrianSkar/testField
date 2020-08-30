
///Basic example

let myPromise = new Promise((resolve, reject) => {
	//Call resolve(...) when what we were doing asynchronously was successful and reject(...) when it failed. This example uses setTimeout(...) to simulate async code.
	setTimeout(function () {
		resolve('Success!');
		//reject('Failed!');
	}, 250);
});

myPromise.then(successMessage => {
	//successMessage is whatever we passes in the resolve(...) function above.
	console.log('Yes: ' + successMessage);
})
	.catch(rejectMessage => {
		console.log('No: ' + rejectMessage);
	});


//______________________________________________________________________________


createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// shorthand for:

const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);

//______________________________________________________________________________

//Old async ops:

doSomething(function (result) {
	doSomethingElse(result, function (newResult) {
		doThirdThing(newResult, function (finalResult) {
			console.log('Got the final result:', finalResult);
		}, failureCallBack);
	}, failureCallBack);
}, failureCallBack);

//Modern async, promise chain:

doSomething()
	.then(function (result) {
		return doSomeThingElse(result);
	})
	.then(function (newResult) {
		return doThirdThing(newResult);
	})
	.then(function (finalResult) {
		console.log('Got to the final result:', finalResult);
	})
	.catch(failureCallback); //short for 'then(null, failureCallback)'

//Using arrow functions:

doSomeThing()
	.then(result => doSomeThingElse(result))
	.then(newResult => doThirdThing(newResult))
	.then(finalResult => console.log(`Got to the final result: ${finalResult}.`))
	.catch(failureCallback);

///Important: Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions () => x is short for () => { return x; }).

//______________________________________________________________________________

//ops in parallel

Promise.all([func1(), func2(), func3()])
	.then(([result1, result2, result3]) => {/* use result1, result2 and result3*/ });

//Sequential composition:

[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
	.then(result3 => {/* use result3 */ });
// We reduced an arr of async functions down to a promise chain equivalent to:
Promise.resolve().then(func1).then(func2).then(func3);

//______________________________________________________________________________

const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
	resolutionFunc(777);
});
//At this point, 'promiseA' is already settled.
promiseA.then(val => console.log('asynchronous logging has val:', val));
console.log('immediate logging');

//'immediate logging'
//'asynchronous logging has val: 777


//______________________________________________________________________________

/* Refs:
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  */