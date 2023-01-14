const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const degToRad = (degrees) => (Math.PI/180) * degrees;



let circleDrawn = false;
let oldX, oldY;

function mousePosition(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    console.log("Coordinate x: " + x, "Coordinate y: " + y);

    if (!circleDrawn) {
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI*2);
        ctx.stroke();
        
    } else {
        ctx.clearRect(oldX, oldY, 8, 8);
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI*2);
        ctx.stroke();
    }

    oldX = x;
    oldY = y;
    circleDrawn = true;
}


canvas.addEventListener("mousedown", (e) => {
    mousePosition(e);
});


/*
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 300, 100);

ctx.fillStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);

ctx.clearRect(25, 25, 140, 90);

ctx.font = '30px Arial'
ctx.fillStyle = 'purple';
ctx.fillText('Hello', 400, 50);



ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(300, 300, 20, 0, Math.PI*2);
ctx.stroke();
*/