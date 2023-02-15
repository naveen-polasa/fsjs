// function addValues(num1, num2){
//     console.log(num1+num2);
// }

// const res = function (num1,num2){
//     console.log(num1+num2);
// }
// res(12,231)
// console.log();

// const person = {
//   name: "naveen",
//   lastname: "polasa",
//   age: 23,
//   education: true,
//   married: true,
//   siblings: ["naveen", "naveen1"],
//   greeting () {
//     console.log("hello i am naveen");
//   },
// };

// console.log(person.siblings[1]);
// person.greeting()

// function arr(arr) {
//     sum = 0;
//     for(let i = 0; i<arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum;
// }

// console.log(arr([23, 232, 52, 12, 5]));

// const num1 = 92
// let num2 = num1
// num2 = 293
// console.log(num1, num2)

// const obj = {name:'naveen'}
// let obj1 = {...obj }
// obj1.name = 'slgja'
// console.log(obj, obj1)

// const name1 = 'nave'

// function change(){
//     const name1 = 'naveen'
//     console.log(name1)
//     global = 'ramesh'
//     console.log(global)
// }

// // change()
// global = 'ramesh'
// console.log(global)

// console.log(name1)

// function a(c) {
//   c();
//   console.log("inside a");
// }
// function b() {
//   console.log("inside b");
// }
// a(b)
// console.log("end");

// function ho(cb) {
// return cb() +1
// }

// function a(){
//     return 23;
// }

// console.log(ho(a))

// const arr = [2,32,4,1,4,1]
// console.log(arr.join(' '))
// // // arr.forEach((item) =>    console.log(item))

// const str = '2,32,52,313'
// console.log(str.split(","));

// for(let i of arr){
//     console.log(typeof i)
// }

// for(let i in arr){
//     console.log(typeof i)
// }

// const object = { a: 1, b: 2, c: 3 };

// for(const p in object) {
//     console.log(p);
//     console.log(object[p]);
// }

// const arr = {
//   jaf: 'sdjfal',
//   afjaj: 'lkjfa',
// };

// const arr = [12,32,4,2,6,75,6,23]
// const total = arr.reduce(function(acc,curr){
//     // console.log(acc, curr);
//     return acc+curr
// },0)

// console.log(total)

// const date = new Date();
// console.log(date.getFullYear())

// console.log(document);

// const language = document.getElementById('lang')
// document.body.style.backgroundColor = 'red'
// language.style.fontSize = '4rem'
// console.log(language);

// console.log(lang.className)

// lang.className = 'color'
// lang.className = 'size color'

// lang.classList.toggle('size')

// const lang = document.querySelector('.lang')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', function (){
//     lang.classList.toggle('size')
//     lang.classList.toggle('color')
// })

// const res = document.querySelector('div')

// const add_h1 = document.createElement('h2')

// const text_h1 = document.createTextNode('Python')

// add_h1.appendChild(text_h1)

// document.body.appendChild(add_h1)

// const res = document.querySelector('.lang')
// res.addEventListener('mouseenter', function(){
//     console.log('on tag')
// })
// // res.addEventListener('mouseover', function(){
// //     console.log('over')
// // })

// res.addEventListener('mouseleave', function(){
//     console.log('leave')
// })

// const btn = document.querySelector('#btn')

// btn.addEventListener('mouseup', function(){
//     console.log('up')
// })

// btn.addEventListener('mousedown', function(){
//     console.log('down')
// })

// btn.addEventListener('click', function(){
//     console.log('btn clicked')
// })

// document.addEventListener('keydown',function(e){
//     console.log(e.key)
// })
// document.addEventListener('keypress',function(e){
//     console.log(e.key)
// })

// const input = document.querySelector('input[type="text"]')
// const res = document.createElement('h2')

// document.body.appendChild(res)

// input.addEventListener('keypress',function(e){
//     console.log(parseInt(input.value))
// if (parseInt(input.value)) {
//     res.innerText = parseInt(input.value);
// }
// else{
//     res.innerText = 0
// }
// })

// const h3 = document.querySelector('.lang')
// const btn = document.querySelector('#btn')

// function func(e){
//     console.log(e.currentTarget)
//     console.log(this)
// }

// h3.addEventListener('click', func)

