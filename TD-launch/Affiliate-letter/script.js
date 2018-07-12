 const nav = document.querySelector('.video');
 const navWidth = nav.offsetWidth 
 const main = document.querySelector('.main');
 const mainWidth = main.offsetWidth - 40
 
 console.log(navWidth)
    const navOffsetTop = nav.offsetTop
    function fixNav() {
      if(navOffsetTop <= window.scrollY){
        // if(done){
         
        //   done = false
        // } 
        console.log(1)
        // document.querySelector('.main').style.width = navWidth + 'px'
        nav.style.width = mainWidth + 'px'
        document.querySelector('.main').style.paddingTop = nav.offsetHeight +'px';
        nav.classList.add("fixed");
        
      }else{
        document.querySelector('.main').style.paddingTop = 0
        nav.classList.remove("fixed");
        // done = true
      }
    }
    window.addEventListener('scroll', fixNav);