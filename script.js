const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// ctx holds reference to the canvas renderer context; we will use it to draw
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

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


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // loop animate
    drawCircle();
    requestAnimationFrame(animate);
}
animate();