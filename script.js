/*--live typing--*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
});


var typed = new Typed("#typing",{
	strings:["","Web Designer","Web Developer","Student","Programmer","Gamer"],
	typeSpeed:100,
	backSpeed:60,
	loop:true

});


var logoChange = new Typed("#typingLogo",{
	strings:["Story","Passion","Future"],
	typeSpeed:200,
	backSpeed:200,
	loop:true
});


	$(function () {
	$(document).scroll(function(){
var $nav = $("#mainNav");
$nav.toggleClass("scrolled", $(this).scrollTop()>$nav.height());
	});
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior : "smooth"
		});
	});
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplaySpeed:2000,
    responsive:{
		0:{
			items:1,
			stagePadding: 10
		},
		1300:{
			items:2,
			stagePadding: 75
		},
		1900:{
			items:3,
			stagePadding: 125
		}
    }
});