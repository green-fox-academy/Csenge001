'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter and draws one square
// Parameter: the square size
// The function shall draw a square of that size to the center of the canvas
// Draw at least 3 squares with that function.
// (the squares should not be filled otherwise they will hide each other)
// Avoid code duplication!

const canvasWidth: number = 600;
const canvasHeight: number = 400;

function drawSquare (size) {
    ctx.strokeRect((canvasWidth / 2) - (size / 2), (canvasHeight / 2) - (size / 2), size, size);
}

drawSquare (100);
drawSquare (25);
drawSquare (250);