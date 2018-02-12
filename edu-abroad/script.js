const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu');
const countries = document.querySelectorAll('.header-item')
const closeButtons = document.querySelectorAll('#close-button')
const countriesDetail = document.querySelectorAll('.country-detail') 
const contactLink = document.querySelector('#contact')
const contactForm = document.querySelector('.contact')

menuButton.addEventListener('click',function(){
	menuButton.classList.toggle('active')
})

menuButton.addEventListener('click',function(){
	menu.classList.toggle('open')
})

countries.forEach(country => country.addEventListener('click',function(){
	console.log(this.nextSibling.nextSibling)
	this.nextSibling.nextSibling.classList.add('open')
}))

closeButtons.forEach(button => button.addEventListener('click',function(){
	this.parentNode.classList.remove('open')
}))

document.addEventListener('keydown',function(e){
	if(!e.isTrusted) return
	if(e.code === 'Escape'){
		[].forEach.call(countriesDetail, function(country) {
			country.classList.remove("open");
		});
	}
})

document.addEventListener('keydown',function(e){
	if(!e.isTrusted) return
	if(e.code === 'Escape'){
		menu.classList.remove('open')
		menuButton.classList.remove('active')
	}
})

contactLink.addEventListener('click',function(){
	contactForm.classList.add('open')
	menu.classList.remove('open')
	menuButton.classList.remove('active')
	console.log(1)
})