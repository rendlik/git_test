const nav = document.querySelector('#main')
const buttonMenu = document.querySelector('.menu-button')
const news = document.querySelector('.site-left')

const navOffsetTop = nav.offsetTop

let done = true;

if(window.innerWidth<576) nav.classList.add("fixed-nav")

window.addEventListener("orientationchange", function() {
  nav.classList.remove("fixed-nav")
  document.querySelector('body').style.paddingTop = 0 +'px';
});

// window.addEventListener('resize',function(){
//   if(window.innerWidth<576) nav.classList.add("fixed-nav"); 
// })


function fixNav(){
  if(window.innerWidth<576) return

  if(navOffsetTop <= window.scrollY){
    if(done){
      news.style.top = news.offsetTop-window.scrollY + "px";
      done = false
    } 
    document.querySelector('body').style.paddingTop = nav.offsetHeight +'px';
    nav.classList.add("fixed-nav");
    news.classList.add("fixed")
  }else{
    document.querySelector('body').style.paddingTop = 0
    nav.classList.remove("fixed-nav");
    news.classList.remove("fixed")
    news.style.top = 63 + "vh";
    done = true
  }
}

window.addEventListener('scroll', fixNav)

buttonMenu.addEventListener('click', function(){
  nav.classList.toggle('open')
  buttonMenu.classList.toggle('open')
})