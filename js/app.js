(function() {
    console.log("App JS loaded.");
  
    $(document).ready(function() {
		console.log("Document Ready!");

		particlesJS.load('particle', 'js/particlejs-config.json', function() {
			console.log('callback - particles.js config loaded');
		});
  
		var typed = new Typed('#anim-text', {
			strings: [
			  "Hello <strong style='color: #fff;'>World!</strong>",
			  "I'm <strong style='color: #fff;'>Mohammed Sufyan Shaikh</strong>",
			  "Software Developer from <strong style='color: #fff;'>Vadodara</strong>",
			//   "I love to code, always excited to try new <strong style='color: #fff;'>programming languages.</strong>",
			  "I believe in <strong style='color: #fff;'>'First solve the problem, Then write the code.'</strong>"
			],
			typeSpeed: 70,
			backSpeed: 30,
			loop: true,
			smartBackspace: true,
			cursorChar: '',
			startDelay: 1000,
			backDelay: 600,
		});
  
		//OwlCarousel
        $('.owl-carousel').owlCarousel({
			// loop:true,
			margin:10,
			// nav:true,
			lazyLoad:true,
			stagePadding: 50,
			dots: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});

		ChangeIt();
		
	});
	var map_key = "AIzaSyBpknL41Ak54HpzPzaf6PsGZWeuAn1Oc4Q";
	var totalCount = 3;	
	function ChangeIt() 
	{
		var num = Math.ceil( Math.random() * totalCount );
		document.getElementById('main_bg').style.backgroundImage = 'url(img/header_'+ num +'.jpg)';

		// document.getElementById('main_bg').style.backgroundColor = 'red';
		
		document.getElementById('main_bg').style.backgroundRepeat = "no-repeat";// Background repeat

		// console.log("Background changed.", num);
	}
})();