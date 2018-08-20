window.addEventListener('load',init)

let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#input');
const scoreCounter = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');
const word = document.querySelector('#word');

const words = [
    'hello',
    'dog',
    'table',
    'city',
    'apple'
]

function init(){
    //load random word 
    showWord(words)
    //start matching on word input
    wordInput.addEventListener('input',startMatch)
    //call countdown every second
    setInterval(countdown,1000)
    //check game status
    setInterval(checkStatus,50)
}

function showWord(words){
    const randomIndex = Math.floor(Math.random()*words.length)

    word.innerHTML = words[randomIndex]
}

function countdown(){
    if(time>0){
        time--
    }else if (time === 0){
        isPlaying = false;
    }
    timeLeft.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying & time === 0){
       // message.innerHTML = 'Game Over!!'
       score = -1;
    }
}

function startMatch(){
    if(matchWord()){
       console.log('MATCH')
       isPlaying = true
       time = 6
       showWord(words)
       wordInput.value = ''
       score++
    }
    scoreCounter.innerHTML = score === -1 ? 0 : score
}

function matchWord(){
    if(wordInput.value === word.innerHTML){
        // message.innerHTML = 'Correct!!!'
        return true
    } else{
        // message.innerHTML = ''
        return false
    }
}
