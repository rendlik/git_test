const closeButtons = document.querySelectorAll('.close-button')
const projectsList = document.querySelector('.projects-list')
const projects = document.querySelector('.projects')

projects.addEventListener('click',function(){
    projectsList.classList.add('open')
})

closeButtons.forEach(button => button.addEventListener('click',function(){
	this.parentNode.classList.remove('open')
}))

