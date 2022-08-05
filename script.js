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


