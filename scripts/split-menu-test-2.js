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
      let parentElement = link.parentElement;
      let grandParentElement = link.parentElement.parentElement;
      if (grandParentElement) {
        if (link.classList.contains('expanded')) {
          grandParentElement.style.height = '100%';
          parentElement.nextElementSibling.style.display = 'inline-block';
        } else {
          grandParentElement.style.height = '30px';
          console.log(parentElement.nextElementSibling);
          parentElement.nextElementSibling.style.display = 'none';
        }
      }
    });
  });
let accordBody = document.querySelectorAll('div.accord-body');
let tooltipTimeout = null;

// Tooltip Functions
// // let tooltips = document.querySelectorAll('.tooltip').forEach((item) => {
// //   item.addEventListener(
// //     'mouseover',
// //     function (e) {
// //       let t = item.attributes['tooltip-title'];
// //       let ce = document.getElementById('my_id');

// //       if (ce) {
// //         return false;
// //       }

// //       let pp = document.createElement('div');
// //       pp.setAttribute('id', 'my_id');
// //       //let sp = document.createElement('span');
// //       pp.innerText = t.value;
// //       //pp.appendChild(sp);
// //       pp.classList.add('tooltiptext');
// //       item.appendChild(pp);
// //     },
// //     false
// //   );
// item.addEventListener(
//   'mouseout',
//   function (e) {
//     window.setTimeout(function () {
//       console.log('We are not showing this tooltip any more');
//       let createdElement = document.getElementById('my_id');
//       if (createdElement) {
//         createdElement.parentNode.removeChild(createdElement);
//       }
//     }, 500);
//   },
//   false
// );

// item.addEventListener('mousemove', function (e) {
//   let tt = document.elementFromPoint(e.clientX, e.clientY);
//   let at = tt.classList.contains('tooltiptext');
//   if (at) {
//     if (tooltipTimeout) {
//       clearTimeout(tooltipTimeout);
//     }
//   }
// });
// //});

function getPosition(el) {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    if (el.tagName === 'BODY') {
      // Handle browser quirks with body/window/document and page scroll
      const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      const yScroll = el.scrollTop || document.documentElement.scrollTop;
      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // For all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }
    el = el.offsetParent;
  }

  return { x: xPos, y: yPos };
}
