$(document).ready(function(){
    const scrollLinks = $('.scroll')
    
    scrollLinks.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 50 +'px'
        },1000)
    })
})