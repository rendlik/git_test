const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu');
const countries = document.querySelectorAll('.header-item')
const closeButtons = document.querySelectorAll('#close-button')
const countriesDetail = document.querySelectorAll('.country-detail') 
const contactLink = document.querySelector('#contact')
const contactForm = document.querySelector('.contact')
const scholarshipsLink = document.querySelector('#scholarships')
const scholarshipsForm = document.querySelector('.scholarships')
const overlay = document.querySelector(".overlay")
const scholarshipsLinks = document.querySelectorAll(".nav")
const scholarshipsDesc = document.querySelectorAll(".scholar")

console.log(scholarshipsDesc)

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
	console.log(this.nextSibling.nextSibling)
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

scholarshipsLink.addEventListener('click',function(){
	scholarshipsForm.classList.add('open')
	menu.classList.remove('open')
	menuButton.classList.remove('active')
})