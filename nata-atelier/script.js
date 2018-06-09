const hamburger = document.querySelector('#hamburger')
const hamburgerLines = document.querySelectorAll('#hamburger span')
const menu = document.querySelector('#menu')
const title = document.querySelector('.title')
const menuItems = document.querySelectorAll('#menu a')

const thumbnails = document.querySelectorAll('.thumb')

let open = 0

thumbnails.forEach(thumbnail => thumbnail.addEventListener('click',function(e){
	this.classList.add('active')
}))


	hamburger.addEventListener('mouseenter', function(){
		console.log(open)
		if(!open){
			hamburgerLines.forEach(line => line.classList.add('animate'))
		}
	})
	
	hamburger.addEventListener('mouseleave', function(){
		hamburgerLines.forEach(line => line.classList.remove('animate'))
	})






hamburger.addEventListener('click',()=>{
	// debugger;
    if(window.pageYOffset > 0 && !open){
        // title.style.transition = 'all 900ms cubic-bezier(0, 0.65, 0.58, 1)'
        title.style.top = window.pageYOffset + 'px'
        // open = 1
    }else{
        title.style.top = 0;
        // open = 0;
	}
	hamburgerLines.forEach(line => line.classList.remove('animate'))
	open = open === 0 ? 1 : 0;
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('stop-scrolling')

})

// document.addEventListener('scroll',(e)=> {
//     console.log(e)
// })

function changePic(){
	const zizkov = document.querySelectorAll('.zizkov')
	let zizkovPic = []

	zizkov.forEach(el => {
		zizkovPic.push(arrayFrom(el.querySelectorAll('img')))
	})

	for(let i = 0; i<zizkovPic.length; i++){
		for(let j = 0;j<zizkovPic[i].length;j++){
			if(arrayFrom(zizkovPic[i][j].classList).includes('current')){
				zizkovPic[i][j].classList.remove('current')
				zizkovPic[i][((j+1)%zizkovPic[i].length)].classList.add('current')
				break
			}
		}
	}
}

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject)
}

setInterval(changePic,10000)