// const container = document.querySelector('.container')
// const h3 = document.querySelector(".lang");
// const btn = document.querySelector("#btn");
// const newh3 = document.querySelector('.heading')

// btn.addEventListener('click', ()=>{
//     const new_heading = document.createElement('h3')
//     new_heading.classList.add('heading')
//     new_heading.textContent = `dynamincally added heading`
//     container.appendChild(new_heading)
// })

// newh3.addEventListener('click', ()=>{
//     console.log('dynamic heading')
// })

// container.addEventListener('click', function(e){
//     if(e.target.classList.contains('heading')) {
//         console.log("new ")
//     }
//     else{
//         console.log(`doesn't contain`)
//     }
// })

// localStorage.setItem('name','naveen')
// localStorage.setItem('name1','naveen1')
// localStorage.setItem('name2','naveen2')
// sessionStorage.setItem('name','naveen')

// const val = localStorage.getItem('name1')
// console.log(val)

// localStorage.clear()
// sessionStorage.clear()

// const arr = [
//   { name: "naveen", age: 23 },
//   { name: "naveen1", age: 25 },
//   { name: "naveen2", age: 24 },
// ];
// const container = document.querySelector(".container");

// const names = arr.map((item) => { return `<h1>${item.name}</h1>` });
// console.log(names.join(' '))
// container.innerHTML = names.join('')

// console.log(get())

// const arr = [
//   { language: "html" },
//   { language: "html" },
//   { language: "css" },
//   { language: "css" },
//   { language: "css" },
//   { language: "tailwind css" },
//   { language: "javascript" },
//   { language: "javascript" },
//   { language: "react" },
//   { language: "python" },
//   { language: "python" },
// ];

// const languages = ["all", ...new Set(arr.map((lang) => lang.language))];

// const container = document.querySelector(".container");

// container.innerHTML = languages.map((lang) => `<button class=${lang}>${lang}</button>`).join(' ');

// const html = document.querySelector('.html')

// html.style.backgroundColor = 'red'

// const arr = {
//   name: "naveen",
// };

// console.log(arr["name"]);

// const items = {
//   "featured-items": ["item1", "item2"],
// };

// console.log(items["featured-items"]);

// let state = 'loading'

// const app = {
//   [state]: true
// }

// console.log(app[state])

// const state = {
//   loading:true,
//   name:'',
//   job:''
// }

// function updateState(key, value) {
//   state[key] = value
// }

// updateState('name', 'naveen')
// updateState('job', 'dev')
// updateState('experience','fresher')

// console.log(state)

// const people = [12,42,52,14,67,23,74,8]

// const person = people.filter(item => item > 21)
// console.log(person)

// const res = people.find(item => item >= 50)
// console.log(res)

// reduce

// const staff = [
// {name: 'bob', age: 20, position: 'developer', salary: 100},
// {name: 'peter', age: 25, position : 'designer', salary: 300},
// {name: 'susy ', age: 30, position : 'the boss', salary: 400} ,
// {name: 'anna', age: 35, position: 'intern', salary: 10} ]

// const total = staff.reduce((acc, curr) => {
//   return acc + curr.salary
// },0)
// console.log(total)

// const cart = [
//   { title: "item1", price: 299, amount: 1 },
//   { title: "item2", price: 399, amount: 2 },
//   { title: "item3", price: 499, amount: 3 },
//   { title: "item4", price: 699, amount: 4 },
// ];

// const total = cart.reduce(
//   (acc, item) => {
//     const {price, amount} = item
//     console.log(price, amount)
//     acc.totalItems += amount
//     acc.cartTotal += amount * price
//     console.log(acc.totalItems, acc.cartTotal)
//     return acc;
//   },
//   { totalItems: 0, cartTotal: 0 }
// );

// console.log(total);

// https://api.github.com/users/john-smilga/repos?per_page=100

// const url = "https://api.github.com/users/naveen-polasa/repos";

// const fetchRepos = async () => {
//   const response = await fetch(url);
//   const data = await response.json();

//   const langs = data.reduce((total, repo) => {
//     const { language } = repo;
//     if (language) {
//       total[language] = total[language] + 1 || 1;
//     }

//     return total;
//   }, {});
//   console.log(langs);
// };

// fetchRepos();

