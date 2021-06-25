'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

const canvasWidth: number = 600;
const canvasHeight: number = 400;
const starSize: number = 10;
const starPiece: number = 50;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);


function drawStars (startX, startY, color) {
    ctx.fillStyle = color;
    ctx.fillRect(startX, startY, starSize, starSize);
}


for (let i = 0; i < starPiece; i++) {
    drawStars(Math. floor(Math. random() * 600) + 1, Math. floor(Math. random() * 400) + 1, "grey");
}


