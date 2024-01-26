let imgBx = document.querySelectorAll(".imgBx");

let contentBx = document.querySelectorAll(".contentBx");

for (var i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener("mouseover", function () {
    for (var j = 0; j < contentBx.length; j++) {
      contentBx[j].className = "contentBx";
    }
    console.log(this.dataset.id);
    document.getElementById(this.dataset.id).className = "contentBx active";
    for (var j = 0; j < imgBx.length; j++) {
      imgBx[j].className = "imgBx";
    }
    this.className = "imgBx active";
  });
}
