/******  3rd assignment  ******/
const inputName = document.querySelector(".userName");
const inputMail = document.querySelector(".userEmail");
const inputMessage = document.querySelector(".userMessage");

const outputName = document.querySelector(".enterName");
const outputMail = document.querySelector(".enterMail");
const outputMessage = document.querySelector(".enterMessage");

const input = document.querySelector(".mainRight form");

input.addEventListener("submit", (e) => {
  e.preventDefault();
  outputName.value = inputName.value;
  outputMail.value = inputMail.value;
  outputMessage.value = inputMessage.value;
});
