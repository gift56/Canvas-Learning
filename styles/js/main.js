const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

//drawing rectangle

ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

//next lesson stroke drawing
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.strokeRect(100, 150, 150, 100);