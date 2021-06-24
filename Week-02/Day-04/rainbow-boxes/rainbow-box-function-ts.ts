'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

const canvasWidth: number = 600;
const canvasHeight: number = 400;

function drawSquare (size: number, color: string ) {
    ctx.fillStyle = color;
    ctx.fillRect((canvasWidth / 2) - (size / 2), (canvasHeight / 2) - (size / 2), size, size);
}

for (let i = 0; i < 7; i++) {
    let colorArray: string[] = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#2E2B5F", "#8B00FF"];
    drawSquare (400 - (i * (400 / 7)), colorArray[i]);
}

