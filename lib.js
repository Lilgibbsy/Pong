//Ballmove
let dx = 0;
let dy = 0;
function randomStart() {
  let random = Math.round(Math.random() * 7);
  if (random == 0) {
    dx = 10;
    dy = 5;
  } else if (random == 1) {
    dx = -10;
    dy = -5;
  } else if (random == 2) {
    dx = 10;
    dy = -5;
  } else if (random == 3) {
    dx = -10;
    dy = 5;
  } else if (random == 4) {
    dx = 10;
    dy = 3;
  } else if (random == 5) {
    dx = -10;
    dy = -3;
  } else if (random == 6) {
    dx = 10;
    dy = -3;
  } else if (random == 7) {
    dx = -10;
    dy = 3;
  }
  console.log(dx, dy);
}
randomStart();
function ballMove() {
  ctx.fillStyle = "white";
  ctx.fillRect(position[0].x, position[0].y, 10, 10);
  position[0].x += dx;
  position[0].y += dy;
}
//PlayerMove
let dyTwo = 0;
function drawPlayer() {
  ctx.fillStyle = "white";
  ctx.fillRect(position[1].x, position[1].y, 5, 70);
  ctx.fillStyle = "white";
  ctx.fillRect(position[2].x, position[2].y, 5, 70);

  position[1].y += dyTwo;
}
document.addEventListener("keydown", playerMove);
function playerMove(event) {
  const up = 87;
  const down = 83;
  if (event.keyCode === up) {
    position[1].y -= 30;
  }
  if (event.keyCode === down) {
    position[1].y += 30;
  }
}
//Clear canvas
function clearCanvas() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = "grey";
  ctx.fillRect(cnv.width / 2, 0, 2, cnv.height);
  ctx.restore();
}
//Ball player collision
function ballCollision() {
  if (
    position[0].x == 50 &&
    position[0].y > position[1].y &&
    position[0].y - position[1].y < 70
  ) {
    dx = 0 - dx;
    dy = 0 - dy;
    console.log("Hit");
  }
}
//Ball wall collision
function ballWallCollision() {
  if (position[0].y > 500) {
    dx = 0 - dx;
    dy = 0 - dy;
    console.log("Hit");
  }
  if (position[0].y < 0) {
    dx = 0 - dx;
    dy = 0 - dy;
    console.log("Hit");
  }
}
