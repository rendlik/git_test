// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#63A992', '#A9C593', '#8D5F31', '#0E2A32'];

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

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };

  return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = {
      x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
      y: u1.y,
    };
    const v2 = {
      x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
      y: u2.y,
    };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

// Objects
const arr = [];
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x:(Math.random()+2) *  randomIntFromRange(2,4) * (Math.random() > 0.5  ? 1 : -1),
    y:(Math.random()+2) *  randomIntFromRange(2,4) * (Math.random() > 0.5  ? 1 : -1)
  };
  this.mass = 1;
  this.opacity = 0;
  this.initCor = {
    x: x,
    y: y,
  };
  this.initVel={
    x:this.velocity.x,
    y:this.velocity.y
  }

  console.log(this.initVel.x)

  this.update = (circles, line) => {
    this.draw();

    if(counter<120){
        const incrementX =this.initVel.x > 0  ? 2 : -2
        const incrementY =this.initVel.y > 0  ? 2 : -2
        this.velocity.x = (Math.random()-0.5) * incrementX
        this.velocity.y = (Math.random()-0.5) * incrementY
    }
    else if(counter == 121){
        this.velocity.x = this.initVel.x
        this.velocity.y = this.initVel.y 
    }

    // for (let i = 0; i < line.length; i++){
    //     for (let j = 0; j < circles.length; j++){
    //         if(distance(line[i].x,line[i].y,circles[j].x,circles[j].y) < 30){
    //             console.log(22)
    //         }
    //     }
    // }

    // for (let i = 0; i < circles.length; i++) {
    //   if (this == circles[i]) continue;
    //   if (
    //     distance(this.x, this.y, circles[i].x, circles[i].y) - this.radius * 2 <
    //     0
    //   ) {
    //     resolveCollision(this, circles[i]);
    //   }
    // }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
        if(counter>500){
            this.velocity.x = (this.initCor.x -this.x)/50
            this.velocity.y = Math.abs(this.initCor.y -this.y)/50
        }else{
            this.velocity.x = -this.velocity.x ;
        }

      
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
        if(counter>500){
            this.velocity.y = (this.initCor.y -this.y)/50
            this.velocity.x = Math.abs(this.initCor.x -this.x)/50
        }else{
            this.velocity.y = -this.velocity.y ;
        }
      
    }

    if (distance(this.x, this.y, mouse.x, mouse.y) < 60 && this.opacity < 0.7) {
      this.opacity += 0.02;
    } else if (this.opacity > 0) {
      this.opacity -= 0.02;
      this.opacity = Math.max(0, this.opacity);
    }

    if (counter > 180) {
      for (let i = 0; i < circles.length; i++) {
        if (distance(this.x, this.y, this.initCor.x, this.initCor.y) < 20) {
          this.velocity.x = 0;
          this.velocity.y = 0;
          
          this.opacity = 0.5
        }
      }
    }
    // for (let i = 0; i < circles.length; i++){
    //     if(distance())
    // }
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

    // c.beginPath()
    // c.arc(200,200, 50, 0, Math.PI * 2, false);
    // c.moveTo(100,100)
    // c.lineTo(300,300)

    // c.moveTo(150,50)
    // c.lineTo(350,250)
    // c.strokeStyle = 'black'
    // c.stroke()
  };
}

// Implementation
let circles;
let line;

function init() {
  circles = [];
  line = [];
  const nbrCircles = innerHeight * innerWidth / 1000;
  for (let i = 0; i < 20; i++) {
    const radius = 30;
    // let x = randomIntFromRange(radius, innerWidth - radius);
    // let y = randomIntFromRange(radius, innerHeight - radius);
    const color = randomColor(colors);
    // if (i !== 0) {
    //   for (let j = 0; j < circles.length; j++) {
    //     if (distance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
    //       x = randomIntFromRange(radius, innerWidth - radius);
    //       y = randomIntFromRange(radius, innerHeight - radius);
    //       j = -1;
    //     }
    //   }
    // }
    circles.push(
      new Circle(200, 100 + i * 20, radius, color)
    );
  }

  for (let i = 0; i < 10; i++) {
    const radius = 30;
    const color = randomColor(colors);
    circles.push(
      new Circle(220 + i * 18, 100, radius, color)
    );
  }

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
  // line.push(new Circle(400,300+i,.2,'black'))
}

// console.log(innerHeight*innerWidth

// Animation Loop
let counter = 0;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  counter++;
  console.log(counter)
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  circles.forEach(circle => circle.update(circles));
  //   line.forEach(l => l.draw());
}

init();
animate();
// setInterval(function(){
//     console.log(arr)
// },1000)
