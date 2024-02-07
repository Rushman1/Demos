let i = 0;
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let aqua = document.querySelector('.aqua');
let number = document.querySelector('.number');
let percentBar = document.querySelector('.percentBar');

let interval = setInterval(function () {
  number.innerHTML = `${i}<span>%</span>`;
  percentBar.style.width = `${i}%`;
  i++;
  if (i == 101) {
    clearInterval(interval);
    setTimeout(() => {
      fadeOut();
    });
  }
}, 50);

function fadeOut() {
  let opacity = 1;
  let timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer);
      aqua.style.opacity = 0;
      aqua.remove();
      header.style.opacity = '1';
      header.style.visibility = 'visible';
      main.style.opacity = '1';
      main.style.visibility = 'visible';
      footer.style.opacity = '1';
      footer.style.visibility = 'visible';
    }
    aqua.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 50);
}

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
