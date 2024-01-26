let marker = document.querySelector('.indicator');
let list = document.querySelectorAll('ul li');

function moveIndicator(evt) {
  marker.style.left = evt.offsetLeft + 'px';
  marker.style.width = evt.offsetWidth + 'px';
}

list.forEach((link) => {
  link.addEventListener('click', (evt) => {
    moveIndicator(evt.target);
  });
});

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}
list.forEach((item) => {
  item.addEventListener('click', activeLink);
});
