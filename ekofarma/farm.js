const nav = document.querySelector('#main')
console.log(nav)
const navOffsetTop = nav.offsetTop

function fixNav(){
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