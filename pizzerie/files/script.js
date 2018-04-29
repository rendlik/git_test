$(document).ready(function(){
    const scrollLinks = $('.scroll')
    
    //smooth scrolling to the section
    scrollLinks.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 50 +'px'
        },1000)
    })

    //active link from menu higlighterd
    $(window).scroll(function(){
        const scrollbarLocation = $(this).scrollTop()

        scrollLinks.each(function(){        
            const sectionOffset = $(this.hash).offset().top-0.5*$(window).height();
            console.log(scrollbarLocation)
            if (sectionOffset <= scrollbarLocation){
                console.log(scrollbarLocation)
                console.log($(this))
                $(this).addClass('active')
                $(this).siblings().removeClass('active')
            }else if(scrollbarLocation < 0.5*$(window).height()){
                $(this).removeClass('active')
            }
        })
    })
})