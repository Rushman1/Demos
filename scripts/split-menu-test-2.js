let i = 0;
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

let lastScrollTop = 0;
navbar = document.getElementById('navbar__outer');
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
// USED IF I WANT TO HOVER OVER THE IMAGE TO GET THE POPUP
// profileImage.addEventListener('mouseenter', (evt) => {
//   subMenuWrap[0].classList.toggle('hide');
// });
// USED IF I WANT TO CLICK ON THE IMAGE TO GET THE POPUP
profileImage.addEventListener('click', (evt) => {
  subMenuWrap[0].classList.toggle('hide');
  evt.stopPropagation();
});
document.addEventListener('click', function (evt) {
  subMenuWrap[0].classList.contains('hide')
    ? null
    : subMenuWrap[0].classList.add('hide');
});
let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function (evt) {
  subMenuWrap[0].classList.toggle('hide');
});

function showHideMenu() {
  var x = document.getElementById('navbar');

  if (x.className === 'navbar__menu') {
    x.classList.add('responsive');
  } else {
    x.classList.remove('responsive');
  }
}

// Accordion Functions
let accordHeader = document
  .querySelectorAll('a.accord-header')
  .forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      link.classList.toggle('expanded');
      let parentElement = link.parentElement.parentElement;
      if (parentElement) {
        if (link.classList.contains('expanded')) {
          parentElement.style.height = '100%';
        } else {
          parentElement.style.height = '30px';
        }
      }
    });
  });
let accordBody = document.querySelectorAll('div.accord-body');
