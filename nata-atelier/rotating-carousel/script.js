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

window.addEventListener('load', () => {
	const widthW = window.innerWidth
	const removePic = document.querySelectorAll('.rm-small')
	let nbrRemove = removePic.length
	
	if(widthW < 389){
		nbrRemove =removePic.length 
	}else if(widthW < 501){
		nbrRemove = removePic.length-2
	}else if(widthW < 680){
		nbrRemove = removePic.length -3
	}else if(widthW < 790){
		nbrRemove = removePic.length -4
	}else if(widthW < 940){
		nbrRemove = removePic.length -5
	}
	else{
		nbrRemove = 0
	}

	console.log(nbrRemove)

	for(let i = 0; i<nbrRemove;i++) {
		document.querySelector('figure').removeChild(removePic[i])
	}

	var
		carousels = document.querySelectorAll('.carousel')
	;



	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	const figure = root.querySelector('figure')
	var
		
		// nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || window.innerWidth/28,
		bfc = 'bfc' in root.dataset,
		theta =  2 * Math.PI / n,
		currImage = 0
	;
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var	
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${-apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		setInterval( onClick, 5000);
		
		function onClick() {
			// e.stopPropagation();
			
			// var t = e.target;
			// if (t.tagName.toUpperCase() != 'BUTTON')
			// 	return;
			
			// if (t.classList.contains('next')) {
				currImage++;
			// }
			// else {
			// 	currImage--;
			// }
			
			rotateCarousel(currImage);
		}
			
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
	
}