//   if(total[language]) {
//     total[language] = total[language] + 1
//   }
//   else{
//     total[language] = 1
//   }
// }

// const fruits = ['orange','banana','lemon']

// const [first,,th] = fruits
// console.log(first,th)

// const re = {
//   first:'naveen',
//   last:'polasa',
//   city: 'hyderabad',
//   siblings:{
//     sister:'navya'
//   }
// }

// const {first,last, city:village ,siblings:{sister:name1}} = re

// console.log(first,last,village,name1);

// const fruits = ["orange", "banana", "lemon"];
// const [first, ...rest] = fruits

// console.log(first, rest)

// const first = document.querySelector('.first')
// const second = document.querySelector('.second')
// const third = document.querySelector('.third')

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     first.style.color = 'red'
//     setTimeout(() => {
//       second.style.color = 'blue'
//       setTimeout(() => {
//         third.style.color = 'green'
//       }, 3000);
//     }, 2000);
//   }, 1000);
// })

// const promise = new Promise((resolve, reject) => {
//   resolve('done')
//   // reject('not done')
// })

// console.log(promise)

// promise.then((data) => console.log(data)).catch((err) => console.log(err))

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   addColor(1000, ".first", "red")
//     .then(() =>
//       addColor(3000, ".second", "blue")
//         .then(() => addColor(4000, ".third", "green").then(() => console.log('success')).catch(err => console.log(err)))
//         .catch()
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// });

// function addColor(time, selector, color) {
//   const element = document.querySelector(selector);
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(`there is no such element : ${selector}`);
//     }
//   });
// }

// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet();

// class Animal{
//   sleep(){
//     console.log('slept')
//   }
// }

// const dog = new Animal()
// const dog1 = new Animal()
// dog.sleep()
// dog1.sleep()

// class User{
//   constructor(){

//   }
// }

// let user = new User()
// console.log(user)

// const promise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(promise);

// promise
//   .then(res => res.json()
//   .then(data => console.log(data)))
//   .catch(err => console.log(`you got an error ${err}`));

// console.log("started request");

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "#bada55";
// ctx.lineJoin = "round";
// ctx.lineCap = "round";

// let isDrawing = false
// let lastX = 0
// let lastY = 0

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// console.log(new Date())
// console.log(Date.now())

// const person = {
//   name: { first: "name", second: "name1" },
//   age: 23,
//   bio() {
//     console.log(this);
//   },
//   intro() {
//     console.log(this.name[1]);
//   },
// };

// console.log(person.name.first)
// console.log(person['name'])

// person.age = 45;
// person["name"]["last"] = "Cratchit";
// person

// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// const c1 = createPerson("naveen");
// const c2 = createPerson("naveen2");

// c1.introduceSelf();
// c2.introduceSelf();

// function Person(name) {
//   this.name = name;
//   this.introduceSelf1 = function () {
//     console.log(this.name);
//   };
// }

// class Persons {
//   constructor(name) {
//     this.name = name;
//     this.introduceSelf2 = function() {
//       console.log(this.name)
//     }
//   }
// }

// const ns = new Person('naveen')
// ns.introduceSelf1()

// const obj = {
//   city: "warangal",
//   greet() {
//     console.log(`greeting from ${this.city}`);
//   },
// };

// console.log(Object.getPrototypeOf(obj));

// const personPrototype = {
//   greet() {
//     console.log("first");
//   },
// };

// const carl = Object.create(personPrototype);
// carl.greet();
// carl

// console.log(Object.getPrototypeOf(obj));
// console.log(obj)

// const object = {
//     rocket: '🚀',
//     home: '🏡'
// }
// console.log(object)

// string, number, bigint, boolean, null, undefine, symbol

// const obj1 = {
//     rocket: '🚀',
//     fuel: 2,
//     config: {
//         name: 'mars'
//     }
// }

// obj1.fuel = 200
// obj1['year'] = 2000

// // part 2

// const obj2 = new Object() //constructor
// obj2.redbook = '📕'
// // obj2.1bluebook = '📘'
// obj2.myValue = '1 blue book'

// // console.log(obj2);

// // part 3
// const powers = {
//     fly: true,
//     cordinate: Math.random() + 2
// }

