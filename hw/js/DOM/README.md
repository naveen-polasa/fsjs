## Solutions

### DOM 01-02-03 Projects Solutions
<br>

```js
/******  1st solution  ******/

const nav = document.querySelector("header nav ul");
const hireMe = document.createElement("li");
hireMe.innerHTML = "<a>Hire Me</a>";
nav.appendChild(hireMe);


/******  2nd solution  ******/

const search = document.querySelector(".search-field input");
search.placeholder = "Search My Project";


/******  3rd solution  ******/

const newRole = document.querySelectorAll(".hero-left-section p span");
newRole[1].innerText = "an Employee";
newRole[2].innerText = "INeuron Intelligence Pvt Ltd";


/******  4th solution  ******/

const img = document.querySelector(".hero-right-section img");
img.src ="https://media.licdn.com/dms/image/C4D03AQGl-adCfRTfFA/profile-displayphoto-shrink_400_400/0/1655552914877?e=1680739200&v=beta&t=jA1cHUwSbTpXj7WQmP6g77hXt6mzYv4p5e1X7U4BDlM";


/******  5th solution  ******/

const btnDiv = document.querySelector(".hero-right-section-btns");
const newBtn = document.createElement('button')
newBtn.innerText = 'Support Me'
btnDiv.appendChild(newBtn)
```

### DOM 04 Project Solutions
<br>

```js
const archer = document.querySelector(".clash-card__level--archer");
const goblin = document.querySelector(".clash-card__level--goblin");

const stats = [...document.querySelectorAll(".clearfix")];
const oneThird = [...document.querySelectorAll(".one-third")];

archer.nextElementSibling.innerText = "The Archer";
goblin.nextElementSibling.innerText = "The Goblin";

oneThird.forEach((stat) => (stat.style.color = `#fff`));

stats[0].style.backgroundColor = `#ec9b3b`;
stats[1].style.backgroundColor = `#ee5487`;
stats[2].style.backgroundColor = `#f6901a`;
stats[3].style.backgroundColor = `#82bb30`;
stats[4].style.backgroundColor = `#4facff`;
```

### DOM 05 Project Solutions
<br>

```js
/*** navbar ***/ 

const navContainer = document.querySelector(".nav-center");
const newA = document.createElement("a");
newA.href = "index.html"
newA.innerText = `Pro Subscription`;
newA.classList.add("btn");
navContainer.lastElementChild.appendChild(newA);

/*** navbar end ***/ 


/*** recipes ***/ 

const tagsContainer = document.querySelector(".tags-container");
const newA2 = document.createElement("a");
newA2.href = '#'
newA2.innerText = `Chinese (7)`;
console.log(newA2)
tagsContainer.lastElementChild.append(newA2);

/*** recipes end ***/ 


/*** new card ***/ 

const recipeGallery = document.querySelector(".recipe-gallery");

const newDiv = document.createElement("div");
newDiv.className = "card";

const newA3 = document.createElement("a");
newA3.href = '#'
newA3.className = "recipe-text";

const newImg = document.createElement("img");
newImg.src = "./img/recipe-4.jpeg";
newImg.className = "recipe-img";

const newH5 = document.createElement("h5");
newH5.className = "recipe-name";
newH5.innerText = "new tasty cake";

const newP = document.createElement("p");
newP.className = "recipe-disp";
newP.innerText = "Prep : 14min | Cook : 23min";

newA3.append(newImg, newH5, newP);
newDiv.append(newA3);
recipeGallery.appendChild(newDiv);

/*** new card end ***/ 


/*** footer name ***/

const footerA = document.querySelector(".page-footer p a");
footerA.innerText = 'Naveen Polasa'
```

### DOM 06 Project Solutions
<br>

```js
const img = document.querySelector('header img')
const price = document.querySelector(".app_price span");
const social = document.querySelector(".footer_social");

img.src = "./assets/ineuron-logo.png";
price.innerText = '$10'

const newDiv = document.createElement('div')
newDiv.className = "footer_social_ico";
const i = document.createElement('i')
i.className = 'fa-brands fa-linkedin'
newDiv.append(i)
social.append(newDiv)
```

### DOM 07 Project Solutions
<br>

```js
const languageDiv = document.querySelector(".main__languages");
const languages = [...document.querySelectorAll(".main__languages a")];
const input = document.querySelector(".main__form-input");

const form = document.querySelector(".main__form form");

languages.forEach((lang) => {
    if (lang.innerText.includes("2.0")) {
    languageDiv.removeChild(lang);
    }
});


[...form].forEach((el) => {
    el.removeAttribute("disabled");
});


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(input.value == "") return
    
    languages.forEach(lang=> {
        languageDiv.append(lang)
    })
});
```

### DOM 08 Project Solutions
<br>

```js
/****** 1st solution ******/ 

const aside = document.querySelector(".new");
aside.style.overflow = "scroll";

const hr = document.createElement("hr");
hr.className = "hr-line";
const h2 = document.createElement("h2");
h2.className = "new-head";
h2.innerText = "This is the Custom Heading";
const p = document.createElement("p");
p.className = "new-p";
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, distinctio.';

aside.append(hr,h2,p)


/****** 2nd solution ******/ 

const body = document.querySelector('body')
body.style.background = 'none'


/****** 3rd solution ******/ 

const menu = document.getElementById("navbarTogglerDemo01");

const toggleBtn = document.querySelector(".navbar-toggler");


function handleClick() {
    menu.classList.toggle('collapse')
}

toggleBtn.addEventListener('click', handleClick)
```

### DOM 09 Project Solutions
<br>

```js
/****** 1st solution ******/

const title = document.querySelector(".caption .title");
title.style.color = "#DC143C";
title.style.fontFamily = 'sans'


/****** 2nd solution ******/

const btn = document.querySelector(".add-to-cart");

btn.addEventListener('mouseover',() => {
    btn.style.backgroundColor = "#DC143C";
})

btn.addEventListener('mouseout',() => {
    btn.style.backgroundColor = "";
})
```