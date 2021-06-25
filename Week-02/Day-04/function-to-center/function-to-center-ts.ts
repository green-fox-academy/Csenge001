'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center


const canvasWidth: number = 600;
const canvasHeight: number = 400;

const endPointX: number = canvasWidth / 2;
const endPointY: number = canvasHeight / 2;

const linesFromTopBottom: number = canvasWidth / 20;
const linesFromLeftRight: number = canvasHeight / 20;


function drawLineToCenter (startPointX: number, startPointY: number) {
    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.lineTo(endPointX, endPointY);
    ctx.stroke();
}


for (let j: number = 0; j < 2; j++) {
    for (let i: number = 0; i <= linesFromTopBottom; i++) {
        drawLineToCenter (20 * i, j * canvasHeight);
    }
}


for (let l: number = 0; l < 2; l++) {
    for (let k: number = 0; k <= linesFromLeftRight; k++) {
        drawLineToCenter (canvasWidth * l, 20 * k);
    }
}