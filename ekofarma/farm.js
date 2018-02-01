const nav = document.querySelector('#main')
const buttonMenu = document.querySelector('.menu-button')

const navOffsetTop = nav.offsetTop

if(window.innerWidth<576) nav.classList.add("fixed-nav")

window.addEventListener("orientationchange", function() {
  document.querySelector('body').style.paddingTop = 0 +'px';
});

window.addEventListener('resize',function(){
  if(window.innerWidth<576) nav.classList.add("fixed-nav"); 
})


function fixNav(){
  if(window.innerWidth<576) return
  // console.log(nav.offsetTop, window.scrollY)
  if(navOffsetTop <= window.scrollY){
    document.querySelector('body').style.paddingTop = nav.offsetHeight +'px';
    nav.classList.add("fixed-nav");
  }else{
     document.querySelector('body').style.paddingTop = 0
    nav.classList.remove("fixed-nav");
  }
}

window.addEventListener('scroll', fixNav)

buttonMenu.addEventListener('click', function(){
  nav.classList.toggle('open')
  buttonMenu.classList.toggle('open')
})