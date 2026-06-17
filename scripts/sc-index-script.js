var d = document.getElementById('dark_mode');

d.addEventListener('change', function () {
  d.checked ? changeToDark() : changeToLight();
});

var changeToDark = function () {
  var l = document.getElementById('base_css_link');
  l.href = '..\\css\\sc-index-dark.css';
};
var changeToLight = function () {
  var l = document.getElementById('base_css_link');
  l.href = '..\\css\\sc-index-light.css';
};
