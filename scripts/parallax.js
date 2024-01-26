(function(baseCode) {
	baseCode(window, document);
}(function(window, document) {
	document.addEventListener("DOMContentLoaded", function() {
        gsap.from("#m1",{
            scrollTrigger: {
                scrub: true
            },
            y: 100
        });
        gsap.from("#m2",{
            scrollTrigger: {
                scrub: true
            },
            y: 50
        });
        gsap.from("#t2",{
            scrollTrigger: {
                scrub: true
            },
            x: -50
        });
        gsap.from("#t1",{
            scrollTrigger: {
                scrub: true
            },
            x: 50
        });
        gsap.from("#man",{
            scrollTrigger: {
                scrub: true
            },
            x: -250
        });
        gsap.from("#plants",{
            scrollTrigger: {
                scrub: true
            },
            x: -50
        });
        gsap.from("#text",{
            scrollTrigger: {
                scrub: true
            },
            x: 600
        });




    });
	
	// Wrappers

	// AJAX Functions

	// Functions

	// Dynamic Buttons
}));