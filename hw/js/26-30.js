/********  question 26 ********/

const num = JSON.parse(prompt('Enter the number'))

for(let i = 1; i<=10; i++) {
    console.log(`${num} * ${i} = ${num*i}`)
}


/********  question 27 ********/

function checkPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const primeArr = [];

for (let i = 0; i <= 100; i++) {
  if (checkPrime(i)) {
    primeArr.push(i);
  }
}

console.log(primeArr);


/********  question 28 ********/

let p1 = "";
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      p1 += "*";
    }
    p1 += "\n";
  }
}
pattern1(3);
console.log(p1);

let p2 = "";
function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      p2 += "*";
    }
    p2 += "\n";
  }
}

pattern2(3);
console.log(p2);

let p3 = "";
function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      p3 += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      p3 += "*";
    }
    p3 += "\n";
  }
}

pattern3(3);
console.log(p3);


/********  question 29 ********/

const input = prompt('enter the file name')
const ans = input.split(".").pop();
console.log(ans);


/********  question 30 ********/

const num1 = JSON.parse(prompt('Enter the first Number'));
const num2 = JSON.parse(prompt('Enter the Second Number'));
let op = prompt(
  "Enter the operation:\n addition => + \n  substraction => - \n  mupltiplication => * \n  division => / \n"
);
function calculator(n1, n2) {
  if (op == "+") {
    return n1 + n2;
  } else if (op == "-") {
    return n1 - n2;
  } else if (op == "*") {
    return n1 * n2;
  } else if (op == "/") {
    return n1 / n2;
  }
}

const res = calculator(num1, num2);
console.log(res);
