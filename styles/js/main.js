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

//ClearRect()
ctx.clearRect(25, 25, 140, 90);

// Filltext()
ctx.font = '30px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('Hello World', 400, 50,);

// Stroketext()
ctx.lineWidth = 1;
ctx.strokeStyle = 'Purple';
ctx.strokeText('Hello World', 400, 100);