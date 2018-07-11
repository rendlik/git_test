// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#63A992', '#A9C593', '#8D5F31', '#0E2A32'];
let swipeUp = 0;

function closeCanvas() {
  document.querySelector('canvas').classList.add('close');
}

// Event Listeners
addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Objects

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x:
      (Math.random() + 1) *
      randomIntFromRange(2, 3) *
      (Math.random() > 0.5 ? 1 : -1),
    y:
      (Math.random() + 1) *
      randomIntFromRange(2, 3) *
      (Math.random() > 0.5 ? 1 : -1),
  };
  this.mass = 1;
  this.opacity = 0;
  this.initCor = {
    x: x,
    y: y,
  };
  this.initVel = {
    x: this.velocity.x,
    y: this.velocity.y,
  };

  this.update = circles => {
    this.draw();

    if (counter < 80) {
      this.velocity.x = Math.random() - 0.5;
      this.velocity.y = Math.random() - 0.5;
    } else if (counter == 81) {
      this.velocity.x = this.initVel.x;
      this.velocity.y = this.initVel.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

<<<<<<< HEAD
    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
        if(counter > 400){
            this.velocity.x = (this.initCor.x -this.x)/30
            this.velocity.y = Math.abs(this.initCor.y -this.y)/30
        }else{
            this.velocity.x = -this.velocity.x ;
        //     this.velocity.y = -this.velocity.y ;
        // }else if(counter < 200 && counter > 121){
        //   this.velocity.x += this.velocity.x > 0  ? 0.3 : -0.3
        //   this.velocity.y += this.velocity.y > 0  ? 0.3 : -0.3
        // }else if (counter > 200){
        //   this.velocity.x -= this.velocity.x > 0  ? 0.3 : -0.3
        //   this.velocity.y -= this.velocity.y > 0  ? 0.3 : -0.3
        }}

        // if(counter > 200){
        //   //     this.velocity.x = (this.initCor.x -this.x)/50
        //   //     this.velocity.y = Math.abs(this.initCor.y -this.y)/50
        //   // }else{
        //     this.x += this.velocity.x*0.3;
        //     this.y += this.velocity.y*0.3;
        
        //   }
  
      
    // }

    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
        if(counter>400){
            this.velocity.y = (this.initCor.y -this.y)/50
            this.velocity.x = Math.abs(this.initCor.x -this.x)/50
        }else{
            this.velocity.y = -this.velocity.y ;
        }
      }
=======
    if (counter == 200) {
      this.velocity.x =
        -this.velocity.x *
        ((this.x - this.initCor.x - 400) / (this.x - this.initCor.x));
      this.velocity.y =
        -this.velocity.y *
        ((this.y - this.initCor.y - 50) / (this.y - this.initCor.y));
      this.initCor.y += 50;
      this.initCor.x += 400;
    }

    if (counter > 130 && this.velocity.x != 0) {
      for (let i = 0; i < circles.length; i++) {
        if (distance(this.x, this.y, this.initCor.x, this.initCor.y) < 10) {
          this.velocity.x = 0;
          this.velocity.y = 0;
          swipeUp = 1;
          this.opacity = 0.3;
        }
      }
    }
>>>>>>> 009d89a7f7fc650edf3629da809d0abe3373c8d7

    if (distance(this.x, this.y, mouse.x, mouse.y) < 60 && this.opacity < 0.6) {
      this.opacity += 0.02;
    } else if (this.opacity > 0 && this.velocity.x != 0) {
      this.opacity -= 0.02;
      this.opacity = Math.max(0, this.opacity);
    } else if (this.opacity > 0 && this.velocity.x == 0) {
      this.opacity -= 0.02;
      this.opacity = Math.max(0.3, this.opacity);
    }
<<<<<<< HEAD

    if (counter > 180) {
      for (let i = 0; i < circles.length; i++) {
        if (distance(this.x, this.y, this.initCor.x, this.initCor.y) < 15) {
          this.velocity.x = 0;
          this.velocity.y = 0;
          
          this.opacity = 0.5
        }
      }
    }
    // for (let i = 0; i < circles.length; i++){
    //     if(distance())
    // }
