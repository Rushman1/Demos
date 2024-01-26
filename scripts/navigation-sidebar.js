let menuToggle = document.querySelector(".menuToggle");
let sidebar = document.querySelector(".sidebar");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};

let MenuList = document.querySelectorAll(".MenuList li");
function activeLink() {
  MenuList.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

MenuList.forEach((item) => {
  item.addEventListener("click", activeLink);
});
