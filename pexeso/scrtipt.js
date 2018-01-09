
const cards = document.querySelectorAll('.card')
const freeze = document.querySelector('.freeze')
const winner = document.querySelector('.win')
let flippedCards = []
let nbrFlippedCards=0;
let numbers = []
let number
let counterWin =0 
let lastCard

shuffle()

function hideFLip(){
	if(flippedCards[0].className === flippedCards[1].className){
		flippedCards[0].classList.add('hide')
		flippedCards[1].classList.add('hide')
		counterWin = counterWin + 2
		win()
	}else{
		cards.forEach(card => card.classList.remove('active'))
	}
	nbrFlippedCards = 0
	freeze.classList.remove('active')
}

function randomArray(){
	numbers = []
	do {
		number = Math.floor(Math.random()*8+2)
		if(!numbers.includes(number)){
			numbers.push(number)
		}
	}
	while (numbers.length < 8);
}

function shuffle(){
	randomArray()
	let i = 0;
	cards.forEach(card => {
		card.classList.add(`card${Math.floor(numbers[i]/2)}`)
		i++
	})
}

function win(){
	if(counterWin === cards.length){
		setTimeout(function(){winner.classList.add('active')},1000);
	}
}

cards.forEach(card => card.addEventListener('click', () =>{
	if(card === lastCard){
		lastCard.classList.remove('active')
		nbrFlippedCards = 0
		return
	}
	card.classList.add('active');
	nbrFlippedCards++;
	flippedCards.push(card)
	flippedCards.splice(-3, flippedCards.length - 2)
	lastCard = card
	if(nbrFlippedCards === 2){
		freeze.classList.add('active')
		setTimeout(hideFLip, 1400);
	}
})) 

