///scroll till end of page 

let scrollCount = 0;
let scroll = function () {
	window.scrollTo(0, document.body.scrollHeight);
};

function scrollEnd() {
	if (document.body.scrollHeight === scrollCount) {
		console.log('done');
		clearInterval(timer);
	}
	else {
		scrollCount = document.body.scrollHeight;
		scroll();
		console.log('scrolling');
	}
}

let timer = setInterval(() => {
	scrollEnd();
}, 2000);


// window.scrollBy(0, document.body.scrollHeight/2);