/********  question 19 ********/

import countries from "./js_modules/countries.js";
import webTechs from "./js_modules/web_techs.js";

console.log(countries);
console.log(webTechs);
console.log(countries.slice(4));
console.log(webTechs.slice(3));

/********  question 20 ********/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

const newShoppingCart = shoppingCart.filter((item) => item !== "Honey");
console.log(newShoppingCart);

const index = newShoppingCart.indexOf("Tea");
newShoppingCart[index] = "Green Tea";

console.log(newShoppingCart);

/********  question 21 ********/

const countries1 = [...countries];

if (countries1.includes("Ethiopia")) {
  console.log(countries1[countries1.indexOf("Ethiopia")].toUpperCase());
} else {
  countries1.push("Ethiopia");
}

console.log(countries1);

/********  question 22 ********/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a > b);
console.log(`Min Age ${ages[0]} and Max Age ${ages[ages.length - 1]}`);

const n = ages.length;

const medianArr = n % 2 === 0 ? [n / 2 - 1, n / 2] : [(n + 1) / 2 - 1];

let medianAge;
if (n % 2 === 0) {
  medianAge = (ages[medianArr[0]] + ages[medianArr[1]]) / 2;
} else {
  medianAge = ages[medianArr[0]];
}

console.log(medianAge);

/********  question 23 ********/

const input2 = JSON.parse(prompt("enter the number:"));
let bool = false

for (let i = 2; i < input2; i++) {
  if (input2 % i == 0) {
    bool = true
  } 
}

if(bool) {
  console.log("Number is not a Prime")
} else {
  console.log("Number is a Prime")
}

/********  question 24 ********/

const evenArr = [];
const oddArr = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenArr.push(i);
  } else {
    oddArr.push(i);
  }
}

console.log(evenArr);
console.log(oddArr);

/********  question 25 ********/

const weight = JSON.parse(prompt("enter your weight in KGs"));
const height = JSON.parse(prompt("enter your height CMs"))/100;

function getBMI(weight, height) {

  const BMI = (weight / (height * height)).toFixed(2);
  
  if(BMI < 18.5) {
      console.log(`Your BMI is ${BMI} you are Underwieght`)
  } else if (BMI >= 18.5 && BMI <=24.9) {
      console.log(`Your BMI is ${BMI} you have Normal wieght`)
  } else if (BMI >= 25 && BMI <=29.9) {
      console.log(`Your BMI is ${BMI} you have Overweight`)
  } else if (BMI >= 30) {
      console.log(`Your BMI is ${BMI} you are Obese`)
  }

}

getBMI(weight, height)