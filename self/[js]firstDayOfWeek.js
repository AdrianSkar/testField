let curr = new Date(); //current date
// calculate the first day of the week: https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-week-in-javascript/26922029
let firstDayWeek = curr.getDate() - curr.getDay() + 1;
let startDay = new Date(curr.setDate(firstDayWeek));
console.log(startDay);

// set start to 00:00:00 of the first day of the week
let start = (new Date(curr.getFullYear(), curr.getMonth(), startDay.getDate(), 0, 0, 0)).toISOString();

let end = new Date(); // can't use curr because its been modified by curr.setDate()
end = end.toISOString();
