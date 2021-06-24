'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawSquare (startX: number, startY: number) {
    ctx.fillStyle = "purple";
    ctx.fillRect(startX, startY, 10, 10);
}

for (let i = 0; i < 19; i++) {
    drawSquare(10 + i * 10, 10 + i * 10)
}