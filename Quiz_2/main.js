let btn = document.querySelectorAll(".centerBtn .Next");
let btnBack = document.querySelectorAll(".centerBtn .Back");
let time = document.querySelector(".time");
let finish = document.querySelector(".Finish-btn");


let minute = 0;
let second = 5;
let Yes = [];
let No = [];

function decrement() {
    if (second === 0 && minute >= 0) {
        second = 60;
        --minute;
    }
    second--;
    time.textContent = `${minute} / ${second}`;
}
const incrementTimer = setInterval(decrement, 1000);
setInterval(() => {
    if (minute === 0) {
        clearInterval(incrementTimer);
    }
    decrement();
}, 4000);

let Q1 = document.querySelectorAll(".Q1 .d-grid button");
let Q2 = document.querySelectorAll(".Q2 .d-grid button");
let Q3 = document.querySelectorAll(".Q3 .d-grid button");
let Q4 = document.querySelectorAll(".Q4 .d-grid button");
let Q5 = document.querySelectorAll(".Q5 .d-grid button");
let Q6 = document.querySelectorAll(".Q6 .d-grid button");
let Q7 = document.querySelectorAll(".Q7 .d-grid button");
let Q8 = document.querySelectorAll(".Q8 .d-grid button");
let Q9 = document.querySelectorAll(".Q9 .d-grid button");
let Q10 = document.querySelectorAll(".Q10 .d-grid button");

 
  

Q1.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "a") {
            Yes.push("Q1");
            console.log(Yes);
            hidden.style.display = "none";
            show.style.display = "block";

        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q1");
            console.log(No);


        }
    }
})
Q2.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "b") {
            Yes.push("Q2");

            hidden.style.display = "none";
            show.style.display = "block";

        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q2");

        }
    }
})
Q3.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "c") {
            Yes.push("Q3");

            hidden.style.display = "none";
            show.style.display = "block";

        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q3");

        }
    }
})
Q4.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "b") {
            Yes.push("Q4");

            hidden.style.display = "none";
            show.style.display = "block";
            // console.log(mark);
        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q4");

        }
    }
})
Q5.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "b") {
            Yes.push("Q5");

            hidden.style.display = "none";
            show.style.display = "block";
            // console.log(mark);
        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q5");

        }
    }
})
Q6.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "a") {
            Yes.push("Q6");

            hidden.style.display = "none";
            show.style.display = "block";
            // console.log(mark);
        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q6");

        }
    }
})
Q7.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "C") {
            Yes.push("Q7");

            hidden.style.display = "none";
            show.style.display = "block";
            // console.log(mark);
        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q7");

        }
    }
})
Q8.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "d") {
            Yes.push("Q8");

            hidden.style.display = "none";
            show.style.display = "block";
            // console.log(mark);
        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q8");

        }
    }
})
Q9.forEach(ele => {
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;

        if (e.target.value === "a") {
            Yes.push("Q9");

            hidden.style.display = "none";
            show.style.display = "block";
            // console.log(mark);
        } else {
            hidden.style.display = "none";
            show.style.display = "block";
            No.push("Q9");

        }
    }
})
Q10.forEach(ele => {
    ele.onclick = function (e) {

        if (e.target.value === "b") {
            if (!Yes.includes("Q10")) {
                Yes.push("Q10");
            }
        } else {
            if (!Yes.includes("Q10")) {
                No.push("Q10");
            }
        }
    }
})

btn.forEach(ele => {
    //console.log(ele);
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.nextElementSibling;
        // console.log(hidden);
        // console.log(show);
        hidden.style.display = "none";
        show.style.display = "block";

    }

})

btnBack.forEach(ele => {
    // console.log(ele);
    ele.onclick = function (e) {
        let hidden = e.target.parentNode.parentNode;
        let show = e.target.parentNode.parentNode.previousElementSibling;
        // console.log(hidden);
        // console.log(show);
        show.style.display = "block";
        hidden.style.display = "none";
    }
})

finish.onclick = function (e) {
    let blTime = document.querySelector(".bl-time");
    let hidden = e.target.parentNode.parentNode;
    let show = e.target.parentNode.parentNode.nextElementSibling;
    hidden.style.display = "none";
    show.style.display = "block";
    blTime.remove();
    let markFinal = document.querySelector(".finish p span");
    markFinal.textContent = Yes.length;

    let correct = document.querySelector(".correct");
    let incorrect = document.querySelector(".incorrect");

    console.log(Yes);
    console.log(No);
}

let ReExamination = document.querySelector(".Re-examination");
ReExamination.onclick = function () {
    window.location.reload();
}




