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
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', (event)=> {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i=0; i<10;i++){
        particlesArray.push(new Particle());
    }
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
    for(let i=0; i<1;i++){
        particlesArray.push(new Particle());
    }
})

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random()*3- 1.5;
        this.speedY = Math.random()*3- 1.5;
    }
    update(){
        this.x +=this.speedX;
        this.y +=this.speedY;
        if (this.size>0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
        ctx.fill();
    }
}



function handleParticles(){
    for(let i=0; i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i,1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    // loop animate
    requestAnimationFrame(animate);
}
animate();