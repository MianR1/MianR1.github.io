/*--live typing--*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
});

// Typing animation of who I am

var typed = new Typed("#typing",{
	strings:["","Web Designer","Web Developer","Student","Programmer","Gamer"],
	typeSpeed:100,
	backSpeed:60,
	loop:true

});


// Typing animation of the logo
var logoChange = new Typed("#typingLogo",{
	strings:["Story","Passion","Future"],
	typeSpeed:200,
	backSpeed:200,
	loop:true
});


// Scroll info for nav
	$(function () {
	$(document).scroll(function(){
var $nav = $("#mainNav");
$nav.toggleClass("scrolled", $(this).scrollTop()>$nav.height());
	});
});


// Smooth scroll when click one of the list items
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior : "smooth"
		});
	});
});


// My Projects Section carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplaySpeed:2000,
    responsive:{
		0:{
			items:1,
			stagePadding: 20
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


// Scroll bar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight)*100;
	progress.style.height = progressHeight + "%";
}


// skills bars


