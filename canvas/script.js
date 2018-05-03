const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

function Circle(x,y,dx,dy,radius){
    this.x = x
    this.dx = dx
    this.y = y
    
    this.dy = dy
    this.radius = radius

    this.draw = function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.stroke()
    }

    this.update = function(){
        if(this.x+this.radius > innerWidth || this.x-this.radius<0){
            this.dx = -this.dx
        }
    
        if(this.y+this.radius > innerHeight || this.y-this.radius<0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
}

let circleArr = []


for(let i = 0; i < 1000;i++){
    let radius = 50
    let x = Math.random()*(innerWidth - 2*radius) +radius
    let y = Math.random()*(innerWidth- 2*radius) +radius
    let dx = (Math.random()-0.5)*8
    let dy = (Math.random()-0.5)*8
    

    circleArr.push(new Circle(x,y,dx,dy,radius))
}

function animate(){
    requestAnimationFrame(animate)

    c.clearRect(0,0,innerWidth,innerHeight)

    for(let i = 0; i < circleArr.length;i++){
        circleArr[i].update()
    }
    
   

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
    

animate()