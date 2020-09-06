
// calculate the first day of the week: https://stackoverflow.com/a/4156516/3383507

let today = new Date();
console.log(today);

let getMonday = (today) => {
	const d = new Date(today),
		day = d.getDay();
	// calculate the day to set as monday (0)
	const diff = d.getDate() - day + (day === 0 ? -6 : 1); //adjust for sundays
	console.log(day, diff);
	return new Date(d.setDate(diff));
};

// function getMonday(d) {
// 	d = new Date(d);
// 	var day = d.getDay(),
// 		diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
// 	return new Date(d.setDate(diff));
// }

console.log(getMonday(today));



