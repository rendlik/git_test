const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu');
const countries = document.querySelectorAll('.header-item')
const closeButtons = document.querySelectorAll('#close-button')
const countriesDetail = document.querySelectorAll('.country-detail') 

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
