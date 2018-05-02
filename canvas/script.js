const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',function(e){
    mouse.x = e.x
    mouse.y = e.y 
})

function Circle(x,y,dx,dy,radius,r,b,g){
    this.x = x
    this.dx = dx
    this.y = y
    this.dy = dy
    this.radius = radius
    this.r = r
    this.b = b
    this.g = g

    this.draw = function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = 'rgb(' + this.r + ',' +
        this.b + ','+ this.g +')';
        c.fill()
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

        if(Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50){
            if(this.radius< 40){
                this.radius += 1
            }
   
        }else if (this.radius > 2){
            this.radius -= 1
        }

        this.draw()
    }
}

let circleArr = []


for(let i = 0; i < 700 ;i++){
    let radius = 27
    let x = Math.random()*(innerWidth - 2*radius) +radius
    let y = Math.random()*(innerHeight - 2*radius) +radius
    let dx = (Math.random()-0.5)*12
    let dy = (Math.random()-0.5)*12
    let r =  Math.floor((Math.random())*255) +1
    let b = Math.floor((Math.random())*255) +1
    let g = Math.floor((Math.random())*255) +1
    

    circleArr.push(new Circle(x,y,dx,dy,radius,r,b,g))
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