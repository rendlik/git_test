const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const title = document.querySelector('.title')

let open = 0

hamburger.addEventListener('click',(e)=>{
    if(window.pageYOffset > 0 && !open){
        // title.style.transition = 'all 900ms cubic-bezier(0, 0.65, 0.58, 1)'
        title.style.top = window.pageYOffset + 'px'
        open = 1
    }else{
        title.style.top = 0;
        open = 0;
    }

    console.log(window.pageYOffset)
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('stop-scrolling')

})

// document.addEventListener('scroll',(e)=> {
//     console.log(e)
// })