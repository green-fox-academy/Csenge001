'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle
// draw a green vertical line to the canvas' middle

const horStartPointX: number = 0;
const horStartPointY: number = 200;
const horEndPointX: number = 600;
const horEndPointY: number = 200;
ctx.beginPath();
ctx.moveTo(horStartPointX, horStartPointY);
ctx.lineTo(horEndPointX, horEndPointY);
ctx.strokeStyle = 'red';
ctx.stroke();

const verStartPointX: number = 300;
const verStartPointY: number = 0;
const verEndPointX: number = 300;
const verEndPointY: number = 400;
ctx.beginPath();
ctx.moveTo(verStartPointX, verStartPointY);
ctx.lineTo(verEndPointX, verEndPointY);
ctx.strokeStyle = 'green';
ctx.stroke();