for (let i = 1; i <= getNumberOfBoxes(); i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".sec").appendChild(box);
}

function getNumberOfBoxes() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const ww = w / 40;
  const hh = Math.round(h / 40);

  return ww * hh;
}

function animateBox() {
  let boxes = document.querySelectorAll(".box");
  let num = Math.floor(Math.random() * boxes.length);
  boxes[num].classList.toggle("animate");
}
getNumberOfBoxes();
window.setInterval(animateBox);
