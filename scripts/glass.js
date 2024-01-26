(function(baseCode) {
	baseCode(window, document);
}(function(window, document) {
	document.addEventListener("DOMContentLoaded", function() {

        let marker = document.querySelector('#marker');
        let list = document.querySelectorAll('ul li');

        function moveIndicator(evt){
            marker.style.left = evt.offsetLeft+'px';
            marker.style.width = evt.offsetWidth+'px';
        }

        list.forEach((link)=>{
            link.addEventListener('mousemove', (e) => {
                moveIndicator(e.target);
            });
        });

        function activeLink(){
            list.forEach((link)=>{
                link.classList.remove('active');
                this.classList.add('active');
            });
        }

        list.forEach((link)=>{
            link.addEventListener('mouseover',activeLink);
        });

	});
	// Wrappers

	// AJAX Functions

	// Functions

	// Dynamic Buttons
}));