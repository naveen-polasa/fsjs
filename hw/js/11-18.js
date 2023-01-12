/********  question 11 ********/

const date = new Date();

const currYear = date.getFullYear();
const currMonth = date.getMonth();
const currDate = date;
const currDay = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getTime();

console.log(currYear, currMonth, currDate);
console.log(hours, minutes, seconds);

/********  question 12 ********/

const date1 = new Date();
const format1 = date1.toLocaleDateString("en-ca", {
  hour: "2-digit",
  hour12: false,
  minute: "2-digit",
});

const format2 = date1.toLocaleString("en-ca", {
  hour12: false,
});

const format3 = date1.toLocaleString({
  hour: "2-digit",
  hour12: false,
  minute: "2-digit",
});

console.log(format1);
console.log(format2);
console.log(format3);

/********  question 13 ********/

const input = JSON.parse(prompt('enter your age:'))

if(input >= 18) {
    console.log('You are old enough to drive')
}
else if(input < 0) {
    console.log('enter correct age:')
}
else{
    console.log(`please wait ${18-input} years`)
}

/********  question 14 ********/

const input1 = JSON.parse(prompt("enter the number:"));

if(input1 % 2 === 0) {
    console.log('Number is Even')
} else {
    console.log('Number is Odd')
}

/********  question 15 ********/

const marks = JSON.parse(prompt("enter the number:"));

if (marks >= 80 && marks <= 100) {
  console.log(`Your Grade is A`);
} else if (marks >= 70 && marks < 80) {
  console.log(`Your Grade is B`);
} else if (marks > 60 && marks < 70) {
  console.log(`Your Grade is C`);
} else if (marks > 50 && marks < 60) {
  console.log(`Your Grade is D`);
} else {
    console.log(`Your Grade is F`);
}

/********  question 16 ********/

const month = new Date().getMonth();

switch (month) {
  case 11:
  case 0:
  case 1:
    console.log("season is Winter");
    break;
  case 2:
  case 3:
  case 4:
    console.log("season is Sprint");
    break;
  case 5:
  case 6:
  case 7:
    console.log("season is Summer");
    break;
  case 8:
  case 9:
  case 10:
    console.log("season is Autumn");
    break;
  default:
    console.log("enter correct month");
    break;
}

/********  question 17 & 18  ********/

// passing the day as zero results as the last date of the month so calling getDate() will return the number of the days in that month this function works fine for the leap year also

const getDays = (year,month) => {
    console.log(`${new Date(year, month, 0).getDate()} Days`)
}

getDays(2022,1)
getDays(2020,2)