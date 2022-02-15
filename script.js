const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// ctx holds reference to the canvas renderer context; we will use it to draw
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const particlesArray = [];

window.addEventListener('resize', ()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // rectangle
    // ctx.fillStyle = 'white';
    // ctx.fillRect(10,10,20,100);

    /*
    // arc
    // ctx.fillStyle = 'red';
    // ctx.strokeStyle = 'green';
    // ctx.lineWidth = 3;
    // // beginPath required for lines; not needed for shapes
    // ctx.beginPath();
    // // x,y,radius,start angle, end angle(in redian)
    // ctx.arc(100, 100, 50, 0, Math.PI*2)
    // ctx.fill();
    // ctx.stroke();
    */
})


const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('click', (event)=> {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI*2)
    ctx.fill();
    ctx.stroke();
}

canvas.addEventListener('mousemove', (event)=> {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

class Particle {
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random()*3- 1.5;
        this.speedY = Math.random()*3- 1.5;
    }
    update(){
        this.x +=this.speedX;
        this.y +=this.speedY;

    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI*2)
        ctx.fill();
    }
}

function init(){
    for(let i =0; i<100; i++){
        particlesArray.push(new Particle());
    }
}
init();

function handleParticles(){
    for(let i=0; i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    // loop animate
    requestAnimationFrame(animate);
}
animate();