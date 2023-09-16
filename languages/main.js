 import lang from "./translation.js";
 
let slectorLang = document.querySelector("select");

slectorLang.addEventListener("change", function(e) {
    translate(e.target.value);
    localStorage.setItem("lang", e.target.value);
})

document.addEventListener("DOMContentLoaded", ()=> {
    translate(localStorage.getItem("lang"));
});

function translate(ele) {

    let dataLang = document.querySelectorAll("[data-lang]");

    dataLang.forEach(element => {
        element.textContent = lang[ele][element.getAttribute("data-lang")];


    });
    
    document.dir = ele === "ar" ? "rtl" : "ltr";
}

let place = document.querySelectorAll("input");
place.forEach(ele => {
     console.log(ele.getAttribute("placeholder"));
     
})
