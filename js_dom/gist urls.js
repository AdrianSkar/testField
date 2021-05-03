// Gist to api url
let gist = "https://gist.github.com/AdrianSkar/da1f68fee4a6c1865fea85938da3e129";

function gist_to_api(url) {
	let output = url
		.replace('gist', 'api')
		.split('/');
	output.splice(3, 1, 'gists');
	return output.join('/');
}
console.log(gist);
console.log(gist_to_api(gist));


// Check well formed gist url
let url = "https://gist.github.com/AdrianSkar/da1f68fee4a6c1865fea85938da3e129";
let url2 = "https://gist.github.com/AdrianSkar/da1f68fe4a6c1865fea85938da3e129";

function check(url) {
	let regex = /https:\/\/gist.github.com\/.+\/[a-z0-9]{32}/;
	return url.match(regex);
}
console.log(check(url));
console.log(check(url2));