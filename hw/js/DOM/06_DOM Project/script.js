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