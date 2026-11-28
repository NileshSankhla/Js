let currDate = new Date();
console.log(currDate);
// since format is not too good

console.log(currDate.toDateString());
console.log(currDate.toLocaleDateString());
console.log(currDate.toTimeString());
console.log(currDate.toLocaleDateString());
console.log(currDate.toString());

let mydate = new Date("02-12-2007");

console.log(mydate.toString());

mydate = new Date(2007, 11, 2, 11, 30, 0);
console.log(mydate.toLocaleString());

timespamp = Date.now; //this is fxn
timestamp2 = Date.now(); // this is timestamp **very imp see all

console.log(timespamp());

console.log(
  typeof timespamp,
  "\n",
  typeof currDate,
  "\n",
  typeof timestamp2,
  "\n",
);

console.log(
  `The today's date is ${currDate.getDate()} and the current time is ${currDate.toLocaleTimeString()}\n`,
);
