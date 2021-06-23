'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function lineDrawing(startPointX: number, startPointY: number) {
    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.lineTo(startPointX + 50, startPointY);
    ctx.stroke();
}

for (let i = 0; i < 3; i++) {
    let startX = Math.floor(Math.random() * 550) + 1;
    let startY = Math.floor(Math.random() * 400) + 1;
    lineDrawing(startX, startY);
}
