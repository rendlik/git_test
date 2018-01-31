const nav = document.querySelector('#main')

const navOffsetTop = nav.offsetTop
console.log(window.innerWidth)
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