/******  1st Assignment ******/
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


