const closeButtons = document.querySelectorAll('.close-button')
const projectsList = document.querySelector('.projects-list')
const projects = document.querySelector('.projects')
const contactForm = document.querySelector('.contact-form')
const contact = document.querySelector('.contact')

projects.addEventListener('click',function(){
    projectsList.classList.add('open')
})

contact.addEventListener('click',function(){
    contactForm.classList.add('open')
})

closeButtons.forEach(button => button.addEventListener('click',function(){
	this.parentNode.classList.remove('open')
}))

