const closeButtons = document.querySelectorAll('.close-button')
const projectsList = document.querySelector('.projects-list')
const projects = document.querySelector('.projects')
const contactForm = document.querySelector('.contact-form')
const contact = document.querySelector('.contact')
const projectOverlay = document.querySelector('.project-overlay')
const projectText = document.querySelectorAll('.project p')
const contactFormSubmit = document.querySelector('.contact-form form')
const name = document.querySelector('[name="name"]')
console.log(projects)


projects.addEventListener('click',function(){
    if(screen.width < 681) return
    console.log(screen.width)
    projectsList.classList.add('open')
    projectOverlay.classList.add('open')
})

contact.addEventListener('click',function(){
    if(screen.width < 681) return
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
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

contactFormSubmit.addEventListener('submit',sendEmail)
