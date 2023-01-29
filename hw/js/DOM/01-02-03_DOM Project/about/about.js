/******  2nd assignment  ******/
/******  2nd solution  ******/

const wrapperDiv = document.querySelector(".accordian-wrapper");
const newDiv = document.createElement("div");
newDiv.classList.add("accordian");
const newH3 = document.createElement("h3");
newH3.innerText = "Skills";
const newP = document.createElement("p");
newP.innerText =
  "I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the github";

newDiv.appendChild(newH3);
newDiv.appendChild(newP);
wrapperDiv.appendChild(newDiv);



/************************/

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

/************************/


/******  1st solution  ******/

accordian.forEach((elem) => {
  elem.style.backgroundColor = "#DADAF8";
});
