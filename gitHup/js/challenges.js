let inptName1 = document.querySelector(".input-field1");
let inptName2 = document.querySelector(".input-field2");

let name1 = document.querySelector(".Name1");
let name2 = document.querySelector(".Name2");

let person1 = document.querySelector(".person1");
let person2 = document.querySelector(".person2");

let numrepo1 = document.querySelector(".num-user-repo1");
let numrepo2 = document.querySelector(".num-user-repo2");

let avatars1 = document.querySelector(".avatars1");
let avatars2 = document.querySelector(".avatars2");

let loader = document.querySelector(".load");


let btn = document.querySelector(".btnchal");


btn.addEventListener("click", function () {
  let time = 3;
  loader.style.display = "flex";
  if (time > 0) {
    setTimeout(() => {
      loader.style.display = "none";
      --time;
      console.log(time);
    }, 1000);
  }
  challenges();
});



// Get Repos Function
function challenges() {
  if (inptName1.value == "" && inptName2.value == "") { // If Value Is Empty
    // Empty
  } else {


    fetch(`https://api.github.com/users/${inptName1.value}`)
      .then((response) => response.json())
      .then((repositories) => {

        fetch(`https://api.github.com/users/${inptName2.value}`)
          .then((response) => response.json())
          .then((repositories1) => {

            if (repositories.public_repos > repositories1.public_repos) {
              name1.innerHTML = repositories.name;
              avatars1.src = repositories.avatar_url;
              numrepo1.innerHTML = `Numbers of Repositories ${repositories.public_repos}`;
              person1.classList.add("winner");

              name2.innerHTML = repositories1.name;
              avatars2.src = repositories1.avatar_url;
              numrepo2.innerHTML = `Numbers of Repositories ${repositories1.public_repos}`;
              person2.classList.add("loser");

            } else if (repositories.public_repos < repositories1.public_repos) {

              name1.innerHTML = repositories.name;
              avatars1.src = repositories.avatar_url;
              numrepo1.innerHTML = `Numbers of Repositories ${repositories.public_repos}`;
              person1.classList.add("loser");

              name2.innerHTML = repositories1.name;
              avatars2.src = repositories1.avatar_url;
              numrepo2.innerHTML = `Numbers of Repositories ${repositories1.public_repos}`;
              person2.classList.add("winner");
            } else {
              name1.innerHTML = repositories.name;
              avatars1.src = repositories.avatar_url;
              numrepo1.innerHTML = `Numbers of Repositories ${repositories.public_repos}`;
              person1.classList.add("winner");

              name2.innerHTML = repositories1.name;
              avatars2.src = repositories1.avatar_url;
              numrepo2.innerHTML = `Numbers of Repositories ${repositories1.public_repos}`;
              person2.classList.add("winner");
            }

          });

      });
  }
}
