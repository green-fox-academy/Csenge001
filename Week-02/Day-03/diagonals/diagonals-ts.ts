'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function drawDiagonal(startPointX: number, startPointY: number, endPointX: number, endPointY: number) {
    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.lineTo(endPointX, endPointY);
    if (startPointX === 0 && startPointY === 0) {
        ctx.strokeStyle = "green";
    } else {
        ctx.strokeStyle = "red";
    }
    ctx.stroke();
}

drawDiagonal(0, 0, 600, 400);
drawDiagonal(600, 0, 0, 400);