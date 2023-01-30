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