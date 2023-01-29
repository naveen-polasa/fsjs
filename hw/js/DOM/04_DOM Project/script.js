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
