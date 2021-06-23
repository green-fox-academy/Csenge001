'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge


ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(400, 150);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(400, 250);
ctx.strokeStyle = 'yellow';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 250);
ctx.lineTo(200, 250);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 250);
ctx.lineTo(200, 150);
ctx.strokeStyle = 'red';
ctx.stroke();
