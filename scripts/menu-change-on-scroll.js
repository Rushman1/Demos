let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  let scrollTop =
    this.window.scrollY || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("icon");
  } else {
    navbar.classList.remove("icon");
  }
  lastScrollTop = scrollTop;
});
