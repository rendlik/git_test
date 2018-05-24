const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const title = document.querySelector('.title')

let scrollTop = 0

hamburger.addEventListener('click',(e)=>{
    console.log(e.scrollTop)
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('stop-scrolling')

})

// document.addEventListener('scroll',(e)=> {
//     console.log(e)
// })