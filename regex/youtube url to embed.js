/* Convert youtube regular urls to embed urls by capturing ids
https://youtu.be/F5mRW0jo-U4
https://www.youtube.com/watch?v=F5mRW0jo-U4&t=11094s
https://www.youtube.com/watch?v=F5mRW0jo-U4

to

https://www.youtube.com/embed/F5mRW0jo-U4
*/

function yt_embed(url) {
	const yt_id_regex = /watch\?v=([\w-]{11})|youtu\.be\/([\w-]{11})/,
		yt_id = url.match(yt_id_regex)[1] ? url.match(yt_id_regex)[1] : url.match(yt_id_regex)[2];

	return `https://www.youtube.com/embed/${yt_id}`;
}

console.log(yt_embed("https://youtu.be/F5mRW0jo-U4"));
console.log(yt_embed("https://www.youtube.com/watch?v=F5mRW0jo-U4&t=11094s"));
console.log(yt_embed("https://www.youtube.com/watch?v=F5mRW0jo-U4"));
