function stripes() {
  let sizeW = Math.random() * 5;
  let e = document.createElement("div");
  e.classList.add("lines");
  document.body.appendChild(e);

  e.style.left = `${Math.random() * innerWidth}px`;
  e.style.width = `${1 + sizeW}px`;
  e.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 60
  )}deg, 100%, 50%)`;

  window.setTimeout(function () {
    document.body.removeChild(e);
  }, 7000);
}

window.setInterval(function () {
  stripes();
}, 200);
