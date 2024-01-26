/**
 * TODO: ADD CODE HERE TO UPLOAD THE FILE
 */

// const input = document.getElementById("file-chooser");
// const holder= document.getElementById("file-holder");
// const fileChooser = document.getElementById('fileSelect'); // BUTTON THAT IS NOT HIDDEN

// fileChooser.addEventListener('click',(e)=>{
//     if(input)
//         input.click();
// },false);

// input.onchange = e => {
//     var file = e.target.files[0];
//     var newSpan = document.createElement('span');
//     newSpan.innerHTML = file.name;
//     holder.appendChild(newSpan);
// };
$.fn.getType = function(){
    return this[0].tagName == 'INPUT' ? this[0].type.toLowerCase() : this[0].tagName.toLowerCase();
};

const secondInput = document.getElementById('fileElem');
const secondLabel = document.getElementById('fileLabel');

secondInput.onchange = e => {
    var file = e.target.files[0];
    secondLabel.innerHTML = file.name;
};

// function color(){
//     var var2 = document.body;
//     var2.style.backgroundColor = var2.style.backgroundColor == "lightblue"?"lightgreen":"lightblue";
// }

// var var1 = setInterval(color, 2000);
// color();

const inputs = $('body').find('input');

$.each(inputs, function(ind, elem){
    console.log($(elem).getType());
});