'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws one square
// Parameters: the x and y coordinates of the square's top left corner
// The function shall draw a 50x50 square from that point
// Draw 3 squares with that function
// Avoid code duplication!

function drawSquare (startX: number, startY: number) {
    ctx.strokeRect(startX, startY, 50, 50);
}

drawSquare (10, 10);
drawSquare (100, 100);
drawSquare (200, 200);