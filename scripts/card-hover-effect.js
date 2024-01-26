const cards = document.querySelectorAll('div.card');
const coords = document.querySelector('#coords');
cards.forEach((card) => {
  card.onmousemove = function (e) {
    const c = card.getBoundingClientRect();
    const x = e.clientX - c.left;
    const y = e.clientY - c.top;
    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  };
});
