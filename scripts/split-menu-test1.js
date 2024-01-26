let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  let scrollTop =
    this.window.scrollY || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('icon');
  } else {
    navbar.classList.remove('icon');
  }
  lastScrollTop = scrollTop;
});

let profileImage = document.getElementById('profile-picture');
let subMenuWrap = document.getElementsByClassName('sub-menu-wrap');
// USED IF I WANT TO HOVER THE IMAGE TO GET THE POPUP
// profileImage.addEventListener('mouseenter', (evt) => {
//   subMenuWrap[0].classList.toggle('hide');
// });
profileImage.addEventListener('click', (evt) => {
  subMenuWrap[0].classList.toggle('hide');
});

let closeButton = document.getElementsByClassName('close-button');
closeButton[0].addEventListener('click', function () {
  subMenuWrap[0].classList.toggle('hide');
});
