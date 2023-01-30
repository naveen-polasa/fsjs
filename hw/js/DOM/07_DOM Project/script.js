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