=======
>>>>>>> 009d89a7f7fc650edf3629da809d0abe3373c8d7
  };

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    c.save();
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.fill();
    c.restore();
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  };
}

// Implementation
let circles;

function init() {
  circles = [];
  const nbrCircles = innerHeight * innerWidth / 1000;
  for (let i = 0; i < 20; i++) {
    const radius = innerWidth / 45;
    const color = randomColor(colors);
    circles.push(
      new Circle(200 + randomIntFromRange(-2, 2), 100 + i * 21, radius, color)
    );
  }

<<<<<<< HEAD
  for (let i = 0; i < 10; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(220 + i * 18, 300, radius, color)
    );
  }
  for (let i = 0; i < 10; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(220 + i * 18, 500 , radius, color)
    );
  }

  for (let i = 0; i < 12; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(600 + i * 11, 280 + i * 18  , radius, color)
    );
  }

  for (let i = 0; i < 12; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(700 - i * 11, 280 + i * 18 , radius, color)
    );
  }

  for (let i = 0; i < 12; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(800 + i * 11, 280 + i * 18  , radius, color)
    );
  }

  for (let i = 0; i < 12; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(900 - i * 11, 280 + i * 18 , radius, color)
    );
  }

  for (let i = 0; i < 12; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(1000 + i * 11, 280 + i * 18  , radius, color)
    );
  }

  for (let i = 0; i < 12; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(1100 - i * 11, 280 + i * 18 , radius, color)
    );
  }
  // line.push(new Circle(400,300+i,.2,'black'))
=======
  // for (let i = 0; i < 10; i++) {
  //   const radius = innerWidth/45;
  //   const color = randomColor(colors);
  //   circles.push(
  //     new Circle(220 + i * 18, 100+randomIntFromRange(-2,2), radius, color)
  //   );
  // }

  // for (let i = 0; i < 10; i++) {
  //   const radius = innerWidth/45;
  //   const color = randomColor(colors);
  //   circles.push(
  //     new Circle(220 + i * 18, 300+randomIntFromRange(-2,2), radius, color)
  //   );
  // }
>>>>>>> 009d89a7f7fc650edf3629da809d0abe3373c8d7
}

// Animation Loop
let counter = 0;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  counter++;

  // if(swipeUp){
  //   setTimeout(function(){
  //     closeCanvas()
  //   },1400)}

  circles.forEach(circle => circle.update(circles));
}

init();
animate();

// var container = document.querySelector('canvas');
// var listener = SwipeListener(container);
// container.addEventListener('swipe', function(e) {
//   var directions = e.detail.directions;
//   if (directions.top) {
//     closeCanvas();
//   } else if (directions.right) {
//     document.querySelector('canvas').classList.add('right');
//   } else if (directions.left) {
//     document.querySelector('canvas').classList.add('left');
//   } else if (directions.bottom) {
//     document.querySelector('canvas').classList.add('bottom');
//   }
// });

// document.addEventListener('keydown', function(e) {
//   if (!e.isTrusted) return;
//   if (e.code === 'Escape' || e.code === 'Space') {
//     closeCanvas();
//   }
// });

let startingX

canvas.addEventListener('touchstart',function(e){
  startingX = e.touches[0].clientX

})


canvas.addEventListener('touchmove',function(e){
 const touchX = e.touches[0].clientX
 const change = startingX - touchX

 canvas.style.left = '-'+change+'px';
 e.preventDefault()
})

canvas.addEventListener('touchend',function(e){
  const treshold = screen.width/3
  const change = e.changedTouches[0].clientX - startingX

  if(change < treshold){
    canvas.style.left = '-100%'
    canvas.style.display = 'none'
  }else{
    canvas.style.transition = 'all 300ms'
    canvas.style.left = '0'
  }
 })