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
    console.log(words)
}