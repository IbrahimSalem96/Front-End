/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab


//Set
window.localStorage.setItem("color", "red");
window.localStorage.fontSize = "30px";
window.localStorage["fontWeight"] = "bold"


//get 
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.fontSize);
console.log(window.localStorage["fontWeight"]);


// Remove One
//window.localStorage.removeItem("color");
//window.localStorage.removeItem.fontSize;

// Remove All
// window.localStorage.clear();


// Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);
*/


/*
  BOM [Browser Object Model]
  Local Storage Practice
*/
//window.localStorage.clear();

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");



if(window.localStorage.getItem("color")){

    exp.style.backgroundColor = window.localStorage.getItem("color");

    lis.forEach((li) => {
        li.classList.remove("active");
      });

    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");

}

lis.forEach(ele => {
    ele.addEventListener("click", function(e) {
 
        lis.forEach((li) => {
            li.classList.remove("active");
        })

        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        exp.style.backgroundColor  = e.currentTarget.dataset.color;

    })
})

 