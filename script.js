const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const degToRad = (degrees) => (Math.PI/180) * degrees;

const field_image = document.getElementById('source');


let circleDrawn = false;
let oldX, oldY;

// ctx.drawImage(field_image, 0, 0, 360, 180);

function draw(event=null) {
    if (event != null) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        ctx.clearRect(0, 0, 360, 180);
        ctx.drawImage(field_image, 0, 0, 360, 180);

        ctx.beginPath();
        ctx.strokeStyle = 'orange';
        ctx.arc(x, y, 8, 0, Math.PI*2);
        ctx.stroke();
        console.log("Coordinate x: " + x, "Coordinate y: " + y);
        console.log(Math.round(Math.round(x)/30) * Math.round(Math.round(y)/30));

    } else {
        ctx.drawImage(field_image, 0, 0, 360, 180);
    }
    
}

function mouseDown(event) {
    draw(event);
}

canvas.addEventListener('mousedown', (e) => {
    mouseDown(e);
});

window.addEventListener('load', (e) => {
    console.log("load");
    draw();
})

