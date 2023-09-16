import { quizData } from "./question.js";

let qCount = document.querySelector(".count span");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let btnSubmit = document.querySelector(".submit-button");
let bullets = document.querySelector(".bullets .spans p");
let results = document.querySelector(".results");
results.style.display = "none";
let countdownElement = document.querySelector(".countdown");

// Set Options
let currentIndex = 0;
let countdownInterval;

let inQuestion = [];
let qIndex = 0;
let cuont = 10;
let arrCorrect = [];
let arrInCorrect = [];
let arrInCorrectindex = [];
let arrNoAnswer = [];


// get 10 question
for (let q = 0; q <= 9; ++q) {
    inQuestion.push(quizData[q]);
}

addQuestion(inQuestion[qIndex], cuont);

// function add Q 
function addQuestion(Q, cuont) {
    if (qIndex <= 9) {
        
        // Start CountDown
        qCount.textContent = cuont;
        bullets.textContent = `Question ${qIndex + 1} From 10`;
        let questionArea = document.createElement("h2");
        let questionText = document.createTextNode(Q.question);
        questionArea.appendChild(questionText);
        quizArea.appendChild(questionArea);

        for (let a = 1; a < 5; ++a) {

            let answer = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            let labelText = document.createTextNode(Q[`answer_${a}`]);

            answer.setAttribute("class", "answer");
            input.setAttribute("type", "radio");
            input.setAttribute("id", `answer_${a}`);
            input.setAttribute("data-an", `${Q[`correct`]}`);
            input.setAttribute("name", "questions");
            label.setAttribute("for", `answer_${a}`);

            label.appendChild(labelText);
            answer.appendChild(input);
            answer.appendChild(label);
            answersArea.appendChild(answer);

        }

        //Checked of answer click or no
        let noChecked = "";
        //insert class background and checked Attribute for click element
        let check = document.querySelectorAll(".answers-area .answer");
        check.forEach(ele => {
            ele.onclick = function () {
                let onEle = ele.querySelector("input");

                check.forEach(re => {
                    re.classList.remove("ans");
                    let chek = re.querySelector("input");
                    chek.removeAttribute("checked");
                });
                onEle.setAttribute("checked", "")
                ele.classList.add("ans");
                noChecked = "Yes";
            }
            noChecked = "No";
        })

        countdown(90, cuont);

        // send Answer and chekAnswer true or false
        btnSubmit.onclick = function () {
            clearInterval(countdownInterval);

            if (noChecked == "Yes") {
                let AllData = Q;
                let data = Q.correct;
                qIndex++;

                chekAnswer(data, AllData);

                quizArea.textContent = "";
                answersArea.textContent = "";

                addQuestion(inQuestion[qIndex], cuont);
                
            } else {
                let AllData = Q;

                qIndex++;

                chekAnswer("No", AllData);
                quizArea.textContent = "";
                answersArea.textContent = "";

                addQuestion(inQuestion[qIndex], cuont);
            }

        }
    } else {
        btnSubmit.style.display = "none";
        bullets.parentNode.parentNode.style.display = "none";
        results.style.display = "block"

        //get correct 
        let correct = document.querySelector(".results .correct");
        for (let i = 0; i < arrCorrect.length; ++i) {
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let hText = document.createTextNode(arrCorrect[i].question);

            div.setAttribute("class", "title")
            h2.appendChild(hText);
            div.appendChild(h2);

            correct.appendChild(div);

            for (let a = 1; a < 5; ++a) {

                let answer = document.createElement("div");
                let input = document.createElement("input");
                let label = document.createElement("label");
                let labelText = document.createTextNode(arrCorrect[i][`answer_${a}`]);

                answer.setAttribute("class", "answer");
                input.setAttribute("type", "radio");
                input.setAttribute("id", `answer_${a}`);
                input.setAttribute("data-an", `${arrCorrect[i][`correct`]}`);
                input.setAttribute("name", "questions");
                label.setAttribute("for", `answer_${a}`);

                label.appendChild(labelText);
                answer.appendChild(input);
                answer.appendChild(label);
                if (arrCorrect[i][`correct`] == `answer_${a}`) {
                    answer.style.backgroundColor = "green";
                    answer.style.color = "white";
                    answer.style.appearance = "none";
                }
                input.disabled = true
                correct.appendChild(answer);
            }
        }




        let inCorrect = document.querySelector(".results .in-correct");
        for (let i = 0; i < arrInCorrect.length; ++i) {
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let hText = document.createTextNode(arrInCorrect[i].question);

            div.setAttribute("class", "title")
            h2.appendChild(hText);
            div.appendChild(h2);

            inCorrect.appendChild(div);

            for (let a = 1; a < 5; ++a) {

                let answer = document.createElement("div");
                let input = document.createElement("input");
                let label = document.createElement("label");
                let labelText = document.createTextNode(arrInCorrect[i][`answer_${a}`]);

                answer.setAttribute("class", "answer");
                input.setAttribute("type", "radio");
                input.setAttribute("id", `answer_${a}`);
                input.setAttribute("data-an", `${arrInCorrect[i][`correct`]}`);
                input.setAttribute("name", "questions");
                label.setAttribute("for", `answer_${a}`);

                label.appendChild(labelText);
                answer.appendChild(input);
                answer.appendChild(label);
                if (arrInCorrect[i][`correct`] == `answer_${a}`) {
                    answer.style.backgroundColor = "green";
                    answer.style.color = "white";
                    answer.style.appearance = "none";
                }
                let j = 0;
                if (arrInCorrectindex[j] == `answer_${a}`) {
                    answer.style.backgroundColor = "red";
                }
                j++;

                input.disabled = true
                inCorrect.appendChild(answer);


            }
        }
        let noanswer = document.querySelector(".no-answer");
        for (let i = 0; i < arrNoAnswer.length; ++i) {

            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let hText = document.createTextNode(arrNoAnswer[i].question);

            div.setAttribute("class", "title")
            h2.appendChild(hText);
            div.appendChild(h2);

            noanswer.appendChild(div);

            for (let a = 1; a < 5; ++a) {

                let answer = document.createElement("div");
                let input = document.createElement("input");
                let label = document.createElement("label");
                let labelText = document.createTextNode(arrNoAnswer[i][`answer_${a}`]);

                answer.setAttribute("class", "answer");
                input.setAttribute("type", "radio");
                input.setAttribute("id", `answer_${a}`);
                input.setAttribute("data-an", `${arrNoAnswer[i][`correct`]}`);
                input.setAttribute("name", "questions");
                label.setAttribute("for", `answer_${a}`);

                label.appendChild(labelText);
                answer.appendChild(input);
                answer.appendChild(label);
                if (arrNoAnswer[i][`correct`] == `answer_${a}`) {
                    answer.style.backgroundColor = "green";
                    answer.style.color = "white";
                    answer.style.appearance = "none";
                }
                input.disabled = true
                noanswer.appendChild(answer);
            }
        }
        quizArea.innerHTML = `${arrCorrect.length} / ${cuont}`;
    }
}

function chekAnswer(data, Q) {

    let answer = document.getElementsByName("questions");
    let trueAnswer;

    if (data != "No") {
        for (let i = 0; i < answer.length; ++i) {
            if (answer[i].checked) {
                trueAnswer = answer[i];
            }
        }

        if (trueAnswer.id === data) {
            arrCorrect.push(Q);

        } else {
            arrInCorrect.push(Q);
            arrInCorrectindex.push(trueAnswer.id);
        }
    } else {
        arrNoAnswer.push(Q);
     }
}

function countdown(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds;
        countdownInterval = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            countdownElement.innerHTML = `${minutes}:${seconds}`;

            if (--duration < 0) {
                btnSubmit.click();
                clearInterval(countdownInterval);
            }
        }, 1000);
    }
}

 