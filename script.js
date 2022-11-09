let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;

let position = [
  { x: cnv.width / 2, y: cnv.height / 2 },
  { x: 50, y: cnv.height / 2 - 35 },
  { x: 550, y: cnv.height / 2 - 35 },
];
setInterval(animate, 60);
function animate() {
  clearCanvas();
  ballMove();
  drawPlayer();
  ballCollision();
}
