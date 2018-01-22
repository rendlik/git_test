  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let lastButton
  let timeUp = false;
  let score = 0;
  let minTime = 500;
  let maxTime = 1200;
  const tink = document.querySelector('#tink')
  const tick = document.querySelector('#tick')
  let countdown;
  const seconds = 2;
  const secondsTimer = 10;
  const timerDisplay = document.querySelector('.time')
  const countdownDisplay = document.querySelector('.countdown')
  const diffButtons = document.querySelectorAll('.controls button')




  function selectDiff(){
    diffButtons.forEach(button => {button.classList.remove('active')})
    this.classList.add('active')
    const level = parseInt(this.id)
    console.log(level)
    switch(level){
      case 3:
          minTime = 100
          maxTime = 700
          break;
      case 2:
          minTime = 500
          maxTime = 1200
          break;
      case 1:
          minTime = 800
          maxTime = 1600
          break;
    }
    localStorage.setItem("minTime", minTime);
    localStorage.setItem("maxTime", maxTime);
  }

  diffButtons.forEach(button => button.addEventListener('click',selectDiff))

  function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min)
  }

  function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length)
    const hole = holes[idx]
    if(hole === lastHole){
      return randomHole(holes)
    }
    lastHole = hole
    return hole
  }

  function peep(){
    const time = randomTime(parseInt(localStorage.getItem("minTime")),parseInt(localStorage.getItem("maxTime")));
    const hole = randomHole(holes);
    hole.classList.add('up')
    setTimeout(()=>{
      hole.classList.remove('up')
      if(!timeUp) peep()
    },time)
  }

  function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0
    peep()
    setTimeout(()=> timeUp = true, 10000)
  }

  function bunk(e){
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    tink.play()
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click',bunk))

  function timer(seconds, element){
    clearInterval(countdown)
    // displayTime(seconds)
    countdown = setInterval(()=>{
      const secsLeft = seconds--
      if(element === countdownDisplay) tick.play()
      if(secsLeft <= 0){
        clearInterval(countdown)
        if(element === countdownDisplay){
          element.classList.add('hide')
          setTimeout(()=>{startGame()},600)
        }
        displayTime(secsLeft,element)
        return
      }
      displayTime(secsLeft,element)
    }, 1000);
  }

  function displayTime(sec,element){
    element.innerHTML = `<span>${sec}</span>`
  }
