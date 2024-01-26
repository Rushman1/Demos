for (let i = 1; i <= 150; i++) {
  let stars = document.createElement('div');
  stars.classList.add('star');
  let size = Math.random() * 20;
  stars.style.fontSize = 10 + size + 'px';
  stars.style.left = Math.random() * parseInt(innerWidth) + 'px';
  stars.style.filter = `hue-rotate(${i * 5}deg)`;
  document.querySelector('.sec').appendChild(stars);
}

function animateStars() {
  let allStrs = document.querySelectorAll('.star');
  let num = Math.floor(Math.random() * allStrs.length);
  allStrs[num].classList.toggle('animate');
}
window.setInterval(animateStars, 50);
