'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

function checkerboard (startX: number, startY: number) {
    ctx.fillStyle = "black";
    ctx.fillRect(startX, startY, 50, 50);
}

for (let j: number = 0; j < 4; j++) {
    for (let i: number = 0; i < 6; i++) {
        checkerboard(i * 100, j * 100);
    }
}

for (let k: number = 0; k < 4; k++) {
    for (let l: number = 0; l < 6; l++) {
        checkerboard(50 + l * 100, 50 + k * 100);
    }
}