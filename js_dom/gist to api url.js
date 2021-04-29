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