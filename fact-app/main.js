const selectButtons = document.querySelectorAll('.control-btn')
const dates = document.querySelectorAll('.row>div')
const months = document.querySelectorAll('.mth')
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const factHeader = document.querySelector('.card-body h2')
const factPara = document.querySelector('#numberFact')
const factText = document.querySelector('.card-body')
const warning = document.querySelector('.warning')
const input = document.getElementById('numberInput')
const february = document.querySelector('.feb')
const hide = document.querySelector('.hide')
const calendar = document.querySelector('.calendar')
let buttonSelected;
let buttonID = 'number'
let date = 1
let month = 1
let extension
let number = 1

function selectBtn(){
    selectButtons.forEach(btn=>btn.classList.remove('active'))
    this.classList.add('active')
    
    buttonSelected = this
    buttonID = buttonSelected.id
    if(buttonID === 'date'){
        calendar.style.display = 'block'
        input.style.display = 'none'
    }else{
        calendar.style.display = 'none'
        input.style.display = 'block'
    }
}

selectButtons.forEach(btn => btn.addEventListener('click',selectBtn))

function selectDate(){
    dates.forEach(btn=>btn.classList.remove('active'))
    this.classList.add('active')
    date = parseInt(this.innerHTML)
}

dates.forEach(btn => btn.addEventListener('click',selectDate))

function adjustDates(nbr){
    switch(nbr){
        case 2:
            february.style.opacity = '0'
            break
        case 6:
        case 9:
        case 11:
        case 4: 
            hide.style.opacity = '0'
            break
        default:
            february.style.opacity = '1'
            hide.style.opacity = '1'
    }
}

function monthRight(){
   months.forEach(btn=>{
        btn.classList.remove('right')
    })
   for(let i = 0;i<months.length;i++){
        let classMonth = (Array.from(months[i].classList))
        adjustDates(i+2)
        number = i+2
        if(classMonth.includes("active-month")){
            months[i].classList.remove('active-month')
            months[i].classList.add('right')
            if(i===11){
                i=-1
            }
            months[i+1].classList.add('active-month')
            
            break;
        }
    }
}

btnRight.addEventListener('click',monthRight)

function monthLeft(){
    months.forEach(btn=>{
        btn.classList.add('right')
    })
    for(let i = 11;i>-1;i--){
         adjustDates(i)
         number = i
         let classMonth = (Array.from(months[i].classList))
         if(classMonth.includes("active-month")){
            months[i].classList.remove('active-month')
            months[i].classList.remove('right')
            if(i===0){
                i=12
            }
            months[i-1].classList.remove('right')
            months[i-1].classList.add('active-month')
             break;
         }
     }
 }
 
 btnLeft.addEventListener('click',monthLeft)

function getFirstWord(str) {
    const words = str.split(" ")
    return words[0]
}

function fetchFact(){
    if(buttonID !== 'date'){
        number = input.value
    }

    switch (buttonID){
        case 'number':
            extension = '?notfound=floor'
            break
        case 'year':
            extension = 'year'
            break
        case 'math':
            extension = 'math'
            break
        case 'date':
            extension =  date + '/date'
    }
    console.log('http://numbersapi.com/'+number+'/'+extension)
    fetch('http://numbersapi.com/'+number+'/'+extension)
    .then(res => res.text())
    .then(data => {
        if(number !== ''){
            warning.style.display = 'none'
            if(buttonID !== 'date' && getFirstWord(data)!== input.value){
                warning.style.display = 'block'
                warning.innerText = `There is no fact associated with ${input.value}, thus the number was rounded to the closest number that does have an associated fact.`
            }
            factHeader.innerHTML = `Fun Fact for a ${buttonID} ${getFirstWord(data)}`
            factText.style.display = 'block'    
            factPara.innerHTML = data        
        }
    })
    .catch(err=>console.log(err))
}

input.addEventListener('input',fetchFact)
calendar.addEventListener('click',fetchFact)


