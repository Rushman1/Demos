let listItems = document.querySelectorAll('.navigation li');

function activeLink() {
  listItems.forEach((list) => {
    list.classList.remove('active');
    this.classList.add('active');
  });
}

listItems.forEach((list) => {
  list.addEventListener('click', activeLink);
});
