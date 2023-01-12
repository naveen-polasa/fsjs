/********  question 1 ********/

const str = "javascript is awesome";
console.log(str, `=> typeof ${typeof str}`);

const bool = true;
console.log(bool, `=> typeof ${typeof bool}`);

const undef = undefined;
console.log(undef, `=> typeof ${typeof undef}`);

const none = null;
console.log(none, `=> typeof ${typeof none}`);

// typeof of null datatype will show object which is false it was a bug which is not fixed because alot of code dependent on this fact

/********  question 2 ********/

const firstName = "Naveen";
const lastName = "Polasa";
const maritalStatus = "single";
const country = "India";
const age = 23;

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Marital Status: ${maritalStatus}`);
console.log(`Country: ${country}`);
console.log(`Age: ${age}`);

/********  question 3 ********/

const str1 = "javascript is awesome";
console.log(str1.toUpperCase());

/********  question 4 ********/

const str2 = "HTML CSS JavaScript";
console.log(str2.includes("Script"));

/********  question 5 ********/

const str3 = "JavaScript";
const arr = str3.split("");
console.log(arr);

/********  question 6 ********/

const str4 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const arr1 = str4.split(", ");
console.log(arr1);

/********  question 7 ********/

const arr2 = [
  "html",
  "css",
  "javascript",
  "pw skills",
  "react",
  "tailwind",
  "node",
  "pw skills",
  "graphql",
];
console.log(arr2.indexOf("pw skills"));
console.log(arr2.lastIndexOf("pw skills"));

/********  question 8 ********/

const str5 = "    javascript    ";
console.log(str5.trim());


/********  question 9 ********/

// truthy values
console.log(23 > 13);
console.log(typeof str5 === "string");
console.log(str5.length > 10);

// falsy values
console.log(23 < 13);
console.log(typeof str5 === "arrays");
console.log(str5.length > 20);

/********  question 10 ********/

console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4);
console.log(4 != 4, 4 !== 4, 4 != '4', 4 == 4, 4 === '4');

const py = 'python'
const jr = 'jargon'
console.log(py.length !== jr.length)