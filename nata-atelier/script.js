const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const title = document.querySelector('.title')
// const carousel = document.querySelector('.carousel')
// const  figure = carousel.querySelector('figure')
// const numImages = figure.childElementCount
// const theta =  2 * Math.PI / numImages
// let currImage = 0

// setInterval(function() {
    
    
//         currImage++;
    
//     figure.style.transform = `rotateY(${currImage * -theta}rad)`;
// },3000)



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

window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		// nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
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
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
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