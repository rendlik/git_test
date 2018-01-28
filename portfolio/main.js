const closeButtons = document.querySelectorAll('.close-button')
const projectsList = document.querySelector('.projects-list')
const projects = document.querySelector('.projects')
const contactForm = document.querySelector('.contact-form')
const contact = document.querySelector('.contact')
const projectOverlay = document.querySelector('.project-overlay')
const projectText = document.querySelectorAll('.project p')


projects.addEventListener('click',function(){
    projectsList.classList.add('open')
    projectOverlay.classList.add('open')
})

contact.addEventListener('click',function(){
    contactForm.classList.add('open')
})

closeButtons.forEach(button => button.addEventListener('click',function(){
    this.parentNode.classList.remove('open')
    projectOverlay.classList.remove('open')
}))

function lightenImage(){
    this.previousElementSibling.classList.add('active')
}

function darkenImage(){
    this.previousElementSibling.classList.remove('active')
}

projectText.forEach(text => text.addEventListener('mouseenter',lightenImage))
projectText.forEach(text => text.addEventListener('mouseleave',darkenImage))


