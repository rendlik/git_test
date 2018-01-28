const closeButtons = document.querySelectorAll('.close-button')
const projectsList = document.querySelector('.projects-list')
const projects = document.querySelector('.projects')
const contactForm = document.querySelector('.contact-form')
const contact = document.querySelector('.contact')
const projectOverlay = document.querySelector('.project-overlay')
const projectText = document.querySelectorAll('.project p')
const contactFormSubmit = document.querySelector('.contact-form form')
const name = document.querySelector('[name="name"]')
console.log(name)


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

function sendEmail(e){
    const name = document.querySelector('[name="name"]')
    const email = document.querySelector('[name="email"]')
    const message = document.querySelector('[name="message"]')

    if(!name.value || !message.value){

    }else{
        $.ajax({
            url: "https://formspree.io/rmnstix@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault()
        $(this).get(0).reset()
    }
}

contactFormSubmit.addEventListener('submit',sendEmail)
