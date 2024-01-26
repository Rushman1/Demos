(function(baseCode) {
	baseCode(window, document);
}(function(window, document) {
	document.addEventListener("DOMContentLoaded", function() {

        let navigation = document.querySelector('.navigation');
        document.querySelector('.toggle').onclick = function(){
            this.classList.toggle('active');
            navigation.classList.toggle('active');
        };

	});
	// Wrappers

	// AJAX Functions

	// Functions

	// Dynamic Buttons
}));