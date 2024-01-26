let signup = document.querySelector("#signup");
let signin = document.querySelector("#signin");
let forgot = document.querySelector("#forgot");
let body = document.querySelector("body");

signup.onclick = function () {
  body.classList.add("signup");
};

forgot.onclick = function () {
  body.classList.remove("signup");
};

signin.onclick = function () {
  body.classList.remove("signup");
};
