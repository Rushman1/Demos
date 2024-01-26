let search = document.querySelector('.search');
let searchBox = document.querySelector('.searchBox');
let close = document.querySelector('.close');
let input = document.querySelector('#search-input');

search.onclick = function(){
    searchBox.classList.add('active');
};
close.onclick = function(){
    searchBox.classList.remove('active');
    input.value = '';
};