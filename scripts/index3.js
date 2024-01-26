// <ion-icon name="chevron-forward-circle-outline"></ion-icon>
let icon = document.querySelector('ion-icon');
let l = document.getElementById('link-1');
let cb = document.querySelector('.container-body');
console.log(l);

l.addEventListener('click', function (e) {
  l.classList.toggle('expanded');
  l.classList.toggle('collapsed');

  cb.classList.toggle('collapsed');
});

// icon.addEventListener('click', function (e) {
//   icon.classList.toggle('expanded');
//   icon.classList.toggle('collapsed');

//   cb.classList.toggle('collapsed');
// });
