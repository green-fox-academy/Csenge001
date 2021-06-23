'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

function drawRectangles (x: number, y: number, width: number, height: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
} 
    
drawRectangles(10, 10, 100, 100, "red");
drawRectangles(450, 100, 50, 250, "purple");
drawRectangles(50, 150, 100, 20, "pink");
drawRectangles(300, 100, 10, 50, "brown");
