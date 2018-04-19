const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu');
const countries = document.querySelectorAll('.header-item')
const closeButtons = document.querySelectorAll('#close-button')
const countriesDetail = document.querySelectorAll('.country-detail') 
const contactLink = document.querySelector('#contact')
const contactForm = document.querySelector('.contact')
const scholarshipsLink = document.querySelectorAll('#scholarships')
const scholarshipsForm = document.querySelector('.scholarships')
const overlay = document.querySelector(".overlay")
const scholarshipsLinks = document.querySelectorAll(".nav")
const scholarshipsDesc = document.querySelectorAll(".scholar")
const contactFormSubmit = document.querySelector('.contact-detail form')



scholarshipsLinks.forEach(link => link.addEventListener("click",function(){
	scholarshipsLinks.forEach(link=>link.classList.remove("open"))
	this.classList.add("open")
	const linkName = (Array.from(this.classList))[0]
	scholarshipsDesc.forEach(scholar =>{
		scholar.classList.remove("open")
		if(linkName == 	scholar.id){
			scholar.classList.add("open")
		}
	})
}))



menuButton.addEventListener('click',function(){
	menuButton.classList.toggle('active')
	overlay.classList.toggle('open')
})

menuButton.addEventListener('click',function(){
	menu.classList.toggle('open')
})

countries.forEach(country => country.addEventListener('click',function(){

	this.nextSibling.nextSibling.classList.add('open')
	overlay.classList.add('open')
}))

closeButtons.forEach(button => button.addEventListener('click',function(){
	this.parentNode.classList.remove('open')
	overlay.classList.remove('open')
}))

document.addEventListener('keydown',function(e){
	if(!e.isTrusted) return
	if(e.code === 'Escape'){
		[].forEach.call(countriesDetail, function(country) {
			country.classList.remove("open");
			overlay.classList.remove('open')
		});
	}
})

document.addEventListener('keydown',function(e){
	if(!e.isTrusted) return
	if(e.code === 'Escape'){
		menu.classList.remove('open')
		menuButton.classList.remove('active')
		overlay.classList.remove('open')
	}
})

contactLink.addEventListener('click',function(){
	contactForm.classList.add('open')
	menu.classList.remove('open')
	menuButton.classList.remove('active')
})

scholarshipsLink.forEach(link=> link.addEventListener('click',function(){
	countriesDetail.forEach(country=>country.classList.remove('open'))
	scholarshipsForm.classList.add('open')
	menu.classList.remove('open')
	menuButton.classList.remove('active')
}))

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9uVssie1b9y8ctPaen9xunKHsCWGv1OQ",
    authDomain: "edugo-3e5cc.firebaseapp.com",
    databaseURL: "https://edugo-3e5cc.firebaseio.com",
    projectId: "edugo-3e5cc",
    storageBucket: "edugo-3e5cc.appspot.com",
    messagingSenderId: "300557804365"
  };
  firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages')


function sendEmail(e){
	e.preventDefault()
    const name = document.querySelector('[name="name"]').value
    const email = document.querySelector('[name="email"]').value
    const message = document.querySelector('[name="message"]').value
    const confirmation = document.querySelector('.confirmation')
    const error = document.querySelector('.error')
    

    if(!email || !message){
        error.style.display = 'block'
    }else{
		saveMessage(name,email,message)
		error.style.display = 'none'
		$(this).get(0).reset()
		confirmation.style.display = 'block'
		         setTimeout(function(){
		             confirmation.style.display ='none'
		         },2500)
//         $.ajax({
//             url: "https://formspree.io/rmnstix@gmail.com", 
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//         });

//         $(this).get(0).reset()
//         confirmation.style.display = 'block'
//         setTimeout(function(){
//             confirmation.style.display ='none'
//         },2500)
//     }
// }

// $('a[href*="#"]')
// .not('[href="#"]')
// .not('[href="#0"]')
// .click(function(event) {
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//     && 
//     location.hostname == this.hostname
//   ) {
//     let target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000, function() {
//         let $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { 
//           return false;
//         } else {
//           $target.attr('tabindex','-1');
//           $target.focus(); 
//         };
//       });
//     }
 }
};

function saveMessage(name,email,message){
	let newMessageRef = messageRef.push()
	newMessageRef.set({
		name: name,
		email:email,
		message: message
	})
}

contactFormSubmit.addEventListener('submit',sendEmail)