// const obj3 = Object.create(powers)
// // console.log(obj3);
// // console.log(obj3.cordinate);
// // console.log(Object.getPrototypeOf(obj3));

// //part 4

// const obj4 = Object.create({})
// Object.defineProperty(obj4, 'book', {
//     // icon: '📘',
//     get: () => '📘',
//     enumerable: true
// })

// // console.log(obj4);
// // console.log(obj4.book);
// // console.log(Object.getPrototypeOf(obj4));

// for(k in obj4){
//     //console.log("value is: ", k);
// }

// //part 5
// const obj5 = {
//     comics : 'marvel',
//     pen: '',
//     printComic: function(){
//         this.pen += '🖊️🗒️'
//         console.log(this);
//         return this;
//     },
//     printaComic: () => {
//       console.log("first")
//         this.pen += '🖊️🗒️'
//         console.log(this);
//     },

// }

// console.log(obj5.printComic().printComic().printComic());
// // obj5.printaComic()

// const obj = {
//   name:'nave',
//   nameq:'naqvqe',
// }
// const obj1 = {
//   name:'nave',
//   name2: 'name1',
// }

// Object.assign(obj, obj1)
// console.log(obj)

// const person = {};
// // console.dir(obj)

// const person =  {
//   name:this.name,
//   age: this.age
// }
// let me = {}
// Object.create(me,person)

// function get() {
//   console.log("get")
// }

// Shape - superclass
// class Shape {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//   }
//   // superclass method
//   move(x, y) {
//     this.x += x;
//     this.y += y;
//     console.info("Shape moved.");
//   }
// }
// class Sshape {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//     // superclass method
//   }
//   static move(x, y) {
//     this.x += x;
//     this.y += y;
//     console.info("Shape moved.");
//   }
// }

// Rectangle - subclass
// function Rectangle() {
//   Shape.call(this); // call super constructor.
// }

// // subclass extends superclass
// Rectangle.prototype = Object.create(Shape.prototype, {
//   // If you don't set Rectangle.prototype.constructor to Rectangle,
//   // it will take the prototype.constructor of Shape (parent).
//   // To avoid that, we set the prototype.constructor to Rectangle (child).
//   constructor: {
//     value: Rectangle,
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
// });

// const rect = new Rectangle();

// console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
// console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
// rect.move(1, 1); // Logs 'Shape moved.'

// class Person {
//   name;
//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

// function Person() {
//   this.name = name
// }
// Person.prototype.introduceSelf1 = function() {
//   console.log(`Hi! I'm ${this.name}`);
// }

// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// function Person(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }
// const object1 = {};

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {},
// });

// const obj = {
//   name:'naveen',
//   age: 23
// }

// for (const [key, value] of Object.entries(obj)) {
// console.log(key, value)
// }

// let obj = {
//   name: 'naveen',
//   age: 23
// }
// Object.freeze(obj)
// obj.name = 'naveen1'
// obj.age = 'naveen1'
// console.log(obj)

// var isAnagram = function (s, t) {
//   const ss = {};
//   const tt = {};
//   for (let i = 0; i < s.length; i++) {
//     if (ss[s[i]]) {
//       ss[s[i]]++;
//     } else {
//       ss[s[i]] = 1;
//     }
//   }
//   for (let j = 0; j < s.length; j++) {
//     if (tt[t[j]]) {
//       tt[t[j]]++;
//     } else {
//       tt[t[j]] = 1;
//     }
//   }
//   console.log(ss, tt)
// };

// var replaceElements = function (arr) {
//   let curr_max = arr[arr.length - 1];
//   arr[arr.length - 1] = -1;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     curr_max = Math.max(curr_max, arr[i]);
//     let temp = i-1
//     arr[temp] = curr_max;
//   }
//   return arr;
// };
// const arr = [17, 18, 5, 4, 6, 1];
// console.log(replaceElements(arr));

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result.join(''))

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result)

// async function async() {
//   const url = await fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     const data = await url.json()
//     console.log(data)
//   }

//   async()

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// alarm('naveen',1000).then(msg=> console.log(msg))

// async function alarmy() {
//   const alarmi = await alarm('naveen', 1000 );
//   console.log(alarmi)
// }

// alarmy()

// const obj = {
//   name:'naveen',
//   age: 23
// }

// console.log(obj)

