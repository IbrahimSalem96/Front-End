// Main Variables
let theInput = document.querySelector(".inp-username");
// text Content
let imgTopNav = document.querySelector(".img-topNav");
let myimg = document.querySelector(".myimg");
let numrepos = document.querySelector(".num-repos span");
let userName = document.querySelector(".name-nekname h5");
let userNickName = document.querySelector(".name-nekname h6");
let desc = document.querySelector(".all-person .desc");
let followers = document.querySelector(".all-person .font-last");
let numRepos = document.querySelector(".right-sidebar .num-repos span");
let allCard = document.querySelector(".all-card"); // insert all repos
let show = document.querySelector(".hid");

theInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getRepos();
    }
});

// Get Repos Function
function getRepos() {
    if (theInput.value == "") { // If Value Is Empty
        // Empty
    } else {
        imgTopNav.src = "";
        myimg.src = "";
        numrepos.textContent = "";
        userName.textContent = "";
        userNickName.textContent = "";
        desc.textContent = "";
        followers.textContent = "";
        numRepos.textContent = "";
        allCard.textContent = "";

        show.classList.remove("hid")

        fetch(`https://api.github.com/users/${theInput.value}`)
            .then((response) => response.json())
            .then((repositories) => {
                imgTopNav.src = repositories.avatar_url;
                myimg.src = repositories.avatar_url;
                userName.innerHTML = repositories.name;
                userNickName.innerHTML = repositories.login;
                desc.innerHTML = repositories.bio;
                followers.innerHTML = `${repositories.followers} followers . ${repositories.following} following`

                fetch(`https://api.github.com/users/${theInput.value}/repos`)
                    .then((repos) => repos.json())
                    .then((repositories) => {
                        numRepos.innerHTML = repositories.length;

                        for (let i = 0; i < 6; ++i) {
                            let div1 = document.createElement("div");
                            let div2 = document.createElement("div");
                            let div3 = document.createElement("div");
                            let div4 = document.createElement("div");
                            let div5 = document.createElement("div");
                            let div5Text = document.createTextNode(`${repositories[i].language}`);
                            let h4 = document.createElement("h4");
                            let h4Text = document.createTextNode(`${repositories[i].name}`);
                            let a = document.createElement("a");
                            let span = document.createElement("span");
                            let spanText = document.createTextNode("Public");
                            div1.setAttribute("class", "card");
                            div2.setAttribute("class", "head");
                            div3.setAttribute("class", "lang-name");
                            div4.setAttribute("class", "color-lang");
                            a.setAttribute("href", `${repositories[i].html_url}`);
                            if (repositories[i].language == "CSS") {
                                div4.setAttribute("style", "background-color: #563d7c");
                            } else if (repositories[i].language == "JavaScript") {
                                div4.setAttribute("style", "background-color: #f1e05a");
                            }
                            a.appendChild(h4Text);
                            h4.appendChild(a);
                            span.appendChild(spanText);
                            div2.appendChild(h4);
                            div2.appendChild(span);
                            div3.appendChild(div4);
                            div5.appendChild(div5Text);
                            div3.appendChild(div5);
                            div1.appendChild(div2);
                            div1.appendChild(div3);
                            allCard.appendChild(div1);
                        }
                    })
            });
    }
}



