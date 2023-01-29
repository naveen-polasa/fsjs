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