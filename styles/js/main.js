const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// //drawing rectangle

// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// //next lesson stroke drawing
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'red';
// ctx.strokeRect(100, 150, 150, 100);

// //ClearRect()
// ctx.clearRect(25, 25, 140, 90);

// // Filltext()
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50,);

// // Stroketext()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'Purple';
// ctx.strokeText('Hello World', 400, 100);

// Basics ends here

// Paths
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.closePath();
// // ctx.stroke();
// ctx.fillStyle = 'orange';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.lineTo(200, 50);
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'red';
// ctx.fill();

// Arc (circles)
// ctx.beginPath();
// const CenterX = canvas.width / 2;
// const CenterY = canvas.height / 2;

// ctx.arc(CenterX, CenterY, 220, 0, Math.PI * 2);

// ctx.moveTo(CenterX + 100, CenterY);

// ctx.arc(CenterX, CenterY, 100, 0, Math.PI, false);

// ctx.moveTo(CenterX - 60, CenterY - 80);

// ctx.arc(CenterX - 80, CenterY - 80, 20, 0, Math.PI * 2);

// ctx.moveTo(CenterX + 100, CenterY - 80);

// ctx.arc(CenterX + 80, CenterY - 80, 20, 0, Math.PI * 2);


// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);

// ctx.stroke();

// Animation 1

// const Circle = {
//     x: 200,
//     y: 200,
//     size: 30,
//     dx: 5,
//     dy: 4
// }

// const drawCircle = () => {
//     ctx.beginPath();
//     ctx.arc(Circle.x, Circle.y, Circle.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'orange';
//     ctx.fill();
// }
// const Update = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle();

//     Circle.x += Circle.dx;
//     Circle.y += Circle.dy;

//     if (Circle.x + Circle.size > canvas.width || Circle.x - Circle.size < 0) {
//         Circle.dx *= -1;
//     }


//     if (Circle.y + Circle.size > canvas.height || Circle.y - Circle.size < 0) {
//         Circle.dy *= -1;
//     }

//     requestAnimationFrame(Update);
// }

// Update();

// Animation 2 Character movement
const playerImg = document.getElementById("source");

const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
};
const drawPlayer = () => {
    ctx.drawImage(playerImg, player.x, player.y, player.w, player.h);
}

const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const newPostion = () => {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
};

const detectWalls = () => {
    if (player.x < 0) {
        player.x = 0;
    }
    else if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }

    if (player.y < 0) {
        player.y = 0;
    }
    else if (player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
    }
};

const Update = () => {
    clear();

    drawPlayer();

    newPostion();

    requestAnimationFrame(Update);
};

const moveUp = () => {
    player.dy = -player.speed;
}
const moveDown = () => {
    player.dy = player.speed;
}
const moveRight = () => {
    player.dx = player.speed;
}
const moveLeft = () => {
    player.dx = -player.speed;
}

const keyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    }
    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    }
    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    }
    else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

const keyUp = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'ArrowLeft' || e.key === 'Left' || e.key === 'ArrowUp' || e.key === 'Up' || e.key === 'ArrowDown' || e.key === 'Down') {
        player.dx = 0;
        player.dy = 0;
    }
}

Update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);