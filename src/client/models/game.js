// Canvas Setup
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 600;

context.font = '50px Georgia';

// Mouse Interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}

canvas.addEventListener('mousedown', (event) => {
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
    console.log(mouse.x, mouse.y);
});

