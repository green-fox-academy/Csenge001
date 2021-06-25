'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


function drawSquare (start: number, size: number) {
    ctx.fillStyle = "purple";
    ctx.fillRect(start, start, size, size);
}

let startingCoordinates: number = 0;

for (let i = 0; i < 6; i++) {
    let sizeSquare = 10 * i;
    drawSquare(startingCoordinates, sizeSquare);
    startingCoordinates = sizeSquare + startingCoordinates;
}