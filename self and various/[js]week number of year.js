// https://weeknumber.net/how-to/javascript
// https://www.epochconverter.com/weeknumbers

// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
	let date = new Date(this.getTime());

	// January 4 is always in week 1.
	let week1 = new Date(date.getFullYear(), 0, 4);
	console.log(week1);

	// Adjust to Thursday in week 1 and count number of weeks from date to week1.
	const result = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	//* 1+ (first week isn't 0)
	//* date.getTime() - week1.getTime() / 86400000: current time - Jan 4 / to days - 3 (started on 4th)
	console.log(((date.getTime() - week1.getTime()) / 86400000) - 3);

	//* week1.getDay() + 6) % 7:  Week starts on Monday
	console.log((week1.getDay() + 6) % 7);
	//* divided by 7 (weeks instead of days)

	return result.toString().padStart(2, '0');
};

console.log(new Date().getWeek());
// console.log(new Date('August 28, 2020 23:15:30').getWeek());//35
// console.log(new Date('January 15, 2020 23:15:30').getWeek());//03


//______________________________________________________________________________


//* Original:
// Returns the ISO week of the date.
Date.prototype.getWeek2 = function () {
	var date = new Date(this.getTime());
	date.setHours(0, 0, 0, 0);
	// Thursday in current week decides the year.
	date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	// January 4 is always in week 1.
	var week1 = new Date(date.getFullYear(), 0, 4);
	// Adjust to Thursday in week 1 and count number of weeks from date to week1.
	return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
		- 3 + (week1.getDay() + 6) % 7) / 7);
}

// Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear2 = function () {
	var date = new Date(this.getTime());
	date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	return date.getFullYear();
}