// const prototype1 = {};
// const object1 = Object.create(prototype1);

// console.log(Object.getPrototypeOf(object1) === prototype1);

// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "deepika", lastName: "padukone", age: 26 },
// ];

// const output = users.reduce((ac, cur) => {
//     if(cur.age < 30) {
//         ac.push(cur.firstName)
//     }
//     return ac
// },[])
// console.log(output)

// const api = "https://api.github.com/users/naveen-polasa/";

// const user = fetch(api)
// console.log(user)

// const cart = ["shirts", "mobile", "laptop"];

// const promise = createOrder(cart);

// promise
//   .then((orderId) => {
//     return orderId;
//   })
//   .then((id) => {
//     return proceedToPayment(id);
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// function createOrder(cart) {
//   const pr = new Promise((res, rej) => {
//     if (!validateCart(cart)) {
//       const err = new Error("cart not valid");
//       rej(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       res(orderId);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(id) {
//   return new Promise((res, rej) => {
//     res("success");
//   });
// }

// function validateCart(cart) {
//   return true;
// }

// const prom = new Promise((res, rej) => {
//   if (23 < 9) res(true);
//   else rej(false);
// });
// console.log(prom)
// prom.then((res) => console.log(res)).catch((er) => console.log(er));

// const ex = async () => {
//   return "done";
// };

// const ex1 = async () => {
//   const ans = await ex();
//   console.log(ans);
// };

// ex1()

// log('start');

// counter(1000)

// function counter(time) {
//     log('inside counter');
//     setTimeout(() => {
//         log('inside timeout');
//     }, time);
// }

// log('end');

// log = console.log;

// const prom = new Promise((res, rej) => {
//   if (13 > 1) {
//     res('success');
//     return;
//   }
//   rej('failure');
// });

// prom.then((s) => log(s));

// const container = document.querySelector(".img-container");

// btn.addEventListener("click", () => {
//   const url = "https://source.unsplash.com/random";
//   loadImage(url)
//     .then((data) => container.appendChild(data))
//     .catch((err) => console.log(err));
// });

// function loadImage(url) {
//   return new Promise((res, rej) => {
//     let img = new Image();
//     img.addEventListener("load", () => {
//       res(img);
//     });
//     img.addEventListener("error", () => {
//       rej(new Error("Image Loading Failed"));
//     });
//     img.src = url;
//   });
// }

// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", async () => {
//   try {
//     await addColor(first, "red", 3000);
//     await addColor(second, "blue", 2000);
//     await addColor(third, "green", 1000);
//   } catch (error) {
//     console.log(error);
//   }
// });

// const addColor = (selector, color, time) => {
//   return new Promise((res, rej) => {
//     if (selector) {
//       setTimeout(() => {
//         selector.style.color = color;
//         res("success");
//         return;
//       }, time);
//     } else {
//       rej("failure");
//     }
//   });
// };

// const btn = document.querySelector(".btn");
// const url = './api/people.json'
// btn.addEventListener("click", () => {
//   getData()
// });

// function getData() {
//   let http = new XMLHttpRequest(url);

//   http.open("GET", url);

//   http.onreadystatechange = function () {
//     if (http.readyState === 4 && http.status === 200) {
//       const data = JSON.parse(http.responseText)
//       const displayData = data.map(item=> {
//         return `<p>${item.name}</p>`
//       }).join('')
//       const el = document.createElement('div')
//       el.innerHTML = displayData
//       document.body.appendChild(el)
//     } else {
//       console.log({
//         status: http.status,
//         text: http.statusText,
//       });
//     }
//   };
//   http.send();
// }

// const btn = document.querySelector(".btn");

// const url = "./api/people.json";

// btn.addEventListener("click", async () => {
//   const resp = await fetch(url)
//   const data = await resp.json()
//   displayItems(data)
//   // fetch(url)
//   //   .then((resp) => resp.json())
//   //   .then((data) => {
//   //     displayItems(data);
//   //   })
//   //   .catch((err) => console.log(err));
// });

// const displayItems = (items) => {
//   const displayData = items.map((item) => {
//     const {name} = item
//     return `<p>${name}</p>`
//   }).join('');
//   const el = document.createElement('div')
//   el.innerHTML = displayData
//   document.body.appendChild(el)
// };
