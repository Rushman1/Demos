window.addEventListener('scroll', function () {
  let scrollY = this.window.scrollY;
  let totalHeight = this.document.body.scrollHeight - this.window.innerHeight;
  let percentScrolled = (scrollY / totalHeight) * 100;
  let translateX = (percentScrolled / 6) * -5;
  this.document.querySelector(
    '.container'
  ).style.transform = `translateX(${translateX}%)`;
});
