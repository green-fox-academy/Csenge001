'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop

const endPointX: number = 300;
const endPointY: number = 200;

function drawLine(startPointX: number, startPointY: number) {
    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.lineTo(endPointX, endPointY);
    ctx.stroke();
}

for (let i: number = 0; i < 3; i++) {
    let startX = Math.floor(Math.random() * 400) + 1;
    let startY = Math.floor(Math.random() * 400) + 1;
    drawLine (startX, startY);
}
