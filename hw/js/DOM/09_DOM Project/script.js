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