'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

const canvasWidth: number = 600;
const canvasHeight: number = 400;
const squareSize: number = 10;

ctx.fillStyle = 'green';
ctx.fillRect((canvasWidth / 2) - (squareSize / 2), (canvasHeight / 2) - (squareSize / 2), squareSize, squareSize);

