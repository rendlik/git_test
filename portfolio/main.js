const closeButtons = document.querySelectorAll('.close-button')
const projectsList = document.querySelector('.projects-list')
const projects = document.querySelector('.projects')
const contactForm = document.querySelector('.contact-form')
const contact = document.querySelector('.contact')
const projectOverlay = document.querySelector('.project-overlay')
const projectText = document.querySelectorAll('.project p')
const contactFormSubmit = document.querySelector('.contact-form form')
const name = document.querySelector('[name="name"]')



projects.addEventListener('click',function(){
    if($(document).width() < 681) return
    projectsList.classList.add('open')
    projectOverlay.classList.add('open')
})

contact.addEventListener('click',function(){
    if($(document).width() < 681) return
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
    const confirmation = document.querySelector('.confirmation')
    const error = document.querySelector('.error')
    

    if(!name.value || !message.value){
        error.style.display = 'block'
    }else{
        $.ajax({
            url: "https://formspree.io/rmnstix@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault()
        $(this).get(0).reset()
        confirmation.style.display = 'block'
        setTimeout(function(){
            confirmation.style.display ='none'
        },2500)
    }
}

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        let $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus(); 
        };
      });
    }
  }
});

contactFormSubmit.addEventListener('submit',sendEmail)


document.addEventListener('keydown',function(e){
	if(!e.isTrusted) return
	if(e.code === 'Escape'){
		[].forEach.call(closeButtons, function(parent) {
            parent.parentNode.classList.remove('open')
            projectOverlay.classList.remove('open')
		});
	}
})

