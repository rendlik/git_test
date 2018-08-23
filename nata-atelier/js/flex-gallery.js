const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    // panels.forEach(panel =>{
    //     panel.classList.remove('open')
    //     console.log(panel)
    // })
    this.classList.toggle('open')
    this.classList.toggle('active')
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen))